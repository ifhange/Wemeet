import alt from '../alt';
import HeaderActions from '../actions/HeaderActions';

class HeaderStore {
  constructor(){
    this.bindActions(HeaderActions);
    this.userName = '';
    this.userImgURL = '';
    this.Online = '';
  }

    onGetUserNameSuccess(data) {
      this.userName = data.name;
  }

    onGetUserImgSuccess(imgURL) {
      this.userImgURL = imgURL;
  }

    onGetUserImgFail(data) {
      alert('Fail');
  }

    onGetOnlineSuccess(data) {
    this.Online = data.status;
  }

    onGetOnlineFail(data) {
      alert('Fail');
  }
}

export default alt.createStore(HeaderStore);