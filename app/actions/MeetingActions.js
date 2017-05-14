import alt from '../alt';

class MeetingActions {
  constructor() {
    this.generateActions(
      'changeAudioState',
      'changeRecognizeState',
      'changeVideoState',
      'changeInviteState',
      'Updatetext',
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
      'changeAgendaState',
      'receiveMsg'
    );
  }
}

export default alt.createActions(MeetingActions);