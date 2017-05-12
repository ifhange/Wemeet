import alt from '../alt';

class MeetingActions {
  constructor() {
    this.generateActions(
      'changeAudioState',
      'changeVideoState',
      'changeInviteState',
      'changeVideoReadyState',
      'gotLocalVideo',
      'newParticipant',
      'updateResult'
    );
  }
}

export default alt.createActions(MeetingActions);