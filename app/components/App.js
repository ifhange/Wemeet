import React from 'react';
import { RouteHandler } from 'react-router';
import UserState from './UserState';
import Header from './Header';
import Main from './Main';

class App extends React.Component {
    render() {
        return (
            <div>
                <UserState/>  
                <Header/>
                <Main/>
                <RouteHandler/>
            </div>
        );
    }
}
export default App;
