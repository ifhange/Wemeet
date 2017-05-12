import React from 'react';
import {BrowserRouter as Router, Route , browserHistory } from 'react-router-dom';
import UserState from './UserState';
import Header from './Header';
import Menu from './Menu';
import Main from './Main';
import Meeting from './Meeting';
import Chatroom from './Chatroom';
import History from './History';
import FriendList from './FriendList';


class App extends React.Component {
    render() {
        return (
        	<Router history={browserHistory}>
	            <div>
	                <UserState/>  
	                <Header/>
                    <Menu/>
                    <FriendList />
	                <Route exact={true} path="/" component={Main}/>
                    <Route exact={true} path='/chatroom' component={Chatroom} />
                    <Route exact={true} path='/meeting' component={Meeting} />
                    <Route exact={true} path='/history' component={History} />
	            </div>
            </Router>
        );
    }
}
export default App;
