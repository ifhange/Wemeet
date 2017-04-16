import alt from '../alt';

class UserStateActions {
  constructor(){
    this.generateActions(
      'getUsernameSuccess'
    );
  } 

  getUserName() {
    this.actions.getUsernameSuccess(data);
    //還沒補
  }

}

export default alt.createActions(UserStateActions);