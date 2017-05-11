import React from 'react';
import {Link} from 'react-router';
import ChatroomStore from '../stores/ChatroomStore' ;
import ChatroomrActions from '../actions/ChatroomActions';

class Chatroom extends React.Component {
  constructor(props){
    super(props);
    this.state = ChatroomStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    ChatroomStore.listen(this.onChange);
    ChatroomActions.getSystemTime();
  }

  componentWillUnmount() {
    ChatroomStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return(
        <div id="box-b">

          <div id="chat_box">

            <div id="friend_sent">
              <div id="come_time">22:00</div>
              <div className="arrow_box"><div id="text">測試測試</div></div>
            </div>

            <div id="myself_sent">
              <div id="sent_time">22:01</div>
              <div className="arrow_box1"><div id="text">測試測試</div></div>
            </div>

            <div id="friend_sent">
              <div id="come_time">22:00</div>
              <div className="arrow_box"><div id="text">測試測試</div></div>
            </div>

            <div id="myself_sent">
              <div id="sent_time">22:01</div>
              <div className="arrow_box1"><div id="text">測試測試</div></div>
            </div>

            <div id="friend_sent">
              <div id="come_time">22:00</div>
              <div className="arrow_box"><div id="text">測試測試</div></div>
            </div>

            <div id="myself_sent">
              <div id="sent_time">22:01</div>
              <div className="arrow_box1"><div id="text">測試測試</div></div>
            </div>

            <div id="friend_sent">
              <div id="come_time">22:00</div>
              <div className="arrow_box"><div id="text">測試測試</div></div>
            </div>

            <div id="myself_sent">
              <div id="sent_time">22:01</div>
              <div className="arrow_box1"><div id="text">測試測試</div></div>
            </div>

          </div>

          <div id="chat_input">
            <textarea id='input'></textarea>
            <input className="sent" type="submit"/>
          </div>
          
        </div>
    );
  }
}

export default Chatroom;