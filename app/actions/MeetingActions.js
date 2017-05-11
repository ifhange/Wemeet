import alt from '../alt';

class MeetingActions {
  constructor(){
    this.generateActions(
      'changeaudiostate'
    );
  }
  /*
    handleaudioClick(id) {
    if(this.state.active){
      this.setState({'active': false,'class': 'album'})
    }else{
      this.setState({'active': true,'class': 'active'})
    }
  }*/

  //尚未完成

}

export default alt.createActions(MeetingActions);