import alt from '../alt';
import HeaderActions from '../actions/HeaderActions';

class HeaderStore {
    constructor() {
        this.bindActions(HeaderActions);
        this.systemTime = ''; //系統時間
        this.srderTime = ''; //預約會議時間
    }

    onGetSystemTimeSuccess(data) {   
        this.systemTime = data; //將時間指派給傳來的值
    }

    onGetSystemTimeFail(data) {
        alert('Can not get TIME!');
    }

    onGetOrderTimeSuccess(data) {
        this.orderTime = data;
    }

    onGetOrderTimeFail(data) {
        //錯誤顯示
    }
}

export default alt.createStore(HeaderStore);
