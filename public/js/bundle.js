(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var ChatroomActions = function ChatroomActions() {
  _classCallCheck(this, ChatroomActions);

  this.generateActions();
}

//尚未完成

;

//尚未完成
exports['default'] = _alt2['default'].createActions(ChatroomActions);
module.exports = exports['default'];

},{"../alt":7}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

//alt 是 store和action的膠水

/*
  这里我们有3个action，一个使用ajax获取数据
  ，另外两个用来通知store获取数据是成功还是失败
  /Action可以很复杂，也可以很简单。有些action我
  们不关心它们做了什么，我们只关心它们是否被触发
*/

var FriendListActions = (function () {
  function FriendListActions() {
    _classCallCheck(this, FriendListActions);

    this.generateActions('getFriend', 'getTopCharactersFail');
  }

  _createClass(FriendListActions, [{
    key: 'getTopCharacters',
    value: function getTopCharacters() {}
  }]);

  return FriendListActions;
})();

exports['default'] = _alt2['default'].createActions(FriendListActions);

/*
我们通过alt.createActions将FooterActions封装并暴露出来，
然后我们可以在Footer组件里导入并使用它。
*/
module.exports = exports['default'];

},{"../alt":7}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var HeaderActions = (function () {
    function HeaderActions() {
        _classCallCheck(this, HeaderActions);

        this.generateActions('getSystemTimeSuccess', 'getSystemTimeFail', 'getOrderTimeSuccess', 'getOrderTimeFail');
    }

    _createClass(HeaderActions, [{
        key: 'getSystemTime',
        value: function getSystemTime() {
            try {
                var d = new Date();
                d = d.getFullYear() + "-" + ('0' + (d.getMonth() + 1)).slice(-2) + "-" + ('0' + d.getDate()).slice(-2) + " " + ('0' + d.getHours()).slice(-2) + ":" + ('0' + d.getMinutes()).slice(-2) + ":" + ('0' + d.getSeconds()).slice(-2);
                this.actions.getSystemTimeSuccess(d);
                setTimeout("showTime()", 1000);
            } catch (err) {
                this.actions.getSystemTimeFail(err);
            }
        }

        //等預約會議功能完成後，從資料庫取得最靠近的一筆預約會議
        // getOrderTime() {
        //     try {

        //     } catch () {

        //     }
        //     //需要取得預約會議時間
        //     this.actions.getOrderTimeSuccess(data);
        //     this.actions.getOrderTimeFai(data);
        // }

    }]);

    return HeaderActions;
})();

exports['default'] = _alt2['default'].createActions(HeaderActions);
module.exports = exports['default'];

},{"../alt":7}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var MainActions = function MainActions() {
  _classCallCheck(this, MainActions);

  this.generateActions();
}

//尚未完成

;

//尚未完成
exports['default'] = _alt2['default'].createActions(MainActions);
module.exports = exports['default'];

},{"../alt":7}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var MeetingActions = function MeetingActions() {
  _classCallCheck(this, MeetingActions);

  this.generateActions('changeaudiostate');
}
/*
  handleaudioClick(id) {
  if(this.state.active){
    this.setState({'active': false,'class': 'album'})
  }else{
    this.setState({'active': true,'class': 'active'})
  }
}*/

//尚未完成

;

exports['default'] = _alt2['default'].createActions(MeetingActions);
module.exports = exports['default'];

},{"../alt":7}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var UserStateActions = (function () {
  function UserStateActions() {
    _classCallCheck(this, UserStateActions);

    this.generateActions('getUserImgSuccess', 'getUserImgFail', 'getUserNameSuccess', 'getUserNameFail', 'getOnlineSuccess', 'getOnlineFail');
  }

  _createClass(UserStateActions, [{
    key: 'getUserName',
    value: function getUserName() {
      var _this = this;

      fetch('https://140.123.175.95:8787/userName').then(function (res) {
        if (res.ok) {
          return res.json();
        }
        _this.actions.getUserNameFail(res);
      }).then(function (json) {
        _this.actions.getUserNameSuccess(json);
      })['catch'](function (error) {
        //alert(error);
      });
    }
  }, {
    key: 'getUserImg',
    value: function getUserImg() {
      var _this2 = this;

      fetch('https://140.123.175.95:8787/userImg').then(function (res) {
        if (res.ok) {
          return res.blob();
        }
        _this2.actions.getUserImgFail(res);
      }).then(function (blob) {
        var objectURL = URL.createObjectURL(blob);
        _this2.actions.getUserImgSuccess(objectURL);
      })['catch'](function (error) {
        //alert(error);
      });
    }
  }, {
    key: 'getOnline',
    value: function getOnline() {
      var _this3 = this;

      fetch('https://140.123.175.95:8787/userStatus').then(function (res) {
        if (res.ok) {
          return res.json();
        }
        _this3.actions.getOnlineFail(res);
      }).then(function (json) {
        console.log(json.status);
        _this3.actions.getOnlineSuccess(json);
      })['catch'](function (error) {
        //alert(error);
      });
    }
  }]);

  return UserStateActions;
})();

exports['default'] = _alt2['default'].createActions(UserStateActions);
module.exports = exports['default'];

},{"../alt":7}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

exports['default'] = new _alt2['default']();
module.exports = exports['default'];

},{"alt":"alt"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _UserState = require('./UserState');

var _UserState2 = _interopRequireDefault(_UserState);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Menu = require('./Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Main = require('./Main');

var _Main2 = _interopRequireDefault(_Main);

var _FriendList = require('./FriendList');

var _FriendList2 = _interopRequireDefault(_FriendList);

var _Meeting = require('./Meeting');

var _Meeting2 = _interopRequireDefault(_Meeting);

var App = (function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_UserState2['default'], null),
        _react2['default'].createElement(_Header2['default'], null),
        _react2['default'].createElement(_Menu2['default'], null),
        _react2['default'].createElement(_reactRouter.RouteHandler, null),
        _react2['default'].createElement(_FriendList2['default'], null)
      );
    }
  }]);

  return App;
})(_react2['default'].Component);

exports['default'] = App;
module.exports = exports['default'];

},{"./FriendList":10,"./Header":11,"./Main":12,"./Meeting":13,"./Menu":14,"./UserState":15,"react":"react","react-router":"react-router"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _storesChatroomStore = require('../stores/ChatroomStore');

var _storesChatroomStore2 = _interopRequireDefault(_storesChatroomStore);

var _actionsChatroomActions = require('../actions/ChatroomActions');

var _actionsChatroomActions2 = _interopRequireDefault(_actionsChatroomActions);

var Chatroom = (function (_React$Component) {
  _inherits(Chatroom, _React$Component);

  function Chatroom(props) {
    _classCallCheck(this, Chatroom);

    _get(Object.getPrototypeOf(Chatroom.prototype), 'constructor', this).call(this, props);
    this.state = _storesChatroomStore2['default'].getState();
    this.onChange = this.onChange.bind(this);
  }

  _createClass(Chatroom, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _storesChatroomStore2['default'].listen(this.onChange);
      ChatroomActions.getSystemTime();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _storesChatroomStore2['default'].unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { id: 'box-b' },
        _react2['default'].createElement(
          'div',
          { id: 'chat_box' },
          _react2['default'].createElement(
            'div',
            { id: 'friend_sent' },
            _react2['default'].createElement(
              'div',
              { id: 'come_time' },
              '22:00'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'arrow_box' },
              _react2['default'].createElement(
                'div',
                { id: 'text' },
                '測試測試'
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { id: 'myself_sent' },
            _react2['default'].createElement(
              'div',
              { id: 'sent_time' },
              '22:01'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'arrow_box1' },
              _react2['default'].createElement(
                'div',
                { id: 'text' },
                '測試測試'
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { id: 'friend_sent' },
            _react2['default'].createElement(
              'div',
              { id: 'come_time' },
              '22:00'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'arrow_box' },
              _react2['default'].createElement(
                'div',
                { id: 'text' },
                '測試測試'
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { id: 'myself_sent' },
            _react2['default'].createElement(
              'div',
              { id: 'sent_time' },
              '22:01'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'arrow_box1' },
              _react2['default'].createElement(
                'div',
                { id: 'text' },
                '測試測試'
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { id: 'friend_sent' },
            _react2['default'].createElement(
              'div',
              { id: 'come_time' },
              '22:00'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'arrow_box' },
              _react2['default'].createElement(
                'div',
                { id: 'text' },
                '測試測試'
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { id: 'myself_sent' },
            _react2['default'].createElement(
              'div',
              { id: 'sent_time' },
              '22:01'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'arrow_box1' },
              _react2['default'].createElement(
                'div',
                { id: 'text' },
                '測試測試'
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { id: 'friend_sent' },
            _react2['default'].createElement(
              'div',
              { id: 'come_time' },
              '22:00'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'arrow_box' },
              _react2['default'].createElement(
                'div',
                { id: 'text' },
                '測試測試'
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { id: 'myself_sent' },
            _react2['default'].createElement(
              'div',
              { id: 'sent_time' },
              '22:01'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'arrow_box1' },
              _react2['default'].createElement(
                'div',
                { id: 'text' },
                '測試測試'
              )
            )
          )
        ),
        _react2['default'].createElement(
          'div',
          { id: 'chat_input' },
          _react2['default'].createElement('textarea', { id: 'input' }),
          _react2['default'].createElement('input', { className: 'sent', type: 'submit' })
        )
      );
    }
  }]);

  return Chatroom;
})(_react2['default'].Component);

exports['default'] = Chatroom;
module.exports = exports['default'];

},{"../actions/ChatroomActions":1,"../stores/ChatroomStore":18,"react":"react","react-router":"react-router"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _storesFriendListStore = require('../stores/FriendListStore');

var _storesFriendListStore2 = _interopRequireDefault(_storesFriendListStore);

var _actionsFriendListActions = require('../actions/FriendListActions');

var _actionsFriendListActions2 = _interopRequireDefault(_actionsFriendListActions);

var FriendList = (function (_React$Component) {
  _inherits(FriendList, _React$Component);

  function FriendList(props) {
    _classCallCheck(this, FriendList);

    _get(Object.getPrototypeOf(FriendList.prototype), 'constructor', this).call(this, props);
    this.state = _storesFriendListStore2['default'].getState();
    this.onChange = this.onChange.bind(this);
  }

  _createClass(FriendList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _storesFriendListStore2['default'].listen(this.onChange);
      _storesFriendListStore2['default'].getFriendName();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _storesFriendListStore2['default'].unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'render',
    value: function render() {
      //好友名單上限資料
      var friendonline = this.state.characters.map(function (character) {
        return _react2['default'].createElement(
          'div',
          { id: 'firiend_person' },
          _react2['default'].createElement(
            'div',
            { id: 'circle1' },
            _react2['default'].createElement('img', { id: 'friend_image', src: character.img })
          ),
          _react2['default'].createElement(
            'div',
            { id: 'friend_name' },
            '安'
          )
        );
      });

      //好友名單離線資料
      var friendoff = this.state.characters.map(function (character) {
        return _react2['default'].createElement(
          'div',
          { id: 'firiend_person' },
          _react2['default'].createElement(
            'div',
            { id: 'circle1' },
            _react2['default'].createElement('img', { id: 'friend_image', src: character.img })
          ),
          _react2['default'].createElement(
            'div',
            { id: 'friend_name' },
            '安'
          )
        );
      });

      return _react2['default'].createElement(
        'div',
        { id: 'friendlist' },
        _react2['default'].createElement(
          'div',
          { id: 'online' },
          _react2['default'].createElement(
            'div',
            { id: 'text' },
            '正在線上：'
          ),
          _react2['default'].createElement(
            'a',
            { href: 'chatroom' },
            _react2['default'].createElement(
              'div',
              { id: 'friend_person' },
              _react2['default'].createElement(
                'div',
                { id: 'circle1' },
                _react2['default'].createElement('img', { id: 'friend_image', src: '../img/logo_user.png' })
              ),
              _react2['default'].createElement(
                'div',
                { id: 'friend_name' },
                '安'
              )
            )
          ),
          _react2['default'].createElement(
            'a',
            { href: 'chatroom' },
            _react2['default'].createElement(
              'div',
              { id: 'friend_person' },
              _react2['default'].createElement(
                'div',
                { id: 'circle1' },
                _react2['default'].createElement('img', { id: 'friend_image', src: '../img/logo_user.png' })
              ),
              _react2['default'].createElement(
                'div',
                { id: 'friend_name' },
                '安'
              )
            )
          ),
          _react2['default'].createElement(
            'a',
            { href: 'chatroom' },
            _react2['default'].createElement(
              'div',
              { id: 'friend_person' },
              _react2['default'].createElement(
                'div',
                { id: 'circle1' },
                _react2['default'].createElement('img', { id: 'friend_image', src: '../img/logo_user.png' })
              ),
              _react2['default'].createElement(
                'div',
                { id: 'friend_name' },
                '安'
              )
            )
          ),
          _react2['default'].createElement(
            'a',
            { href: 'chatroom' },
            _react2['default'].createElement(
              'div',
              { id: 'friend_person' },
              _react2['default'].createElement(
                'div',
                { id: 'circle1' },
                _react2['default'].createElement('img', { id: 'friend_image', src: '../img/logo_user.png' })
              ),
              _react2['default'].createElement(
                'div',
                { id: 'friend_name' },
                '安'
              )
            )
          ),
          _react2['default'].createElement(
            'a',
            { href: 'chatroom' },
            _react2['default'].createElement(
              'div',
              { id: 'friend_person' },
              _react2['default'].createElement(
                'div',
                { id: 'circle1' },
                _react2['default'].createElement('img', { id: 'friend_image', src: '../img/logo_user.png' })
              ),
              _react2['default'].createElement(
                'div',
                { id: 'friend_name' },
                '安'
              )
            )
          ),
          _react2['default'].createElement(
            'a',
            { href: 'chatroom' },
            _react2['default'].createElement(
              'div',
              { id: 'friend_person' },
              _react2['default'].createElement(
                'div',
                { id: 'circle1' },
                _react2['default'].createElement('img', { id: 'friend_image', src: '../img/logo_user.png' })
              ),
              _react2['default'].createElement(
                'div',
                { id: 'friend_name' },
                '安'
              )
            )
          )
        ),
        _react2['default'].createElement(
          'div',
          { id: 'off' },
          _react2['default'].createElement(
            'div',
            { id: 'text' },
            '離線：'
          ),
          _react2['default'].createElement(
            'a',
            { href: 'chatroom' },
            _react2['default'].createElement(
              'div',
              { id: 'friend_person' },
              _react2['default'].createElement(
                'div',
                { id: 'circle2' },
                _react2['default'].createElement('img', { id: 'friend_image', src: '../img/logo_user.png' })
              ),
              _react2['default'].createElement(
                'div',
                { id: 'friend_name' },
                '煩'
              )
            )
          )
        )
      );
    }
  }]);

  return FriendList;
})(_react2['default'].Component);

exports['default'] = FriendList;

/*
map:一個for-each循环，和Jade和Handlebars中的类似，
但在这里你可以将结果分配给一个变量，然后你就可以在JSX里使用它了，
就和用其它变量一样。它在React中很常见，你会经常用到。

Link组件：当指定合适的href属性时会渲染一个链接标签，
它还知道链接的目标是否可用，从而给链接加上active的类。
如果你使用React Router，你需要使用Link模块在应用内部进行导航。
*/
module.exports = exports['default'];

},{"../actions/FriendListActions":2,"../stores/FriendListStore":19,"react":"react","react-router":"react-router"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _storesHeaderStore = require('../stores/HeaderStore');

var _storesHeaderStore2 = _interopRequireDefault(_storesHeaderStore);

var _actionsHeaderActions = require('../actions/HeaderActions');

var _actionsHeaderActions2 = _interopRequireDefault(_actionsHeaderActions);

var Header = (function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    _classCallCheck(this, Header);

    _get(Object.getPrototypeOf(Header.prototype), 'constructor', this).call(this, props);
    this.state = _storesHeaderStore2['default'].getState();
    this.onChange = this.onChange.bind(this);
  }

  _createClass(Header, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _storesHeaderStore2['default'].listen(this.onChange);
      _actionsHeaderActions2['default'].getSystemTime();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _storesHeaderStore2['default'].unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { id: 'status' },
        _react2['default'].createElement(
          'div',
          { id: 'time' },
          '目前時間：',
          this.state.SystemTime
        ),
        _react2['default'].createElement(
          'div',
          { id: 'order' },
          '近期預約的會議：',
          this.state.OrderTime
        ),
        _react2['default'].createElement(
          'div',
          { id: 'logo' },
          _react2['default'].createElement('img', { src: '/img/index_logo2.png' })
        )
      );
    }
  }]);

  return Header;
})(_react2['default'].Component);

exports['default'] = Header;
module.exports = exports['default'];

},{"../actions/HeaderActions":3,"../stores/HeaderStore":20,"react":"react","react-router":"react-router"}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _storesMainStore = require('../stores/MainStore');

var _storesMainStore2 = _interopRequireDefault(_storesMainStore);

var _actionsMainActions = require('../actions/MainActions');

var _actionsMainActions2 = _interopRequireDefault(_actionsMainActions);

var Main = (function (_React$Component) {
  _inherits(Main, _React$Component);

  function Main(props) {
    _classCallCheck(this, Main);

    _get(Object.getPrototypeOf(Main.prototype), 'constructor', this).call(this, props);
    this.state = _storesMainStore2['default'].getState();
    this.onChange = this.onChange.bind(this);
  }

  _createClass(Main, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _storesMainStore2['default'].listen(this.onChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _storesMainStore2['default'].unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { id: 'box-b' },
        _react2['default'].createElement(
          'div',
          { id: 'in' },
          _react2['default'].createElement(
            'div',
            { id: 'add_meet' },
            _react2['default'].createElement('img', { src: '/img/addmeet1.png' }),
            _react2['default'].createElement(
              'div',
              { id: 'add' },
              '建立會議？'
            ),
            _react2['default'].createElement(
              'div',
              { id: 'add_text' },
              '將朋友寫入在以下欄位，即可立即開始會議'
            ),
            _react2['default'].createElement(
              'span',
              { className: 'input input--minoru' },
              _react2['default'].createElement('input', { className: 'input__field input__field--yoko', type: 'text', id: 'input-16' }),
              _react2['default'].createElement(
                'label',
                { className: 'input__label input__label--yoko', htmlFor: 'input-16' },
                _react2['default'].createElement(
                  'span',
                  { className: 'input__label-content input__label-content--yoko' },
                  '輸入朋友名稱'
                )
              )
            ),
            _react2['default'].createElement('input', { type: 'submit', className: 'myButton', name: 'login', id: 'login', value: 'GO!' })
          ),
          _react2['default'].createElement(
            'div',
            { id: 'join_meet' },
            _react2['default'].createElement('img', { src: '/img/joinmeet1.png' }),
            _react2['default'].createElement(
              'div',
              { id: 'add' },
              '加入會議？'
            ),
            _react2['default'].createElement(
              'div',
              { id: 'add_text' },
              '將朋友給您的代碼貼上再以下欄位'
            ),
            _react2['default'].createElement(
              'span',
              { className: 'input input--minoru' },
              _react2['default'].createElement('input', { className: 'input__field input__field--yoko', type: 'text', id: 'input-16' }),
              _react2['default'].createElement(
                'label',
                { className: 'input__label input__label--yoko', htmlFor: 'input-16' },
                _react2['default'].createElement(
                  'span',
                  { className: 'input__label-content input__label-content--yoko' },
                  '會議代碼'
                )
              )
            ),
            _react2['default'].createElement('input', { type: 'submit', className: 'myButton', name: 'login', id: 'login', value: 'GO!' })
          )
        )
      );
    }
  }]);

  return Main;
})(_react2['default'].Component);

exports['default'] = Main;
module.exports = exports['default'];

},{"../actions/MainActions":4,"../stores/MainStore":21,"react":"react","react-router":"react-router"}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _storesMeetingStore = require('../stores/MeetingStore');

var _storesMeetingStore2 = _interopRequireDefault(_storesMeetingStore);

var _actionsMeetingActions = require('../actions/MeetingActions');

var _actionsMeetingActions2 = _interopRequireDefault(_actionsMeetingActions);

var Meeting = (function (_React$Component) {
  _inherits(Meeting, _React$Component);

  function Meeting(props) {
    _classCallCheck(this, Meeting);

    _get(Object.getPrototypeOf(Meeting.prototype), 'constructor', this).call(this, props);
    this.state = _storesMeetingStore2['default'].getState();
    this.onChange = this.onChange.bind(this);
  }

  _createClass(Meeting, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _storesMeetingStore2['default'].listen(this.onChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _storesMeetingStore2['default'].unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { id: 'box-b' },
        _react2['default'].createElement(
          'div',
          { id: 'meet_chat' },
          _react2['default'].createElement(
            'div',
            { id: 'chat_menu' },
            _react2['default'].createElement('div', { id: 'button' }),
            _react2['default'].createElement(
              'div',
              { id: 'meet_name' },
              'WeMeet開會群組'
            )
          ),
          _react2['default'].createElement(
            'div',
            { id: 'chatbox' },
            '嗨'
          ),
          _react2['default'].createElement(
            'div',
            { id: 'chat_input' },
            _react2['default'].createElement('textarea', { id: 'input' }),
            _react2['default'].createElement('input', { className: 'sent', type: 'submit', value: '送出' })
          )
        ),
        _react2['default'].createElement(
          'div',
          { id: 'feature' },
          _react2['default'].createElement(
            'div',
            { className: 'left' },
            _react2['default'].createElement(
              'button',
              { id: this.state.audio - state, onClick: this.onClick - audio },
              '靜音'
            ),
            _react2['default'].createElement(
              'button',
              { id: this.state.video - state, onClick: this.state.video - state },
              '視訊'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'center' },
            _react2['default'].createElement(
              'button',
              { id: 'invite', onClick: this.state.invite },
              '邀請'
            ),
            _react2['default'].createElement(
              'button',
              { id: 'brainstorming', onClick: this.state.invite },
              '腦力激盪'
            ),
            _react2['default'].createElement(
              'button',
              { id: 'collaborative', onClick: this.state.invite },
              '共筆'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'right' },
            _react2['default'].createElement(
              'button',
              { id: 'end', onClick: this.state.invite },
              '結束會議'
            ),
            _react2['default'].createElement(
              'button',
              { id: 'fullscreen', onClick: this.state.invite },
              '全螢幕'
            )
          )
        ),
        _react2['default'].createElement(
          'div',
          { id: 'meet_main' },
          _react2['default'].createElement(
            'div',
            { id: 'screen_detail' },
            _react2['default'].createElement(
              'button',
              { id: 'pause' },
              '停止'
            ),
            _react2['default'].createElement(
              'button',
              { id: 'pen' },
              '繪畫'
            ),
            _react2['default'].createElement(
              'button',
              { id: 'download' },
              '儲存'
            )
          )
        )
      );
    }
  }]);

  return Meeting;
})(_react2['default'].Component);

exports['default'] = Meeting;
module.exports = exports['default'];

},{"../actions/MeetingActions":5,"../stores/MeetingStore":22,"react":"react","react-router":"react-router"}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var Menu = (function (_React$Component) {
  _inherits(Menu, _React$Component);

  function Menu() {
    _classCallCheck(this, Menu);

    _get(Object.getPrototypeOf(Menu.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Menu, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { id: 'menu' },
        _react2['default'].createElement(
          'a',
          { href: '/' },
          _react2['default'].createElement('img', { id: 'menu_icon', src: '../img/home.png', alt: '首頁', title: '首頁' })
        ),
        _react2['default'].createElement(
          'a',
          { href: 'friendList' },
          _react2['default'].createElement('img', { id: 'menu_icon', src: '../img/friend.png', alt: '好友', title: '好友' })
        ),
        '　',
        _react2['default'].createElement(
          'a',
          { href: 'history' },
          _react2['default'].createElement('img', { id: 'menu_icon', src: '../img/history.png', alt: '開會歷史', title: '開會歷史' })
        ),
        '　',
        _react2['default'].createElement(
          'a',
          { href: 'settle' },
          _react2['default'].createElement('img', { id: 'menu_icon', src: '../img/settle1.png', alt: '設定', title: '設定' })
        )
      );
    }
  }]);

  return Menu;
})(_react2['default'].Component);

exports['default'] = Menu;
module.exports = exports['default'];

},{"react":"react","react-router":"react-router"}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _storesUserStateStore = require('../stores/UserStateStore');

var _storesUserStateStore2 = _interopRequireDefault(_storesUserStateStore);

var _actionsUserStateActions = require('../actions/UserStateActions');

var _actionsUserStateActions2 = _interopRequireDefault(_actionsUserStateActions);

var UserState = (function (_React$Component) {
  _inherits(UserState, _React$Component);

  function UserState(props) {
    _classCallCheck(this, UserState);

    _get(Object.getPrototypeOf(UserState.prototype), 'constructor', this).call(this, props);
    this.state = _storesUserStateStore2['default'].getState();
    this.onChange = this.onChange.bind(this);
  }

  _createClass(UserState, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _storesUserStateStore2['default'].listen(this.onChange);
      _actionsUserStateActions2['default'].getUserImg();
      _actionsUserStateActions2['default'].getUserName();
      _actionsUserStateActions2['default'].getOnline();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _storesUserStateStore2['default'].unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { id: 'user_infro' },
        _react2['default'].createElement(
          'div',
          { id: 'circle' },
          _react2['default'].createElement('img', { id: 'user_img', src: this.state.userImgURL })
        ),
        _react2['default'].createElement(
          'div',
          { id: 'user_name' },
          this.state.userName
        ),
        _react2['default'].createElement(
          'div',
          { id: 'user_status' },
          this.state.Online
        )
      );
    }
  }]);

  return UserState;
})(_react2['default'].Component);

exports['default'] = UserState;
module.exports = exports['default'];

},{"../actions/UserStateActions":6,"../stores/UserStateStore":23,"react":"react","react-router":"react-router"}],16:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

_reactRouter2['default'].run(_routes2['default'], _reactRouter2['default'].HistoryLocation, function (Handler) {
  _react2['default'].render(_react2['default'].createElement(Handler, null), document.getElementById('app'));
});

},{"./routes":17,"react":"react","react-router":"react-router"}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _componentsApp = require('./components/App');

var _componentsApp2 = _interopRequireDefault(_componentsApp);

var _componentsUserState = require('./components/UserState');

var _componentsUserState2 = _interopRequireDefault(_componentsUserState);

var _componentsHeader = require('./components/Header');

var _componentsHeader2 = _interopRequireDefault(_componentsHeader);

var _componentsMain = require('./components/Main');

var _componentsMain2 = _interopRequireDefault(_componentsMain);

var _componentsFriendList = require('./components/FriendList');

var _componentsFriendList2 = _interopRequireDefault(_componentsFriendList);

var _componentsMenu = require('./components/Menu');

var _componentsMenu2 = _interopRequireDefault(_componentsMenu);

var _componentsChatroom = require('./components/Chatroom');

var _componentsChatroom2 = _interopRequireDefault(_componentsChatroom);

var _componentsMeeting = require('./components/Meeting');

var _componentsMeeting2 = _interopRequireDefault(_componentsMeeting);

exports['default'] = _react2['default'].createElement(
  _reactRouter.Route,
  { handler: _componentsApp2['default'] },
  _react2['default'].createElement(_reactRouter.Route, { path: '/', handler: _componentsMain2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/chatroom', handler: _componentsChatroom2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/meeting', handler: _componentsMeeting2['default'] })
);
module.exports = exports['default'];

},{"./components/App":8,"./components/Chatroom":9,"./components/FriendList":10,"./components/Header":11,"./components/Main":12,"./components/Meeting":13,"./components/Menu":14,"./components/UserState":15,"react":"react","react-router":"react-router"}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsChatroomActions = require('../actions/ChatroomActions');

var _actionsChatroomActions2 = _interopRequireDefault(_actionsChatroomActions);

var ChatroomStore = (function () {
  function ChatroomStore() {
    _classCallCheck(this, ChatroomStore);
  }

  _createClass(ChatroomStore, [{
    key: 'constrcutor',
    value: function constrcutor() {
      this.bingActions(_actionsChatroomActions2['default']);
      //還未完成
    }

    //還未完成

  }]);

  return ChatroomStore;
})();

exports['default'] = _alt2['default'].createStore(ChatroomStore);
module.exports = exports['default'];

},{"../actions/ChatroomActions":1,"../alt":7}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsFriendListActions = require('../actions/FriendListActions');

var _actionsFriendListActions2 = _interopRequireDefault(_actionsFriendListActions);

//在store中创建的变量，比如this所赋值的变量，都将成为状态的一部分。

var FriendListStore = (function () {
  function FriendListStore() {
    _classCallCheck(this, FriendListStore);

    this.bindActions(_actionsFriendListActions2['default']);
    //bindActions用于将action绑定到store中定义的相应处理函数
    this.characters = [];
  }

  _createClass(FriendListStore, [{
    key: 'onGetTopCharactersSuccess',
    value: function onGetTopCharactersSuccess(data) {
      this.characters = data.slice(0, 5);
    }
  }, {
    key: 'onGetTopCharactersFail',
    value: function onGetTopCharactersFail(jqXhr) {
      // Handle multiple response formats, fallback to HTTP status code number.
      toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
    }
  }]);

  return FriendListStore;
})();

exports['default'] = _alt2['default'].createStore(FriendListStore);
module.exports = exports['default'];

},{"../actions/FriendListActions":2,"../alt":7}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsHeaderActions = require('../actions/HeaderActions');

var _actionsHeaderActions2 = _interopRequireDefault(_actionsHeaderActions);

var HeaderStore = (function () {
  function HeaderStore() {
    _classCallCheck(this, HeaderStore);

    this.bindActions(_actionsHeaderActions2['default']);
    this.SystemTime = ''; //系統時間
    this.OrderTime = ''; //預約會議時間
  }

  _createClass(HeaderStore, [{
    key: 'onGetSystemTimeSuccess',
    value: function onGetSystemTimeSuccess(data) {
      this.SystemTime = data; //將時間指派給傳來的值
    }
  }, {
    key: 'onGetSystemTimeFail',
    value: function onGetSystemTimeFail(data) {
      //錯誤顯示
    }
  }, {
    key: 'onGetOrderTimeSuccess',
    value: function onGetOrderTimeSuccess(data) {
      this.OrderTime = this.data;
    }
  }, {
    key: 'onGetOrderTimeFail',
    value: function onGetOrderTimeFail(data) {
      //錯誤顯示
    }
  }]);

  return HeaderStore;
})();

exports['default'] = _alt2['default'].createStore(HeaderStore);
module.exports = exports['default'];

},{"../actions/HeaderActions":3,"../alt":7}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsMainActions = require('../actions/MainActions');

var _actionsMainActions2 = _interopRequireDefault(_actionsMainActions);

var MainStore = (function () {
  function MainStore() {
    _classCallCheck(this, MainStore);
  }

  _createClass(MainStore, [{
    key: 'constrcutor',
    value: function constrcutor() {
      this.bindActions(_actionsMainActions2['default']);
      //還未完成
    }

    //還未完成

  }]);

  return MainStore;
})();

exports['default'] = _alt2['default'].createStore(MainStore);
module.exports = exports['default'];

},{"../actions/MainActions":4,"../alt":7}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsMeetingActions = require('../actions/MeetingActions');

var _actionsMeetingActions2 = _interopRequireDefault(_actionsMeetingActions);

var MeetingStore = (function () {
  function MeetingStore() {
    _classCallCheck(this, MeetingStore);
  }

  _createClass(MeetingStore, [{
    key: 'constrcutor',
    value: function constrcutor() {
      this.bindActions(Meetingactions);
      this.audio_state = 'audio-on'; //設定講話者靜音
      this.video_state = 'video-on'; //設定視訊無畫面
      //還未完成
    }

    //還未完成

  }]);

  return MeetingStore;
})();

exports['default'] = _alt2['default'].createStore(MeetingStore);
module.exports = exports['default'];

},{"../actions/MeetingActions":5,"../alt":7}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsUserStateActions = require('../actions/UserStateActions');

var _actionsUserStateActions2 = _interopRequireDefault(_actionsUserStateActions);

var UserStateStore = (function () {
  function UserStateStore() {
    _classCallCheck(this, UserStateStore);

    this.bindActions(_actionsUserStateActions2['default']);
    this.userName = '';
    this.userImgURL = '';
    this.Online = '';
  }

  _createClass(UserStateStore, [{
    key: 'onGetUserNameSuccess',
    value: function onGetUserNameSuccess(data) {
      this.userName = data.name;
    }
  }, {
    key: 'onGetUserImgSuccess',
    value: function onGetUserImgSuccess(imgURL) {
      this.userImgURL = imgURL;
    }
  }, {
    key: 'onGetUserImgFail',
    value: function onGetUserImgFail(data) {
      alert('Fail');
    }
  }, {
    key: 'onGetOnlineSuccess',
    value: function onGetOnlineSuccess(data) {
      this.Online = data.status;
    }
  }, {
    key: 'onGetOnlineFail',
    value: function onGetOnlineFail(data) {
      alert('Fail');
    }
  }]);

  return UserStateStore;
})();

exports['default'] = _alt2['default'].createStore(UserStateStore);
module.exports = exports['default'];

},{"../actions/UserStateActions":6,"../alt":7}]},{},[16]);
