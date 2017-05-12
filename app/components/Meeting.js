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
		//this.Recognizer = recognition.createNew();
		this.localUserID = "";
		// this.videoList = [];
		// this.tagList = {};
		this.meetpage = window.location.href;
	}

	componentDidMount() {
		MeetingStore.listen(this.onChange);
		this.Chat.getUserMedia(MeetingActions.changeVideoReadyState, MeetingActions.gotLocalVideo);
		if (!room) {
			room = Math.floor((1 + Math.random()) * 1e16).toString(16).substring(8);;
		};
		socket.emit('join', room);

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
				let remote = addUser();
				//主動建立連線
				let isInitiator = true;
				let peerConn = this.Chat.createPeerConnection(isInitiator, configuration, participantID, socket, remote);
				peerConn.createOffer()
					.then((offer) => {
						peerConn.setLocalDescription(offer);
						socket.emit('offerRemotePeer', offer, localUserID, participantID);
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
				let remote = addUser();
				console.log('收到遠端的 offer，要建立連線並處理');
				let isInitiator = false;
				let peerConn = createPeerConnection(isInitiator, configuration, sender, socket, remote);
				peerConn.setRemoteDescription(new RTCSessionDescription(offer))
					.then(() => {
						return peerConn.createAnswer();
					})
					.then((answer) => {
						console.log('創建好本地端的 answer，要傳出去');
						peerConn.setLocalDescription(answer);
						socket.emit('answerRemotePeer', answer, localUserID, sender);
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
			delete connections[participantID];
			delete remoteStream[participantID];
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
		this.Chat.sendText(inputText);
		inputText = '';
		aler(inputText);
	}

	addUser() {
		let remote = document.createElement('video');
		remote.classList.add('');
		this.refs.meet_main.appendChild(remote);
		return remote;
	}

	toDB() {

	}

	toUser() {
		let file = this.refs.meet_fileupload.files[0];
		this.Chat.sendFileToUser(file);
	}

	onClick_audioToggle() {
		MeetingActions.changeAudioState();
	}

	onClick_videoToggle() {
		MeetingActions.changeVideoState();
	}


	render() {
		// for (let id in this.state.connections) {
		// 	this.tagList[id] = <video key={id} className={xxx} ></video>;
		// }
		return (
			<div id='in'>
				<div id="box-b">
					<div id="meet_chat">
						<div id="chat_menu">
							<div id="button"></div>
							<div id="meet_name">WeMeet開會群組</div>
						</div>

						<div id="chatbox">

							<div id="number_sent">
								<div className="arrow_box"><div id="meet_text">測試測試</div></div>
							</div>

							<div id="me_sent">
								<div className="arrow_box1"><div id="meet_text">測試測試</div></div>
							</div>

							<div id="me_sent">
								<div className="arrow_box1"><a ref='meet_filedowload'><div id="meet_text">測試測試</div></a></div>
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
							<button id="invite" onClick={this.state.invite}>邀請</button>
							<button id="number" onClick={this.state.invite}>目前成員</button>
							<button id="brainstorming" onClick={this.state.invite}>腦力激盪</button>
							<button id="collaborative" onClick={this.state.invite}>共筆</button>
						</div>

						<div className="right">
							<button id="end" onClick={this.state.invite}>結束會議</button>
						</div>
					</div>

					<div id="meet_main" ref="meet_main">
						<div id="invite_detail">
							<div id='meetpage'>網址：</div>
							<textarea id='pagetext' onfocus="this.select()" onmouseover="this.focus()">{this.meetpage}</textarea>
						</div>
						<video id='uservideo' src={this.state.videoIsReady ? this.state.localVideoURL : ""}></video>
					</div>
				</div>
			</div>
		);
	}
}
export default Meeting;


/*const styles = {
	button: {
		margin: "1em"
	}
}
class MyTest extends React.Component {
	constructor(props) {
		super(props)
		this.recorder = new Recorder();
		this.state = {
			ready: false,
			isRecording: this.recorder.isRecording
		}
	}
	// async componentDidMount() {
	// 	let that=this
	//     await navigator.mediaDevices.getUserMedia({
	//             audio: false,
	//             video: true
	//         })
	//         .then((stream) => {
	//             return new Promise(
	//                 (res, rej) => {
	// 					that.recorder.setStream(stream)
	//                     res()
	//                 }
	//             )
	//         })
	//         .catch((error) => {
	//             console.log('navigator.getUserMedia error: ', error);
	//         })
	// 	this.setState({ready:true})
	// }
	startRecording() {
		//alert(1)
		this.recorder.toggleRecording()
		this.setState({
			isRecording: this.recorder.isRecording,
			isPlaying: this.recorder.isPlaying
		})

	}
	stopRecording() {
		this.recorder.toggleRecording()
		this.setState({
			isRecording: this.recorder.isRecording
		})
	}
	download() {
		console.log(this)
		this.recorder.download()
	}
	play() {
		this.recorder.play()
		this.setState({
			isPlaying: this.recorder.isPlaying
		})
	}
	render() {
		let { recorder } = this
		return (
			<div>
				Andy感謝祭
				<div>
					<button style={styles.button} disabled={!this.state.ready} onClick={this.startRecording.bind(this)}>開始錄影</button>
					<button style={styles.button} disabled={!this.state.ready} onClick={this.stopRecording.bind(this)}>結束錄影</button>
					<button style={styles.button} disabled={!this.state.ready}>上傳錄影</button>
					<button style={styles.button} disabled={!this.state.ready} onClick={this.download.bind(this)}>下載錄影</button>
					<button style={styles.button} disabled={!this.state.ready} onClick={this.play.bind(this)}>下載錄影</button>
				</div>
				<div>
					<video src={this.state.isRecording || this.state.isPlaying ? recorder.streamUrl : ""} controls={this.state.isPlaying}></video>
				</div>
			</div>
		)
	}
}*/