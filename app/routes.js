import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import UserState from './components/UserState';
import Header from './components/Header';
import Main from './components/Main';
import FriendList from './components/FriendList';
import Menu from './components/Menu';
import Chatroom from './components/Chatroom';
import Meeting from './components/Meeting';

export default (
  <Route handler={App}>
    <Route path='/' handler={Main} />
    <Route path='/chatroom' handler={Chatroom} />
    <Route path='/meeting' handler={Meeting} />
  </Route>
);