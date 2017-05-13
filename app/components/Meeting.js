import React from 'react';
import MeetingStore from '../stores/MeetingStore';
import MeetingActions from '../actions/MeetingActions';
import chat from '../lib/chat';
import recognition from '../lib/recognition';
import Recorder from '../lib/recorder';
import socketIO from 'socket.io-client';
let io = socketIO();
let socket = io.connect('https://140.123.175.95.8787');
let configuration = {
  'iceServers': [{
    'url': 'stun:stun.l.google.com:19302'
  }, {
    'url': 'stun:stun.services.mozilla.com'
  }]
};
let room = window.location.hash;

class Meeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = MeetingStore.getState();
        this.onChange = this.onChange.bind(this);
        this.recorder = new Recorder();
        this.Chat = chat.createNew();
        this.Recognizer = recognition.createNew(MeetingActions.updateReslt);
        this.localUserID = "";
        // this.videoList = [];
        // this.tagList = {};
        this.isRecording = true;
        this.isPlaying = true;
        this.meetpage = window.location.href;
    }

    componentDidMount() {
        for (var i = 0; i < this.state.langs.length; i++) {
            this.refs.select_language.options[i] = new Option(this.state.langs[i][0], i);
        }
        this.refs.select_language.selectedIndex = 36;
        this.updateCountry();
        this.refs.select_dialect.selectedIndex = 2;
        MeetingStore.listen(this.onChange);
        this.Chat.getUserMedia(MeetingActions.changeVideoReadyState, MeetingActions.gotLocalVideo);
        if (!room) {
            window.location.hash = Math.floor((1 + Math.random()) * 1e16).toString(16).substring(8);
        };

        //加入房間訊息
        socket.on('joined', (room, clientID) => {
            console.log('This peer has joined room: ' + room + ' with client ID ' + clientID);
            this.localUserID = clientID;
            socket.emit('newParticipant', clientID, room);
        });

        socket.on('newParticipant', (participantID) => {
            console.log('收到新人加入的訊息');
            //接到新人加入的訊息時，檢查是否已有連線
            if (this.state.connections[participantID]) {
                console.log("Connections with" + participantID + "already exists");
                return;
            } else {
                let remote = this.addUser();
                //主動建立連線
                let isInitiator = true;
                let peerConn = this.Chat.createPeerConnection(isInitiator, configuration, participantID, socket, remote);
                peerConn.createOffer()
                    .then((offer) => {
                        peerConn.setLocalDescription(offer);
                        socket.emit('offerRemotePeer', offer, this.localUserID, participantID);
                    })
                    .catch((e) => {
                        console.log('發生錯誤了看這裡: ' + e);
                    });
                MeetingActions.newParticipant({ a: participantID, b: peerConn });
            }
        });

        socket.on('onIceCandidate', (candidate, sender) => {
            console.log('收到遠端的candidate，要加入: ' + JSON.stringify(candidate));
            this.state.connections[sender].addIceCandidate(new RTCIceCandidate(candidate))
                .catch((e) => {
                    console.log('發生錯誤了看這裡: ' + e);
                });
        });

        socket.on('offer', (offer, sender) => {
            if (this.state.connections[sender]) {
                console.log("Connections with" + sender + "already exists");
                return;
            } else {
                let remote = this.addUser();
                console.log('收到遠端的 offer，要建立連線並處理');
                let isInitiator = false;
                let peerConn = this.Chat.createPeerConnection(isInitiator, configuration, sender, socket, remote);
                peerConn.setRemoteDescription(new RTCSessionDescription(offer))
                    .then(() => {
                        return peerConn.createAnswer();
                    })
                    .then((answer) => {
                        console.log('創建好本地端的 answer，要傳出去');
                        peerConn.setLocalDescription(answer);
                        socket.emit('answerRemotePeer', answer, this.localUserID, sender);
                    })
                    .catch((e) => {
                        console.log('發生錯誤了看這裡:' + e);
                    });
                MeetingActions.newParticipant({ a: sender, b: peerConn });
            }
        });

        socket.on('answer', (answer, sender) => {
            console.log('answer' + JSON.stringify(answer));
            connections[sender].setRemoteDescription(new RTCSessionDescription(answer));
        });

        socket.on('participantLeft', (participantID) => {
            delete this.state.connections[participantID];
        });

        socket.on('videoFromDB', (arrayBuffer) => {
            console.log("Getting blob form DB and server!!");
            let blob = new Blob([arrayBuffer], { type: 'video/webm' });
            let url = window.URL.createObjectURL(blob);
            let a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";
            a.href = url;
            a.download = localUserID + '.webm';
            a.click();
            window.URL.revokeObjectURL(url);
        })
    }

    componentWillUnmount() {
        MeetingStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    sendText() {
        let inputText = this.refs.meet_input.value;
        let mytext = this.Chat.sendText(inputText, this.localUserID);
        MeetingActions.addMytext(mytext);
    }

    addUser() {
        let remote = document.createElement('video');
        remote.classList.add('userVideo');
        this.refs.meet_main.appendChild(remote);
    }

    toUser() {
        let file = this.refs.meet_fileupload.files[0];
        this.Chat.sendFileToUser(file);
    }

    toggleRecording() {
        if (isRecording) {
            this.isRecording = false;
        }
        this.isRecording = true;
        this.isPlaying = false;
    }

    toggleRecognizing() {
        this.Recognizer.toggleButtonOnclick();
    }

    download() {
        this.recorder.download()
    }

    play() {
        this.recorder.play()
        this.isPlaying = true;
    }

    updateCountry() {
        for (let i = this.refs.select_dialect.options.length - 1; i >= 0; i--) {
            this.refs.select_dialect.remove(i);
        }
        //方言
        let list = this.state.langs[this.refs.select_language.selectedIndex];
        for (let i = 1; i < list.length; i++) {
            this.refs.select_dialect.options.add(new Option(list[i][1], list[i][0]));
        }
    }

    onClick_audioToggle() {
        MeetingActions.changeAudioState();
    }

    onClick_videoToggle() {
        MeetingActions.changeVideoState();
    }

    onClick_invitepage() {
        MeetingActions.changeInviteState();
    }

    onClick_backtoindex() {
        window.location = 'https://140.123.175.95:8787/';
    }

    render() {
        // for (let id in this.state.connections) {
        // 	this.tagList[id] = <video key={id} className={xxx} ></video>;
        // }

        let meetChatTest =  Object.keys(this.state.userlist).map((keyName, keyIndex) => {
          return (
          <a href="chatroom"><div id="friend_person">
          <div id="circle1"><img id="friend_image" src="../img/logo_user.png"></img></div>
          <div id="friend_name">{keyName}</div>
          </div></a>
          )
        });

        return (
            <div id='in'>
				<div className="box-b">
					<div id="meet_chat">
						<div id="chat_menu">
							<div id="button"></div>
							<div id="meet_name">WeMeet開會群組</div>
						</div>

						<div id="chatbox">
							<div id="number_sent">
								<div className="arrow_box"><div id="meet_text">{this.myself_text}</div></div>
							</div>

							<div id="me_sent">
								<div className="arrow_box1"><div id="meet_text">測試測試</div></div>
							</div>

						</div>

						<div id='meet_upload'>
							<input id='fileicon' type='file' ref='meet_fileupload' />
						</div>

						<div id="meet_chat_input">
							<textarea id="meet_input" ref='meet_input' ></textarea>
							<button className="sent" type="submit" ref='meet_submit' onClick={this.sendText.bind(this)}>送出</button>
						</div>

					</div>
					<div id="feature">

						<div className="left">
							<button id={this.state.audioImg} onClick={this.onClick_audioToggle.bind(this)} >{this.state.audioState}</button>
							<button id={this.state.videoImg} onClick={this.onClick_videoToggle.bind(this)} >{this.state.videoState}</button>
						</div>

						<div className="center">
							<button id="invite" onClick={this.onClick_invitepage}>邀請</button>
							<button id="number" onClick={this.state.invite}>目前議程</button>

							<button id="brainstorming" onClick={this.state.invite}>腦力激盪</button>
							<button id="collaborative" onClick={this.state.invite}>共筆</button>
						</div>

						<div className="right">
							<button id="end" onClick={this.onClick_backtoindex}>結束會議</button>
						</div>
					</div>
					<div id="meet_main" ref="meet_main">						
						<div id={this.state.recordState} >
							<select name="language" id='language' ref='select_language'>
							</select>
							<select name="dialect" id='dialect' ref='select_dialect'>
							</select>
						</div>

						<div id={this.state.inviteState} >
							<div id='meetpage'>網址：</div>
							<textarea id='pagetext' >{this.meetpage}</textarea>
						</div>			
						<video className='userVideo' id='user' src={this.state.videoIsReady ? this.state.localVideoURL : ""}></video>

						<div id='meet_agenda'>
							<div id='now_agenda'>目前議程</div>
							<textarea id='agenda_text'>
								1. ㄚㄚㄚㄚ
								2. 哀哀哀哀哀
								3. GOOOOO
							</textarea>
						</div>

					</div>

				</div>
			</div>
		)
	}
}
export default Meeting;

