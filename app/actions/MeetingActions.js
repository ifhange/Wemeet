import alt from '../alt';

class MeetingActions {
  constructor() {
    this.generateActions(
      'changeAudioState',
      'changeRecognizeState',
      'changeVideoState',
      'changeInviteState',
      'changeAgendaState',
      'addMytext',
      'changeVideoReadyState',
      'gotLocalVideo',
      'newParticipant',
      'updateResult',
      'addAgenda',
      'deleteAgenda',
      'listenAgenda'
      'addRemoteTag',
      'deleteRemoteTag',
      'addRemoteStreamURL',
      'queueCandidate'
    );
  }
}

export default alt.createActions(MeetingActions);