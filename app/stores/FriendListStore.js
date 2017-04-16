import alt from '../alt';
import FriendListActions from '../actions/FriendListActions';


//在store中创建的变量，比如this所赋值的变量，都将成为状态的一部分。

class FriendListStore {
  constructor() {
    this.bindActions(FriensListActions);
    //bindActions用于将action绑定到store中定义的相应处理函数
    this.characters = [];
  }

  onGetTopCharactersSuccess(data) {
    this.characters = data.slice(0, 5);
  }

  onGetTopCharactersFail(jqXhr) {
    // Handle multiple response formats, fallback to HTTP status code number.
    toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
  }
}

export default alt.createStore(FriendListStore);