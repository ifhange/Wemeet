import alt from '../alt';

class HeaderActions {
  constructor(){
    this.generateActions(
      'getSystemTimeSuccess',
      'getSystemTimeFail',
      'getOrderTimeSuccess',
      'getOrderTimeFail'
    );
  }

  getSystemTime() {
    //需要取得系統時間
    this.actions.getSystemTimeSuccess(data);
    this.actions.getSystemTimeFail(data);
  }

  getOrderTime() {
    //需要取得預約會議時間
    this.actions.getOrderTimeSuccess(data);
    this.actions.getOrderTimeFai(data);
  }

}

export default alt.createActions(HeaderActions);