'use strict';

//回傳一個具有express的library的物件，當作處理request的Callback
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ type: 'image/*', extended: false, limit: '50mb' }));
app.use(bodyParser.json({ type: 'application/*', limit: '50mb' }));
app.use(bodyParser.text({ type: 'text/plain' }));
const fs = require('fs');
//const db = require('./app/lib/db.js');
let roomList = [];
let userInRoom = {};
let onlineUser = {}; //在線用戶
let onlineCount = 0; //在線用戶人數
let rooms = {};

//HTTPS參數
const option = {
    key: fs.readFileSync('./public/certificate/privatekey.pem'),
    cert: fs.readFileSync('./public/certificate/certificate.pem')
};

//對https Server內傳入express的處理物件
const server = require('https').createServer(option, app);
const io = require('socket.io')(server);
server.listen(8787);
console.log('已啟動伺服器!');


//資料庫「查詢」部分
app.get("/api/db/read/account", (req, res) => {
    db.Account.find({}, function(err, data) {
        if (err) throw err;
        res.send(data);
    })
});
app.get("/api/db/read/onlineList", (req, res) => {
    db.OnlineList.find({}, function(err, data) {
        if (err) throw err;
        res.send(data);
    })
});
app.get("/api/db/read/meetingList", (req, res) => {
    db.MeetingList.find({}, function(err, data) {
        if (err) throw err;
        res.send(data);
    })
});
app.get("/api/db/read/sourceList", (req, res) => {
    db.SourceList.find({}, function(err, data) {
        if (err) throw err;
        res.send(data);
    })
});

//資料庫「新增」部分
app.post("/api/db/create/register", (req, res) => {
    var { username, password, name, birthday, email, registerTime } = req.body;
    db.Account.create({
        username: username,
        password: password,
        name: name,
        birthday: birthday,
        email: email,
        registerTime: registerTime
    }, function(err, data) {
        if (err) console.log(err);
        console.log(data);
    });
});

app.post("/api/db/create/photo", (req, res) => {
    db.Account.findOneAndUpdate({ username: 'change' }, { photo: req.body.data }, (err, data) => {
        if (err) console.log(err);
        console.log('photo success');
    });
});

app.post("/api/db/save/video", (req, res) => {

});

app.get("/api/db/test", (req, res) => {
    res.sendFile(__dirname + '/public/src/je.jpg');
});



io.on('connection', function(socket) {
    //console.log("接收到使用者: " + socket.id + " 的連線");

    socket.on('addAgenda', function(list) {
        socket.broadcast.emit('addAgendaForAll', list);
    });

    socket.on('deleteAgenda', function(list) {
        socket.broadcast.emit('deleteAgendaForAll', list);
    });

    socket.on('id', (msg) => {
        socket.emit('success', socket.id);
    });

    socket.on('join', function(room) {
        //將使用者加入房間
        socket.join(room);
        //console.log('收到「加入」房間: ' + room + ' 的請求');
        if (!roomList.includes(room)) {
            //將房間加入"房間"列表
            roomList.push(room);
            console.log(roomList, '已經有加ㄌ喔!');
        }
        //將使用者加入"房間-使用者"列表中
        if (!userInRoom[room]) {
            userInRoom[room] = [socket.id]
        } else {
            userInRoom[room].push(socket.id);
        }
        //將新的房間列表廣播出去
        socket.broadcast.emit('newRoom', roomList);
        socket.emit('newRoom', roomList);
        console.log('廣播房間名單囉!', roomList)

        socket.broadcast.emit('userList', userInRoom[room]);
        socket.emit('userList', userInRoom[room]);
        console.log('廣播使用者名單囉!', userInRoom[room])
    });

    socket.on('leaveRoom', function(room) {
        //當使用者離開聊天室，就將他移出房間
        socket.leave(room);
        if (userInRoom[room]) {
            //如果那間房存在，就從裡面把這個人移除
            userInRoom[room].slice(1, userInRoom[room].indexOf(socket.id));
        }
        if (!userInRoom[room]) {
            //如果房間裏面都沒人了，就把房間刪掉
            roomList.slice(1, roomList.indexOf(room));
        }
        //將新的房間名單傳出去
        socket.broadcast.emit('newRoom', roomList);
        socket.emit('newRoom', roomList);
        console.log('廣播房間名單囉!', roomList)

        //再使用者加入房間的時候，把把房內人員名單傳給使用者
        socket.broadcast.emit('userList', userInRoom[room]);
        socket.emit('userList', userInRoom[room]);
        console.log('廣播使用者名單囉!', userInRoom[room])
    });

    socket.on('newParticipantA', function(msgSender, room) {
        socket.to(room).emit('newParticipantB', msgSender);
    });

    socket.on('newParticipantWithNothing', function(msgSender, room) {
        socket.to(room).emit('newParticipantWithNothing', msgSender);
    });

    socket.on('offerRemotePeer', function(offer, sender, receiver) {
        socket.to(receiver).emit('offer', offer, sender);
    });

    socket.on('answerRemotePeer', function(answer, sender, receiver) {
        socket.to(receiver).emit('answer', answer, sender);
    });

    socket.on('onIceCandidateA', function(candidate, sender, receiver) {
        socket.to(receiver).emit('onIceCandidateB', candidate, sender);
    });

    socket.on('disconnect', function() {
        //console.log("使用者: " + socket.id + " 離開了");
        socket.broadcast.emit('participantLeft', socket.id);
    });

    socket.on('requestVideoFromUser', function(sender) {
        console.log('使用者:' + socket.id + '請求了他的錄影BLOB檔');
    });

    socket.on('bye', function() {
        console.log('received bye');
    });

});

//沒有定義路徑，則接收到請求就執行這個函數
app.use(express.static(__dirname + '/public'));

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
