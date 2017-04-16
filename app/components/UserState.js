import React from 'react';
import {Link} from 'react-router';
import UserStateStore from '../stores/UserStateStore';
import UserStateActions from '../actions/UserStateActions';

class UserState extends React.Component {
  constructor(props) {
    super(props);
    this.state = UserStateStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    UserStateStore.listen(this.onChange);
    UserStateActions.getUserName();  
  }

  componentWillUnmount() {
    UserStateStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }  
  
  render() {
    return (
      <UserState>
          <div id='user_infro'>
            <div id='circle'></div>
            <div id='user_name'>{this.state.userName}</div>
            <div id='user_status'>線上</div>
          </div>
      </UserState>
    );
  }
}

export default UserState;