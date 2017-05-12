import alt from '../alt';

class MeetingActions {
  constructor() {
    this.generateActions(
      'changeAudioState',
      'changeVideoReadyState',
      'gotLocalVideo',
      'newParticipant',
      'updateResult'
    );
  }
}

export default alt.createActions(MeetingActions);