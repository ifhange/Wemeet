import alt from '../alt';
//alt 是 store和action的膠水


/*
  这里我们有3个action，一个使用ajax获取数据
  ，另外两个用来通知store获取数据是成功还是失败
  /Action可以很复杂，也可以很简单。有些action我
  们不关心它们做了什么，我们只关心它们是否被触发
*/
class FriendListActions {
  constructor() {
    this.generateActions(
      'getFriend',
      'getTopCharactersFail'
    );
  } 

  getTopCharacters() {
  }
}

export default alt.createActions(FriendListActions);
/*
我们通过alt.createActions将FooterActions封装并暴露出来，
然后我们可以在Footer组件里导入并使用它。
*/