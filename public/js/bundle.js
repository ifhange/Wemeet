(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
      //需要取得系統時間
      this.actions.getSystemTimeSuccess(data);
      this.actions.getSystemTimeFail(data);
    }
  }, {
    key: 'getOrderTime',
    value: function getOrderTime() {
      //需要取得預約會議時間
      this.actions.getOrderTimeSuccess(data);
      this.actions.getOrderTimeFai(data);
    }
  }]);

  return HeaderActions;
})();

exports['default'] = _alt2['default'].createActions(HeaderActions);
module.exports = exports['default'];

},{"../alt":4}],2:[function(require,module,exports){
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

},{"../alt":4}],3:[function(require,module,exports){
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
        alert(error);
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
        alert(error);
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
        alert(error);
      });
    }
  }]);

  return UserStateActions;
})();

exports['default'] = _alt2['default'].createActions(UserStateActions);
module.exports = exports['default'];

},{"../alt":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

exports['default'] = new _alt2['default']();
module.exports = exports['default'];

},{"alt":"alt"}],5:[function(require,module,exports){
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

var _Main = require('./Main');

var _Main2 = _interopRequireDefault(_Main);

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
        _react2['default'].createElement(_Main2['default'], null),
        _react2['default'].createElement(_reactRouter.RouteHandler, null)
      );
    }
  }]);

  return App;
})(_react2['default'].Component);

exports['default'] = App;
module.exports = exports['default'];

},{"./Header":6,"./Main":7,"./UserState":8,"react":"react","react-router":"react-router"}],6:[function(require,module,exports){
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

},{"../actions/HeaderActions":1,"../stores/HeaderStore":11,"react":"react","react-router":"react-router"}],7:[function(require,module,exports){
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
              { 'class': 'input input--minoru' },
              _react2['default'].createElement('input', { 'class': 'input__field input__field--yoko', type: 'text', id: 'input-16' }),
              _react2['default'].createElement(
                'label',
                { 'class': 'input__label input__label--yoko', 'for': 'input-16' },
                _react2['default'].createElement(
                  'span',
                  { 'class': 'input__label-content input__label-content--yoko' },
                  '輸入朋友名稱'
                )
              )
            ),
            _react2['default'].createElement('input', { type: 'submit', 'class': 'myButton', name: 'login', id: 'login', value: 'GO!' })
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
              { 'class': 'input input--minoru' },
              _react2['default'].createElement('input', { 'class': 'input__field input__field--yoko', type: 'text', id: 'input-16' }),
              _react2['default'].createElement(
                'label',
                { 'class': 'input__label input__label--yoko', 'for': 'input-16' },
                _react2['default'].createElement(
                  'span',
                  { 'class': 'input__label-content input__label-content--yoko' },
                  '會議代碼'
                )
              )
            ),
            _react2['default'].createElement('input', { type: 'submit', 'class': 'myButton', name: 'login', id: 'login', value: 'GO!' })
          )
        )
      );
    }
  }]);

  return Main;
})(_react2['default'].Component);

exports['default'] = Main;
module.exports = exports['default'];

},{"../actions/MainActions":2,"../stores/MainStore":12,"react":"react","react-router":"react-router"}],8:[function(require,module,exports){
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

},{"../actions/UserStateActions":3,"../stores/UserStateStore":13,"react":"react","react-router":"react-router"}],9:[function(require,module,exports){
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

},{"./routes":10,"react":"react","react-router":"react-router"}],10:[function(require,module,exports){
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

exports['default'] = _react2['default'].createElement(_reactRouter.Route, { handler: _componentsApp2['default'] });
module.exports = exports['default'];

},{"./components/App":5,"./components/Header":6,"./components/Main":7,"./components/UserState":8,"react":"react","react-router":"react-router"}],11:[function(require,module,exports){
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
  }

  _createClass(HeaderStore, [{
    key: 'constrcutor',
    value: function constrcutor() {
      this.bingActions(_actionsHeaderActions2['default']);
      this.SystemTime = ''; //系統時間
      this.OrderTime = ''; //預約會議時間
    }
  }, {
    key: 'onGetSystemTimeSuccess',
    value: function onGetSystemTimeSuccess(data) {
      this.SystemTime = this.data; //將時間指派給傳來的值
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

},{"../actions/HeaderActions":1,"../alt":4}],12:[function(require,module,exports){
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
      this.bingActions(_actionsMainActions2['default']);
      //還未完成
    }

    //還未完成

  }]);

  return MainStore;
})();

exports['default'] = _alt2['default'].createStore(MainStore);
module.exports = exports['default'];

},{"../actions/MainActions":2,"../alt":4}],13:[function(require,module,exports){
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

},{"../actions/UserStateActions":3,"../alt":4}]},{},[9]);
