import alt from '../alt';

class MeetingActions {
  constructor() {
    this.generateActions(
      'changeAudioState',
      'changeVideoReadyState',
      'gotLocalVideo',
      'newParticipant'
    );
  }
}

export default alt.createActions(MeetingActions);