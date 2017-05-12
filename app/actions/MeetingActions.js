import alt from '../alt';

class MeetingActions {
  constructor() {
    this.generateActions(
      'changeAudioState',
      'changeVideoState',
      'changeVideoReadyState',
      'gotLocalVideo',
      'newParticipant'
    );
  }

}

export default alt.createActions(MeetingActions);