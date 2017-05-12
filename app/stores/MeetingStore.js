import alt from '../alt';
import MeetingActions from '../actions/MeetingActions';

class MeetingStore {
  constructor() {
    this.bindActions(MeetingActions);
    this.connections = {}; //存放連線中的人的socket.id
    this.videoIsReady = false;
    this.audioOn = false;
    this.localVideoURL = '';
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