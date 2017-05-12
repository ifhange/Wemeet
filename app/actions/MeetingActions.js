import alt from '../alt';

class MeetingActions {
  constructor() {
    this.generateActions(
      'changeAudioState',
      'changeVideoState',
      'changeInviteState',
      'changeVideoReadyState',
      'gotLocalVideo',
      'newParticipant'
    );
  }
}

export default alt.createActions(MeetingActions);