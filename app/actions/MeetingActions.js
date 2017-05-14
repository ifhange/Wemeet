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
      'addAgenda',
      'deleteAgenda',
      'listenAgenda',
      'addRemoteTag',
      'deleteRemoteTag',
      'addRemoteStreamURL',
      'queueCandidate',
      'changeAgendaState'
    );
  }
}

export default alt.createActions(MeetingActions);