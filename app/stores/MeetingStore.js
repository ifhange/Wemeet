import alt from '../alt';
import MeetingActions from '../actions/MeetingActions';

class MeetingStore {
  constrcutor(){
    this.bindActions(Meetingactions);
    this.audio-state = 'audio-on'; //設定講話者靜音
    this.video-state = 'video-on'; //設定視訊無畫面
    //還未完成
  }


  //還未完成

}

export default alt.createStore(MeetingStore);