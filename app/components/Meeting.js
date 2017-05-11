import React from 'react';
import {Link} from 'react-router';
import MeetingStore from '../stores/MeetingStore' ;
import MeetingActions from '../actions/MeetingActions';

class Meeting extends React.Component {
  constructor(props){
    super(props);
    this.state = MeetingStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    MeetingStore.listen(this.onChange);
  }

  componentWillUnmount() {
    MeetingStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return(
      <div id="box-b">

        <div id="meet_chat">

          <div id="chat_menu">
            <div id="button"></div>
            <div id="meet_name">WeMeet開會群組</div>
          </div>

          <div id="chatbox">
            嗨
          </div>

          <div id="chat_input">
            <textarea id="input"></textarea>
            <input className="sent" type="submit" value="送出"/>
          </div>

        </div> 

        <div id="feature">

          <div className="left">
            <button id={this.state.audio-state} onClick={this.onClick-audio}>靜音</button>
            <button id={this.state.video-state} onClick={this.state.video-state}>視訊</button>
          </div>

          <div className="center">
            <button id="invite" onClick={this.state.invite}>邀請</button>
            <button id="brainstorming" onClick={this.state.invite}>腦力激盪</button>
            <button id="collaborative" onClick={this.state.invite}>共筆</button>
          </div>

          <div className="right">
            <button id="end" onClick={this.state.invite}>結束會議</button>
            <button id="fullscreen" onClick={this.state.invite}>全螢幕</button>
          </div>

        </div>

        <div id="meet_main">
          <div id="screen_detail">
            <button id="pause">停止</button>
            <button id='pen'>繪畫</button>
            <button id='download'>儲存</button>
          </div>

        </div>

      </div>
    );
  }
}

export default Meeting;
