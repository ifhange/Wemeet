import alt from '../alt';

class MeetingActions {
  constructor() {
    this.generateActions(
      'changeAudioState',
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
    );
  }
}

export default alt.createActions(MeetingActions);