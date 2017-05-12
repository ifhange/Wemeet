import React from 'react';
import UserStateStore from '../stores/UserStateStore';
import UserStateActions from '../actions/UserStateActions';

class UserState extends React.Component {
  constructor(props){
    super(props);
    this.state = UserStateStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    UserStateStore.listen(this.onChange);
    //UserStateActions.getUserImg();
    //UserStateActions.getUserName();
    //UserStateActions.getOnline();
  }

  componentWillUnmount() {
    UserStateStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }
 
  render() {
    return(
        <div id="user_infro">
          <div id="circle"><img id="user_img" src={this.state.userImgURL}></img></div>
          <div id="user_name">{this.state.userName}</div>
          <div id="user_status">{this.state.online}</div>
        </div> 
    );
  }
}

export default UserState;
