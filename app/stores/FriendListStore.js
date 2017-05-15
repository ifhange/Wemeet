import alt from '../alt';
import FriendListActions from '../actions/FriendListActions';


//在store中创建的变量，比如this所赋值的变量，都将成为状态的一部分。

class FriendListStore {
    constructor() {
        this.bindActions(FriendListActions);
        this.userList = [];
        this.roomList = [];
    }

    setUserList(data) {
        this.userList = data;
        //console.log(data,this.userList);
    }

    setRoomList(data){
    	this.roomList = data;
    	//console.log(data,this.roomList);
    }

}

export default alt.createStore(FriendListStore);
