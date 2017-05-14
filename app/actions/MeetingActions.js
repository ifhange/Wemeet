import alt from '../alt';

class MeetingActions {
  constructor() {
    this.generateActions(
      'changeAudioState',
      'changeRecognizeState',
      'changeVideoState',
      'changeInviteState',

      'addMytext',
      'changeVideoReadyState',
      'gotLocalVideo',
      'newParticipant',
      'updateResult',
      'addRemoteTag',
      'deleteRemoteTag',
      'addRemoteStreamURL',
      'queueCandidate'
    );
  }
}

export default alt.createActions(MeetingActions);