import alt from '../alt';
import MeetingActions from '../actions/MeetingActions';

class MeetingStore {
  constructor() {
    this.bindActions(MeetingActions);
    this.connections = {}; //存放連線中的人的socket.id
    this.videoIsReady = false;
    this.audioOn = false;
    this.localVideoURL = '';

    this.audioState = '取消辨識';
    this.audioImg = 'audio-on';
    this.videoState = '取消視訊';
    this.videoImg = 'video-off';
    this.inviteState = 'invite_detail_off';
    this.recordState = 'recognition_detail_on'; 
  }

  changeAudioState() {
    if(this.audioState == '取消辨識' && this.recordState == 'recognition_detail_on') {
      this.audioState = '開始辨識';
      this.audioImg = 'audio-off';
      this.recordState = 'recognition_detail_off';
    } else {
      this.audioState = '取消辨識';
      this.audioImg = 'audio-on';
      this.recordState = 'recognition_detail_on';
    }

  }

  changeVideoState() {
    if(this.videoState == '取消視訊') {
      this.videoState = '視訊';
      this.videoImg = 'video-on';
    } else {
      this.videoState = '取消視訊';
      this.videoImg = 'video-off';
    }
  }

  changeInviteState() {
    if(this.inviteState == 'invite_detail_off') {
      this.inviteState = 'invite_detail_on';
    } else {
      this.inviteState = 'invite_detail_off';
    }
  }

  changeVideoReadyState() {
    this.videoIsReady = !this.videoIsReady;
  }
  gotLocalVideo(videoURL) {
    this.localVideoURL = videoURL;
  }

  newParticipant({a,b}) {
    connections[a] = b;
  }

  changeAudioState() {

  }
  changeVideoReadyState() {
    this.videoIsReady = !this.videoIsReady;
  }
  gotLocalVideo(videoURL) {
    this.localVideoURL = videoURL;
  }

  newParticipant({a,b}) {
    connections[a] = b;
  }
}

export default alt.createStore(MeetingStore);