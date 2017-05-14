import React from 'react';
import FriendListStore from '../stores/FriendListStore';
import FriendListActions from '../actions/FriendListActions';
import socketIO from 'socket.io-client';
import Meeting from './Meeting';
let io = socketIO();
let socket = io.connect('https://140.123.175.95.8787');
let configuration = {
  'iceServers': [{
    'url': 'stun:stun.l.google.com:19302'
  }, {
    'url': 'stun:stun.services.mozilla.com'
  }]
};

class FriendList extends React.Component {
  constructor(props){
    super(props);
    this.state = FriendListStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    FriendListStore.listen(this.onChange);
    socket.on('login', function(userlist) {
      FriendListActions.getUserlist(userlist);
    });

    socket.on('logout', function(userlist1) {
      FriendListActions.getUserlist(userlist1);
    });
  }

  componentWillUnmount() {
    FriendListStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    //好友名單上限資料
    
    let friendonline =  Object.keys(this.state.userlist).map((keyName, keyIndex) => {
      return (
      <a href="chatroom"><div id="friend_person">
      <div id="circle1"><img id="friend_image" src="../img/logo_user.png"></img></div>
      <div id="friend_name">{keyName}</div>
      </div></a>
      )
    });

    return (
      <div id="friendlist">
          <div id='friend_text'>正在線上：</div>
          <div id='online'>
            {friendonline}
          </div>
      </div>
    );
  }
}

export default FriendList;

/*
map:一個for-each循环，和Jade和Handlebars中的类似，
但在这里你可以将结果分配给一个变量，然后你就可以在JSX里使用它了，
就和用其它变量一样。它在React中很常见，你会经常用到。

Link组件：当指定合适的href属性时会渲染一个链接标签，
它还知道链接的目标是否可用，从而给链接加上active的类。
如果你使用React Router，你需要使用Link模块在应用内部进行导航。
*/
