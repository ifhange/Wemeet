import alt from '../alt';
import UserStateActions from '../actions/UserStateActions';

class UserStateStore {
  constructor() {
    this.bindActions(UserStateActions);
    //bindActions用于将action绑定到store中定义的相应处理函数
    this.userName = '';
  } 

  onGetUserNameSuccess() {
    this.userName = '李佳怡';
    //還沒補
  }

  onGetUserNameFail() {
    //還沒寫
  } 

}

export default alt.createStore(UserStateStore);