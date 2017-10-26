(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["react-google-login-component"] = factory(require("react"));
	else
		root["react-google-login-component"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GoogleLogin = undefined;

	var _GoogleLogin = __webpack_require__(1);

	var _GoogleLogin2 = _interopRequireDefault(_GoogleLogin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.GoogleLogin = _GoogleLogin2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var GoogleLogin = function (_React$Component) {
	  _inherits(GoogleLogin, _React$Component);

	  function GoogleLogin(props) {
	    _classCallCheck(this, GoogleLogin);

	    var _this = _possibleConstructorReturn(this, (GoogleLogin.__proto__ || Object.getPrototypeOf(GoogleLogin)).call(this, props));

	    _this.state = {
	      disabled: true
	    };
	    return _this;
	  }

	  _createClass(GoogleLogin, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      var _props = this.props,
	          socialId = _props.socialId,
	          scope = _props.scope,
	          fetchBasicProfile = _props.fetchBasicProfile;

	      (function (d, s, id, callback) {
	        var js = void 0,
	            gs = d.getElementsByTagName(s)[0];
	        if (d.getElementById(id)) {
	          _this2.setState({
	            disabled: false
	          });
	        } else {
	          js = d.createElement(s);js.id = id;
	          js.src = 'https://apis.google.com/js/platform.js';
	          gs.parentNode.insertBefore(js, gs);
	          js.onload = callback;
	        }
	      })(document, 'script', 'google-platform', function () {
	        gapi.load('auth2', function () {
	          _this2.setState({
	            disabled: false
	          });
	          if (!gapi.auth2.getAuthInstance()) {
	            gapi.auth2.init({
	              client_id: socialId,
	              fetch_basic_profile: fetchBasicProfile,
	              scope: scope
	            });
	          }
	        });
	      });
	    }
	  }, {
	    key: 'checkLoginState',
	    value: function checkLoginState(response) {
	      if (auth2.isSignedIn.get()) {
	        var profile = auth2.currentUser.get().getBasicProfile();
	      } else {
	        if (this.props.responseHandler) {
	          this.props.responseHandler({ status: response.status });
	        }
	      }
	    }
	  }, {
	    key: 'clickHandler',
	    value: function clickHandler() {
	      var _this3 = this;

	      var auth2 = gapi.auth2.getAuthInstance();
	      auth2.signIn().then(function (googleUser) {
	        return _this3.props.responseHandler(googleUser);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          socialId = _props2.socialId,
	          scope = _props2.scope,
	          fetchBasicProfile = _props2.fetchBasicProfile,
	          responseHandler = _props2.responseHandler,
	          children = _props2.children,
	          buttonText = _props2.buttonText,
	          props = _objectWithoutProperties(_props2, ['socialId', 'scope', 'fetchBasicProfile', 'responseHandler', 'children', 'buttonText']);

	      props.disabled = this.state.disabled || props.disabled;

	      return _react2.default.createElement(
	        'button',
	        _extends({}, props, { onClick: this.clickHandler.bind(this) }),
	        children,
	        buttonText
	      );
	    }
	  }]);

	  return GoogleLogin;
	}(_react2.default.Component);

	exports.default = GoogleLogin;


	GoogleLogin.defaultProps = {
	  fetchBasicProfile: false,
	  scope: 'profile'
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
;