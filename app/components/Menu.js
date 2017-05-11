import React from 'react';
<<<<<<< HEAD
import MenuStore from '../stores/MenuStore' ;
import MenuActions from '../actions/MenuActions';
=======
import {Link} from 'react-router';
>>>>>>> refs/remotes/origin/master

class Menu extends React.Component {

  render() {
    return(
    <div id="menu">
      <a href='/'><img id="menu_icon" src="../img/home.png" alt="首頁"  title="首頁"/></a>
      <a href='friendList'><img id="menu_icon" src="../img/friend.png" alt="好友"  title="好友"/></a>　
      <a href='history'><img id="menu_icon" src="../img/history.png"alt="開會歷史" title="開會歷史"/></a>　
      <a href='settle'><img id="menu_icon" src="../img/settle1.png" alt="設定" title="設定"/></a>
    </div>
    );
  }
}

export default Menu;
