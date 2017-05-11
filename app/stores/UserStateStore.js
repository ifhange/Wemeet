import alt from '../alt';
import UserStateActions from '../actions/UserStateActions';

class UserStateStore {
    constructor() {
        this.bindActions(UserStateActions);
        this.userName = '';
        this.userImgURL = '';
        this.online = '';
    }

    onGetUserNameSuccess(data) {
        this.userName = data.name;
    }

    onGetUserImgSuccess(imgURL) {
        this.userImgURL = imgURL;
    }

    onGetUserImgFail(data) {

    }

    onGetOnlineSuccess(data) {
        this.online = data.status;
    }

    onGetOnlineFail(data) {

    }
}

export default alt.createStore(UserStateStore);
