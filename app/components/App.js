import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserState from './UserState';
import Header from './Header';
import Main from './Main';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <UserState/>  
                    <Header/>
                    <Route path="/" component = {Main}/>
                    <Route path="/Meeting" component = {Meeting}/>
                    <RouteHandler/>
                </div>
            </Router>
        );
    }
}
export default App;
