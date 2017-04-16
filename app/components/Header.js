import React from 'react';
import {Link} from 'react-router';
import HeaderStore from '../stores/HeaderStore';
import HeaderActions from '../actions/HeaderActions';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = HeaderStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    HeaderStore.listen(this.onChange);
    HeaderActions.getUserImg();
    HeaderActions.getUserName();
    HeaderActions.getOnline();
  }

  componentWillUnmount() {
    HeaderStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return(
      <div id="head">
        <div id="user_infro">
          <div id="circle"><img id="user_img" src={this.state.userImgURL}></img></div>
          <div id="user_name">{this.state.userName}</div>
          <div id="user_status">{this.state.Online}</div>
        </div>
        <div id="status">
          <div id="time">目前時間：4/6 21:00:31</div>
          <div id="order">近期預約的會議：2017/4/6 18:00 專題開會</div>
          <div id="logo"></div>
        </div>
      </div>
    );
  }
}

export default Header;
