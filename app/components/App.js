import React from 'react';
import {RouteHandler} from 'react-router';
import Header from './Header';

class App extends React.Component {
  render() {
    return (
      	<div>
      		<Header />	
        	<RouteHandler />
      	</div>
    );
  }
}
export default App;