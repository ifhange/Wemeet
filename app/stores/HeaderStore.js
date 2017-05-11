import alt from '../alt';
import HeaderActions from '../actions/HeaderActions';

class HeaderStore {
  constructor(){
    this.bindActions(HeaderActions);
    this.SystemTime = ''; //系統時間
    this.OrderTime = ''; //預約會議時間
  }

  onGetSystemTimeSuccess(data){
    this.SystemTime = data ; //將時間指派給傳來的值
  }

  onGetSystemTimeFail(data){
    //錯誤顯示
  }

  onGetOrderTimeSuccess(data){
    this.OrderTime = this.data ;
  }

  onGetOrderTimeFail(data){
    //錯誤顯示
  }
}

export default alt.createStore(HeaderStore);