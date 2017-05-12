import alt from '../alt';
import MeetingActions from '../actions/MeetingActions';

class MeetingStore {
  constructor() {
    this.bindActions(MeetingActions);
    this.connections = {}; //存放連線中的人的socket.id
    this.videoIsReady = false;
    this.audioOn = false;
    this.localVideoURL = '';
    this.audioState = '靜音';
    this.audioImg = 'audio-on';
    this.videoState = '取消視訊';
    this.videoImg = 'video-off';
  }

  changeAudioState() {
    if(this.audioState == '靜音') {
      this.audioState = '取消靜音';
      this.audioImg = 'audio-off';
    } else {
      this.audioState = '靜音';
      this.audioImg = 'audio-on';
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