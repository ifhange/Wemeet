import React from 'react';
import FriendListStore from '../stores/FriendListStore';
import FriendListActions from '../actions/FriendListActions';
import socket from '../socket';

class FriendList extends React.Component {
    constructor(props) {
        super(props);
        this.state = FriendListStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        FriendListStore.listen(this.onChange);

        socket.on('newRoom', (newList) => {
            FriendListActions.setRoomList(newList);
        })

        socket.on('userList', (userList) => {
            FriendListActions.setUserList(userList);
        })
    }

    componentWillUnmount() {
        FriendListStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        //好友名單上限資料
        let room = this.state.roomList.map((room) => {
            return (
                <a href="chatroom">
                    <div id="friend_person">
                        <div id="circle1">
                            <img id="friend_image" src="../img/logo_user.png"></img>
                        </div>
                        <div id="friend_name">{room}</div>
                    </div>
                </a>
            );
        })

        let user = this.state.userList.map((user) => {
            return (
                <a href="chatroom">
                    <div id="friend_person">
                        <div id="circle1">
                            <img id="friend_image" src="../img/logo_user.png"></img>
                        </div>
                        <div id="friend_name">{user}</div>
                    </div>
                </a>
            );
        })

        return (
            <div id="friendlist">
                <div id='friend_text'>正在線上：</div>
                <div id='online'>
                    {user.length > 1 ? user:room}
                </div>
            </div>
        );
    }
}

export default FriendList;
