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

    this.generateActions('getUserImgSuccess', 'getUserImgFail', 'getUserNameSuccess', 'getUserNameFail', 'getOnlineSuccess', 'getOnlineFail');
  }

  _createClass(HeaderActions, [{
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

  return HeaderActions;
})();

exports['default'] = _alt2['default'].createActions(HeaderActions);
module.exports = exports['default'];

},{"../alt":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

exports['default'] = new _alt2['default']();
module.exports = exports['default'];

},{"alt":"alt"}],3:[function(require,module,exports){
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

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

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
        _react2['default'].createElement(_Header2['default'], null),
        _react2['default'].createElement(_reactRouter.RouteHandler, null)
      );
    }
  }]);

  return App;
})(_react2['default'].Component);

exports['default'] = App;
module.exports = exports['default'];

},{"./Header":4,"react":"react","react-router":"react-router"}],4:[function(require,module,exports){
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
      _actionsHeaderActions2['default'].getUserImg();
      _actionsHeaderActions2['default'].getUserName();
      _actionsHeaderActions2['default'].getOnline();
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
        { id: 'head' },
        _react2['default'].createElement(
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
        ),
        _react2['default'].createElement(
          'div',
          { id: 'status' },
          _react2['default'].createElement(
            'div',
            { id: 'time' },
            '目前時間：4/6 21:00:31'
          ),
          _react2['default'].createElement(
            'div',
            { id: 'order' },
            '近期預約的會議：2017/4/6 18:00 專題開會'
          ),
          _react2['default'].createElement('div', { id: 'logo' })
        )
      );
    }
  }]);

  return Header;
})(_react2['default'].Component);

exports['default'] = Header;
module.exports = exports['default'];

},{"../actions/HeaderActions":1,"../stores/HeaderStore":7,"react":"react","react-router":"react-router"}],5:[function(require,module,exports){
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

},{"./routes":6,"react":"react","react-router":"react-router"}],6:[function(require,module,exports){
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

var _componentsHeader = require('./components/Header');

var _componentsHeader2 = _interopRequireDefault(_componentsHeader);

exports['default'] = _react2['default'].createElement(_reactRouter.Route, { handler: _componentsApp2['default'] });
module.exports = exports['default'];

},{"./components/App":3,"./components/Header":4,"react":"react","react-router":"react-router"}],7:[function(require,module,exports){
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
    this.userName = '';
    this.userImgURL = '';
    this.Online = '';
  }

  _createClass(HeaderStore, [{
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

  return HeaderStore;
})();

exports['default'] = _alt2['default'].createStore(HeaderStore);
module.exports = exports['default'];

},{"../actions/HeaderActions":1,"../alt":2}]},{},[5]);
