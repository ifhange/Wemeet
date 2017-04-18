import React from 'react';
import {Link} from 'react-router';
import MenuStore from '../stores/MenuStore' ;
import MenuActions from '../actions/MenuActions';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = HeaderStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    HeaderStore.listen(this.onChange);
    HeaderActions.getSystemTime();
  }

  componentWillUnmount() {
    HeaderStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return(
        <div id="status">
          <div id="time">目前時間：{this.state.SystemTime}</div>
          <div id="order">近期預約的會議：{this.state.OrderTime}</div>
          <div id="logo"><img src='/img/index_logo2.png'></img></div>
        </div>
    );
  }
}

export default Header;
