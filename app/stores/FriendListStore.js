import alt from '../alt';
import FriendListActions from '../actions/FriendListActions';


//在store中创建的变量，比如this所赋值的变量，都将成为状态的一部分。

class FriendListStore {
  constructor() {
    this.bindActions(FriendListActions);
    this.userlist = [];
  }

  getUserlist(data){
		this.userlist = data[0];
	}

}

export default alt.createStore(FriendListStore);