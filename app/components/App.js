import React from 'react';
import { RouteHandler } from 'react-router';
import UserState from './UserState';
import Header from './Header';
import Menu from './Menu';
import Main from './Main';
import FriendList from './FriendList';
import Meeting from './Meeting';

class App extends React.Component {
  render() {
    return (
      	<div>
      		<UserState />	
          <Header />
          <Menu />
          <RouteHandler />
          <FriendList />
      	</div>
    );
  }
}
export default App;
