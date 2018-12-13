/******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(3);

	var _reactRouter = __webpack_require__(4);

	var _bodyParser = __webpack_require__(5);

	var _bodyParser2 = _interopRequireDefault(_bodyParser);

	var _dataWrapper = __webpack_require__(6);

	var _dataWrapper2 = _interopRequireDefault(_dataWrapper);

	var _config = __webpack_require__(7);

	var _config2 = _interopRequireDefault(_config);

	var _api = __webpack_require__(9);

	var _api2 = _interopRequireDefault(_api);

	var _routes = __webpack_require__(11);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = (0, _express2.default)(); /* eslint max-len: [2, 500, 4] */

	var apiUrl = _config2.default.get('apiUrl');

	app.set('views', './views');
	app.set('view engine', 'jade');

	app.use(_bodyParser2.default.json());
	app.use(_bodyParser2.default.urlencoded({
	  extended: false
	}));

	app.use(_express2.default.static('static'));

	app.use('/api/', _api2.default);

	app.get('/*', function (req, res) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (error, redirectLocation, renderProps) {
	    if (error) {
	      res.status(500).send(error.message);
	    } else if (redirectLocation) {
	      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
	    } else if (renderProps) {
	      var props = {};
	      var content = (0, _server.renderToString)(_react2.default.createElement(
	        _dataWrapper2.default,
	        { data: props },
	        _react2.default.createElement(_reactRouter.RoutingContext, renderProps)
	      ));
	      res.render('index', { content: content, props: props, apiUrl: apiUrl });
	    } else {
	      res.status(404).send('Not found');
	    }
	  });
	});

	app.set('ipaddress', _config2.default.get('ipaddress'));
	app.set('port', _config2.default.get('port'));

	var server = app.listen(app.get('port'), app.get('ipaddress'), function (err) {
	  if (err) {
	    console.log(err);
	  }

	  var host = server.address().address;
	  var port = server.address().port;
	  console.log('Example app listening at http://%s:%s', host, port);
	});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("react-dom/server");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = require("react-router");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = require("body-parser");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DataWrapper = function (_React$Component) {
	  _inherits(DataWrapper, _React$Component);

	  function DataWrapper() {
	    _classCallCheck(this, DataWrapper);

	    return _possibleConstructorReturn(this, (DataWrapper.__proto__ || Object.getPrototypeOf(DataWrapper)).apply(this, arguments));
	  }

	  _createClass(DataWrapper, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        data: this.props.data
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.props.children;
	    }
	  }]);

	  return DataWrapper;
	}(_react2.default.Component);

	exports.default = DataWrapper;


	DataWrapper.propTypes = {
	  data: _react2.default.PropTypes.object.isRequired,
	  children: _react2.default.PropTypes.any
	};

	DataWrapper.childContextTypes = {
	  data: _react2.default.PropTypes.object.isRequired
	};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var convict = __webpack_require__(8);

	var config = convict({
	  email: {
	    doc: 'default contact email',
	    format: String,
	    default: 'info@mintitmedia.com',
	    env: 'CONTACT_EMAIL',
	  },
	  ipaddress: {
	    doc: 'IP the application runs on',
	    format: 'ipaddress',
	    default: '0.0.0.0',
	  },
	  port: {
	    doc: 'Port the application listens on',
	    format: 'port',
	    default: '3071',
	  },
	  sendgrid: {
	    doc: 'Sendrid API KEY',
	    format: String,
	    default: '',
	    env: 'SENDGRID_API_KEY',
	  },
	  apiUrl: {
	    doc: 'API URL',
	    format: String,
	    default: '',
	    env: 'API_URL',
	  },
	});

	config.validate();

	module.exports = config;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = require("convict");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var express = __webpack_require__(1);
	/*eslint-disable */
	var router = express.Router();
	/*eslint-enable */
	var conf = __webpack_require__(7);
	var sendgrid = __webpack_require__(10)(conf.get('sendgrid'));

	router.post('/send_email', function (req, res) {
	  var fromname = req.body.fromname;
	  var replyto = req.body.replyto;
	  var subject = req.body.subject;
	  var html = req.body.html;

	  var email = new sendgrid.Email({
	    to: conf.get('email'),
	    from: conf.get('email'),
	    fromname: fromname,
	    replyto: replyto,
	    subject: subject,
	    bcc: ['info@mintitmedia.com'],
	    html: html
	  });

	  sendgrid.send(email, function (err) {
	    var response = true;
	    if (err) {
	      console.error(err);
	      response = false;
	    }
	    res.send({
	      status: response
	    });
	  });
	});

	exports.default = router;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = require("sendgrid");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	var _createBrowserHistory = __webpack_require__(13);

	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

	var _sitemap = __webpack_require__(14);

	var _sitemap2 = _interopRequireDefault(_sitemap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var items = _sitemap2.default.items;

	var routes = items.children.map(function (item, index) {
	  return _react2.default.createElement(_reactRouter.Route, { path: item.url, component: item.component, key: index });
	});
	var history = process.env.TIER === 'FE' ? (0, _createBrowserHistory2.default)() : null;

	exports.default = _react2.default.createElement(
	  _reactRouter.Router,
	  { history: history },
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/', component: items.component },
	    _react2.default.createElement(_reactRouter.IndexRoute, { component: items.default }),
	    routes
	  )
	);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = require("history/lib/createBrowserHistory");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _AppHandler = __webpack_require__(15);

	var _AppHandler2 = _interopRequireDefault(_AppHandler);

	var _home = __webpack_require__(24);

	var _home2 = _interopRequireDefault(_home);

	var _about = __webpack_require__(38);

	var _about2 = _interopRequireDefault(_about);

	var _products = __webpack_require__(47);

	var _products2 = _interopRequireDefault(_products);

	var _services = __webpack_require__(56);

	var _services2 = _interopRequireDefault(_services);

	var _contact = __webpack_require__(63);

	var _contact2 = _interopRequireDefault(_contact);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  items: {
	    component: _AppHandler2.default,
	    default: _home2.default,
	    children: [{
	      id: 1,
	      title: 'Inicio',
	      url: '/inicio',
	      component: _home2.default
	    }, {
	      id: 2,
	      title: 'Nosotros',
	      url: '/nosotros',
	      component: _about2.default
	    }, {
	      id: 3,
	      title: 'Productos',
	      url: '/productos',
	      component: _products2.default
	    }, {
	      id: 4,
	      title: 'Servicios',
	      url: '/servicios',
	      component: _services2.default
	    }, {
	      id: 5,
	      title: 'Contacto',
	      url: '/contacto',
	      component: _contact2.default
	    }]
	  },
	  icons: [{
	    title: 'facebook',
	    url: 'https://www.facebook.com/notablemobiliario/'
	  }],
	  addresses: [{
	    title: 'Tijuana',
	    tel: '(664) 634-1615 / 684-7425'
	  }, {
	    title: 'Mexicali',
	    tel: '(686) 552-3672'
	  }, {
	    title: 'Ensenada',
	    tel: '(686) 552-3672'
	  }, {
	    title: 'Farmacia de la Piel',
	    tel: '(664) 684-8288'
	  }]
	};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _sitemap = __webpack_require__(14);

	var _sitemap2 = _interopRequireDefault(_sitemap);

	var _menu = __webpack_require__(16);

	var _menu2 = _interopRequireDefault(_menu);

	var _footer = __webpack_require__(19);

	var _footer2 = _interopRequireDefault(_footer);

	var _scroll = __webpack_require__(22);

	var _scroll2 = _interopRequireDefault(_scroll);

	var _menu3 = __webpack_require__(23);

	var _menu4 = _interopRequireDefault(_menu3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */


	var doMenuAnimation = true;

	var AppHandler = function (_React$Component) {
	  _inherits(AppHandler, _React$Component);

	  function AppHandler() {
	    _classCallCheck(this, AppHandler);

	    return _possibleConstructorReturn(this, (AppHandler.__proto__ || Object.getPrototypeOf(AppHandler)).apply(this, arguments));
	  }

	  _createClass(AppHandler, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.scrollHandler(true);
	      window.addEventListener('scroll', this.onScroll, false);

	      var width = window.innerWidth;
	      if (width < 768) {
	        $('#menu_wrapper').addClass('navbar-fixed-top');
	        $('.navbar-brand').css('display', 'block');
	        $('.navbar-icons').css('display', 'block');
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.scrollHandler();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('scroll', this.onScroll, false);
	    }
	  }, {
	    key: 'onScroll',
	    value: function onScroll() {
	      var offset = window.pageYOffset;
	      var width = window.innerWidth;
	      if (width < 768) {
	        $('#menu_wrapper').addClass('navbar-fixed-top');
	        $('.navbar-brand').css('display', 'block');
	        $('.navbar-icons').css('display', 'block');
	      } else {
	        if (offset > 386) {
	          if (doMenuAnimation) {
	            $('#menu_wrapper').css('display', 'none');
	            $('.navbar-brand').css('display', 'block');
	            $('.navbar-icons').css('display', 'block');
	            $('#menu_wrapper').addClass('navbar-fixed-top').fadeIn('slow');
	            doMenuAnimation = false;
	          }
	        } else {
	          $('#menu_wrapper').removeClass('navbar-fixed-top');
	          $('.navbar-brand').css('display', 'none');
	          $('.navbar-icons').css('display', 'none');
	          doMenuAnimation = true;
	        }
	      }
	    }
	  }, {
	    key: 'scrollHandler',
	    value: function scrollHandler(isFirstTime) {
	      var location = this.props.location;

	      (0, _scroll2.default)(location);
	      if (!isFirstTime) {
	        var bits = location.pathname.split('/');
	        (0, _menu4.default)(bits[1] || 'inicio');
	      }
	    }
	  }, {
	    key: 'clickHandler',
	    value: function clickHandler() {
	      if ($('.navbar-header button').is(':visible')) {
	        $('.navbar-header button').click();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var children = _react2.default.Children.map(this.props.children, function (child) {
	        return _react2.default.cloneElement(child);
	      });
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_menu2.default, { items: _sitemap2.default.items.children, icons: _sitemap2.default.icons, onClick: this.clickHandler }),
	        children,
	        _react2.default.createElement(_footer2.default, { items: _sitemap2.default.items.children, addresses: _sitemap2.default.addresses, icons: _sitemap2.default.icons })
	      );
	    }
	  }]);

	  return AppHandler;
	}(_react2.default.Component);

	exports.default = AppHandler;


	AppHandler.propTypes = {
	  children: _react2.default.PropTypes.object.isRequired,
	  location: _react2.default.PropTypes.any,
	  context: _react2.default.PropTypes.any
	};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	var _svg = __webpack_require__(17);

	var _svg2 = _interopRequireDefault(_svg);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = __webpack_require__(18);

	var Menu2 = function (_React$Component) {
	  _inherits(Menu2, _React$Component);

	  function Menu2() {
	    _classCallCheck(this, Menu2);

	    return _possibleConstructorReturn(this, (Menu2.__proto__ || Object.getPrototypeOf(Menu2)).apply(this, arguments));
	  }

	  _createClass(Menu2, [{
	    key: 'getItems',
	    value: function getItems(data) {
	      var _this2 = this;

	      return data.map(function (item, index) {
	        var title = item.title,
	            url = item.url;

	        var elementID = url.replace('/', '');
	        var className = style.navbarNavAnchor;
	        var onClick = _this2.props.onClick;

	        return _react2.default.createElement(
	          'li',
	          { key: index },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: url, className: className, id: elementID, onClick: onClick },
	            title
	          )
	        );
	      });
	    }
	  }, {
	    key: 'getIcons',
	    value: function getIcons(data) {
	      return data.map(function (item, index) {
	        return _react2.default.createElement(
	          'li',
	          { key: index },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: item.url, className: style.sm_icon, id: item.url, target: '_blank' },
	            _react2.default.createElement(_svg2.default, { network: item.title, className: style[item.title] })
	          )
	        );
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      /*eslint-disable */
	      return _react2.default.createElement(
	        'div',
	        { className: style.navbarWrapper },
	        _react2.default.createElement(
	          'div',
	          { className: style.bigBrandContainer },
	          _react2.default.createElement('div', { className: style.bigBrand })
	        ),
	        _react2.default.createElement(
	          'nav',
	          { className: style.navbarDefault + ' navbar ', id: 'menu_wrapper' },
	          _react2.default.createElement(
	            'div',
	            { className: 'container-fluid' },
	            _react2.default.createElement(
	              'div',
	              { className: 'row' },
	              _react2.default.createElement(
	                'div',
	                { className: style.navbarHeader + ' navbar-header' },
	                _react2.default.createElement(
	                  'button',
	                  { type: 'button', className: 'navbar-toggle collapsed menu_trigger ' + style.toggleButton, 'data-toggle': 'collapse', 'data-target': '#mainmenu', 'aria-expanded': 'false' },
	                  _react2.default.createElement(
	                    'span',
	                    { className: 'sr-only' },
	                    'Toggle navigation'
	                  ),
	                  _react2.default.createElement('span', { className: 'icon-bar ' + style.iconBar }),
	                  _react2.default.createElement('span', { className: 'icon-bar ' + style.iconBar }),
	                  _react2.default.createElement('span', { className: 'icon-bar ' + style.iconBar })
	                ),
	                _react2.default.createElement(
	                  _reactRouter.Link,
	                  { className: style.navbarBrand + ' navbar-brand', to: '/inicio' },
	                  _react2.default.createElement(_svg2.default, { network: 'brand', className: style.brand })
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: style.navbarCollapse + ' collapse navbar-collapse', id: 'mainmenu' },
	                _react2.default.createElement(
	                  'ul',
	                  { className: style.navbarIcons + ' navbar-icons' },
	                  this.getIcons(this.props.icons)
	                ),
	                _react2.default.createElement(
	                  'ul',
	                  { className: style.navbarNav + ' nav navbar-nav' },
	                  this.getItems(this.props.items)
	                )
	              )
	            )
	          )
	        )
	      );
	      /*eslint-enable */
	    }
	  }]);

	  return Menu2;
	}(_react2.default.Component);

	exports.default = Menu2;


	Menu2.propTypes = {
	  items: _react2.default.PropTypes.array.isRequired,
	  icons: _react2.default.PropTypes.array,
	  location: _react2.default.PropTypes.any,
	  onClick: _react2.default.PropTypes.func.isRequired
	};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */


	var SVG = function (_React$Component) {
	  _inherits(SVG, _React$Component);

	  function SVG() {
	    _classCallCheck(this, SVG);

	    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
	  }

	  _createClass(SVG, [{
	    key: 'renderItems',
	    value: function renderItems(network, className) {
	      switch (network) {
	        case 'facebook':
	          /*eslint-disable */
	          return _react2.default.createElement(
	            'svg',
	            { xmlns: 'http://www.w3.org/2000/svg', width: '30', height: '30', viewBox: '0 0 30 30', className: className },
	            _react2.default.createElement('circle', { cx: '15', cy: '15', r: '15' }),
	            _react2.default.createElement('path', { transform: 'scale(.8) translate(4, 4)', d: 'M16.6 25.1v-9.2h3.2l0.5-3.6h-3.7v-2.3c0-1 0.3-1.7 1.9-1.7l2 0V5.1c-0.3 0-1.5-0.1-2.9-0.1 -2.9 0-4.8 1.7-4.8 4.7v2.6H9.5v3.6h3.2v9.2H16.6z' })
	          );
	          break;
	        case 'twitter':
	          return _react2.default.createElement(
	            'svg',
	            { xmlns: 'http://www.w3.org/2000/svg', width: '30', height: '30', viewBox: '0 0 30 30', className: className },
	            _react2.default.createElement('circle', { cx: '15', cy: '15', r: '15' }),
	            _react2.default.createElement('path', { d: 'M23.5 9.7c-0.6 0.3-1.3 0.5-2 0.5 0.7-0.4 1.3-1.1 1.5-1.9 -0.7 0.4-1.4 0.7-2.2 0.8 -0.6-0.7-1.5-1.1-2.5-1.1 -1.9 0-3.5 1.6-3.5 3.5 0 0.3 0 0.5 0.1 0.8 -2.9-0.1-5.5-1.5-7.2-3.6 -0.3 0.5-0.5 1.1-0.5 1.8 0 1.2 0.6 2.3 1.6 2.9 -0.6 0-1.1-0.2-1.6-0.4 0 0 0 0 0 0 0 1.7 1.2 3.1 2.8 3.4 -0.3 0.1-0.6 0.1-0.9 0.1 -0.2 0-0.4 0-0.7-0.1 0.4 1.4 1.7 2.4 3.3 2.4 -1.2 0.9-2.7 1.5-4.3 1.5 -0.3 0-0.6 0-0.8 0 1.5 1 3.4 1.6 5.3 1.6 6.4 0 9.9-5.3 9.9-9.9 0-0.1 0-0.3 0-0.4C22.4 11 23 10.4 23.5 9.7z' })
	          );
	          break;
	        case 'pinterest':
	          return _react2.default.createElement(
	            'svg',
	            { xmlns: 'http://www.w3.org/2000/svg', width: '30', height: '30', viewBox: '0 0 30 30', className: className },
	            _react2.default.createElement('circle', { className: this.props.background, cx: '15', cy: '15', r: '15' }),
	            _react2.default.createElement('path', { d: 'M14.4 18.1c-0.5 2.6-1.1 5.1-2.9 6.4 -0.6-4 0.8-6.9 1.5-10.1 -1.1-1.8 0.1-5.5 2.4-4.6 2.8 1.1-2.4 6.8 1.1 7.5 3.7 0.8 5.2-6.4 2.9-8.8 -3.3-3.4-9.7-0.1-8.9 4.8 0.2 1.2 1.4 1.5 0.5 3.2 -2.1-0.5-2.8-2.1-2.7-4.4 0.1-3.7 3.3-6.2 6.5-6.6 4-0.4 7.8 1.5 8.3 5.2 0.6 4.2-1.8 8.8-6.1 8.5C15.8 19.2 15.4 18.6 14.4 18.1' })
	          );
	          break;
	        case 'instagram':
	          return _react2.default.createElement(
	            'svg',
	            { xmlns: 'http://www.w3.org/2000/svg', width: '30', height: '30', viewBox: '0 0 30 30', className: className },
	            _react2.default.createElement('circle', { cx: '15', cy: '15', r: '15' }),
	            _react2.default.createElement('path', { d: 'M20.6 7H9.4c-1.3 0-2.4 0.9-2.4 2.1v11.8c0 1.2 1.1 2.1 2.4 2.1h11.3c1.3 0 2.4-0.9 2.4-2.1V9.1C23 7.9 22 7 20.6 7zM18.6 9.2c0-0.3 0.2-0.5 0.5-0.5h1.7c0.3 0 0.5 0.2 0.5 0.5v1.7c0 0.3-0.2 0.5-0.5 0.5h-1.7c-0.3 0-0.5-0.2-0.5-0.5V9.2zM17.7 11.7v0c0 0 0 0 0 0H17.7zM14.9 12c2 0 3.5 1.6 3.5 3.5 0 2-1.6 3.5-3.5 3.5 -2 0-3.5-1.6-3.5-3.5C11.4 13.6 13 12 14.9 12zM22 20.7c0 0.8-0.6 1.4-1.4 1.4H9.3c-0.8 0-1.4-0.6-1.4-1.4V13.3h2.9c-0.3 0.7-0.5 1.4-0.5 2.2 0 2.6 2.1 4.7 4.7 4.7 2.6 0 4.7-2.1 4.7-4.7 0-0.7-0.2-1.4-0.5-2h2.8V20.7z' })
	          );
	          break;
	        case 'brand':
	          return _react2.default.createElement(
	            'svg',
	            { xmlns: 'http://www.w3.org/2000/svg', width: '27', height: '29', viewBox: '0 0 26.8 29.1', className: className },
	            _react2.default.createElement('path', { d: 'M10.7 0v12L0 5.3v13.7l1.4 0.9v-2.3l0 0V7.8l9.3 5.9v0l3.9 2.5v10.4 0l0 1.7 1.4 0.9v-12.1l10.7 6.8v-13.8L10.7 0zM25.4 21.3l-9.3-5.9 -3.9-2.5V2.5l13.2 8.3V21.3z', fill: '#c59f67' })
	          );
	          break;
	        case 'arrow_down':
	          return _react2.default.createElement(
	            'svg',
	            { xmlns: 'http://www.w3.org/2000/svg', width: '14', height: '8', viewBox: '0 0 14 7.7', className: className },
	            _react2.default.createElement('polyline', { points: '0.4 0.5 7 7.1 13.6 0.4 ', fill: 'none', stroke: '#FFF' })
	          );
	          break;
	        case 'circled_brand':
	          return _react2.default.createElement(
	            'svg',
	            { xmlns: 'http://www.w3.org/2000/svg', width: '94', height: '94', viewBox: '0 0 94.5 94.5', className: className },
	            _react2.default.createElement('circle', { cx: '47.2', cy: '47.2', r: '47.2', fill: '#CBA764' }),
	            _react2.default.createElement('path', { d: 'M44 27.7v15.7l-14-8.8v17.9l1.8 1.1v-2.9l0 0V37.9l12.1 7.6v0l5.1 3.2V62.3v-0.1l0 2.2 1.8 1.1V49.9l14 8.8V40.8L44 27.7zM63 55.4l-12.1-7.7L45.8 44.5V31l17.2 10.8V55.4z', fill: '#FFF' })
	          );
	          break;
	        case 'double_arrow_down':
	          return _react2.default.createElement(
	            'svg',
	            { xmlns: 'http://www.w3.org/2000/svg', width: '15', height: '20', viewBox: '0 0 14.6 19.9', className: className },
	            _react2.default.createElement('polygon', { points: '7.3 8.7 0 1.4 1.4 0 7.3 5.9 13.2 0 14.6 1.4 ', fill: '#FFF' }),
	            _react2.default.createElement('polygon', { points: '7.3 19.9 0 12.6 1.4 11.2 7.3 17.1 13.2 11.2 14.6 12.6 ', fill: '#FFF' })
	          );
	          break;
	        case 'circled_brand':
	          return _react2.default.createElement(
	            'svg',
	            { xmlns: 'http://www.w3.org/2000/svg', width: '94', height: '94', viewBox: '0 0 94.5 94.5', className: className },
	            _react2.default.createElement('circle', { cx: '47.2', cy: '47.2', r: '47.2', fill: '#CBA764' }),
	            _react2.default.createElement('path', { d: 'M44 27.7v15.7l-14-8.8v17.9l1.8 1.1v-2.9l0 0V37.9l12.1 7.6v0l5.1 3.2V62.3v-0.1l0 2.2 1.8 1.1V49.9l14 8.8V40.8L44 27.7zM63 55.4l-12.1-7.7L45.8 44.5V31l17.2 10.8V55.4z', fill: '#FFF' })
	          );
	          break;
	        case 'circled_diseno':
	          return _react2.default.createElement(
	            'svg',
	            { xmlns: 'http://www.w3.org/2000/svg', width: '125', height: '122', viewBox: '0 0 125 121.8', className: className },
	            _react2.default.createElement('circle', { cx: '63', cy: '59.7', r: '59.3', fill: '#CBA764' }),
	            _react2.default.createElement('path', { d: 'M50 69.9c-2.3-2.9-3.5-6.4-3.5-10.2 0-9.1 7.4-16.5 16.5-16.5 9.1 0 16.5 7.4 16.5 16.5 0 3.6-1.2 7.1-3.3 10l-2-1.5c1.9-2.4 2.8-5.4 2.8-8.4 0-7.7-6.3-14-14-14 -7.7 0-14 6.3-14 14 0 3.2 1 6.1 3 8.6L50 69.9z', fill: '#fff' }),
	            _react2.default.createElement('path', { d: 'M50.6 82c-8.1-4.5-13.1-13.1-13.1-22.3 0-10.3 6.1-19.5 15.6-23.5l1 2.3c-8.5 3.6-14.1 11.9-14.1 21.2 0 8.3 4.5 16.1 11.8 20.1L50.6 82z', fill: '#fff' }),
	            _react2.default.createElement('path', { d: 'M63 85.2v-2.5c12.7 0 23-10.3 23-23s-10.3-23-23-23v-2.5c14.1 0 25.5 11.5 25.5 25.5C88.5 73.8 77.1 85.2 63 85.2z', fill: '#fff' }),
	            _react2.default.createElement('path', { d: 'M63 94.6c-8.9 0-17.3-3.3-23.8-9.4 -6.8-6.4-10.7-15-11-24.3 -0.6-19.2 14.5-35.4 33.8-36l0.1 2.5c-17.9 0.6-31.9 15.6-31.3 33.4 0.3 8.6 3.9 16.7 10.2 22.6 6.3 5.9 14.5 9 23.2 8.7 17.9-0.6 31.9-15.6 31.3-33.4l2.5-0.1c0.6 19.2-14.5 35.4-33.8 36C63.7 94.6 63.3 94.6 63 94.6z', fill: '#fff' }),
	            _react2.default.createElement('path', { d: 'M94.3 51.3C91.1 39.5 81.3 30.3 69.3 27.9l0.5-2.5c12.9 2.6 23.5 12.5 26.9 25.2L94.3 51.3z', fill: '#fff' }),
	            _react2.default.createElement('path', { d: 'M63 67.5c-4.3 0-7.8-3.5-7.8-7.8 0-4.3 3.5-7.8 7.8-7.8 4.3 0 7.8 3.5 7.8 7.8C70.8 64 67.3 67.5 63 67.5zM63 54.4c-2.9 0-5.3 2.4-5.3 5.3 0 2.9 2.4 5.3 5.3 5.3 2.9 0 5.3-2.4 5.3-5.3C68.3 56.8 65.9 54.4 63 54.4z', fill: '#fff' }),
	            _react2.default.createElement('path', { d: 'M63 76.2c-3.6 0-6.9-1.1-9.8-3.2l1.5-2c2.6 1.9 5.6 2.8 8.8 2.7 2.8-0.1 5.5-1 7.7-2.6l1.5 2c-2.7 1.9-5.8 3-9.1 3.1C63.3 76.2 63.2 76.2 63 76.2z', fill: '#fff' })
	          );
	          break;
	        case 'circled_coordinacion':
	          return _react2.default.createElement(
	            'svg',
	            { xmlns: 'http://www.w3.org/2000/svg', width: '125', height: '122', viewBox: '0 0 125 121.8', className: className },
	            _react2.default.createElement('circle', { cx: '62.5', cy: '60.9', r: '59.3', fill: '#CBA764' }),
	            _react2.default.createElement('path', { d: 'M62.5 68.2c-1.9 0-3.8-0.8-5.2-2.1 -2.8-2.8-2.8-7.5 0-10.3 1.4-1.4 3.2-2.1 5.2-2.1 1.9 0 3.8 0.8 5.2 2.1 2.8 2.8 2.8 7.5 0 10.3C66.3 67.5 64.4 68.2 62.5 68.2zM62.5 56.1c-1.3 0-2.5 0.5-3.4 1.4 -1.9 1.9-1.9 4.9 0 6.8 0.9 0.9 2.1 1.4 3.4 1.4 1.3 0 2.5-0.5 3.4-1.4 1.9-1.9 1.9-4.9 0-6.8C65 56.6 63.8 56.1 62.5 56.1z', fill: '#FFF' }),
	            _react2.default.createElement('polygon', { points: '83.9 48.5 82.1 50.3 91.6 59.7 76 59.7 76 62.2 91.5 62.2 82.1 71.7 83.9 73.4 96.3 61 ', fill: '#FFF' }),
	            _react2.default.createElement('polygon', { points: '74.9 39.6 62.5 27.1 50 39.6 51.8 41.3 61.2 31.9 61.2 47.4 63.7 47.4 63.7 31.9 73.2 41.3 ', fill: '#FFF' }),
	            _react2.default.createElement('polygon', { points: '49 59.6 33.5 59.6 42.9 50.2 41.1 48.4 28.7 60.9 41.1 73.3 42.9 71.6 33.4 62.1 49 62.1 ', fill: '#FFF' }),
	            _react2.default.createElement('polygon', { points: '73.3 80.5 63.8 90 63.8 74.4 61.3 74.4 61.3 90 51.8 80.5 50.1 82.3 62.5 94.8 75 82.3 ', fill: '#FFF' })
	          );
	          break;
	        case 'circled_calidad':
	          return _react2.default.createElement(
	            'svg',
	            { xmlns: 'http://www.w3.org/2000/svg', width: '125', height: '122', viewBox: '0 0 125 121.8', className: className },
	            _react2.default.createElement('circle', { cx: '62.5', cy: '61.1', r: '59.3', fill: '#CBA764' }),
	            _react2.default.createElement('polygon', { points: '80.5 88.5 62.5 75.4 44.5 88.5 51.4 67.3 33.3 54.2 55.6 54.2 62.5 33 68.3 50.9 65.9 51.7 62.5 41.1 57.4 56.7 41 56.7 54.3 66.3 49.2 81.9 62.5 72.3 75.8 81.9 70.7 66.3 84 56.7 75.1 56.7 75.1 54.2 91.7 54.2 73.6 67.3 ', fill: '#FFF' }),
	            _react2.default.createElement('polygon', { points: '61.8 68 55.9 60.9 57.8 59.3 61.8 64 83.3 37.3 85.2 38.9 ', fill: '#FFF' })
	          );
	          break;
	        case 'carousel_left':
	          return _react2.default.createElement(
	            'svg',
	            { xmlns: 'http://www.w3.org/2000/svg', width: '10', height: '14', viewBox: '0 0 7.9 14.1', className: className },
	            _react2.default.createElement('polyline', { points: '7.4 0.5 0.8 7.1 7.5 13.7 ', fill: 'none', stroke: '#CBA764', strokeWidth: '2' })
	          );
	          break;
	        case 'carousel_right':
	          return _react2.default.createElement(
	            'svg',
	            { xmlns: 'http://www.w3.org/2000/svg', width: '10', height: '14', viewBox: '0 0 7.9 14.1', className: className },
	            _react2.default.createElement('polyline', { points: '0.9 13.7 7.5 7.1 0.8 0.5 ', fill: 'none', stroke: '#CBA764', strokeWidth: '2' })
	          );
	          break;
	        case 'servicios_entrevista':
	          return _react2.default.createElement(
	            'svg',
	            { xmlns: 'http://www.w3.org/2000/svg', width: '119', height: '119', viewBox: '0 0 118.6 118.6', className: className },
	            _react2.default.createElement('circle', { cx: '59.3', cy: '59.3', r: '59.3', fill: '#FFB69F' }),
	            _react2.default.createElement('rect', { x: '27', y: '28.5', width: '64.6', height: '61.6', fill: 'none', strokeWidth: '3', stroke: '#fff' }),
	            _react2.default.createElement('circle', { cx: '38.4', cy: '59.3', r: '11.4', fill: 'none', strokeWidth: '3', stroke: '#fff' }),
	            _react2.default.createElement('circle', { cx: '80.2', cy: '59.3', r: '11.4', fill: 'none', strokeWidth: '3', stroke: '#fff' }),
	            _react2.default.createElement('circle', { cx: '59.3', cy: '78.7', r: '11.4', fill: 'none', strokeWidth: '3', stroke: '#fff' }),
	            _react2.default.createElement('circle', { cx: '59.3', cy: '39.9', r: '11.4', fill: 'none', strokeWidth: '3', stroke: '#fff' })
	          );
	          break;
	        case 'servicios_conceptualizacion':
	          return _react2.default.createElement(
	            'svg',
	            { xmlns: 'http://www.w3.org/2000/svg', width: '119', height: '119', viewBox: '0 0 118.6 118.6', className: className },
	            _react2.default.createElement('circle', { cx: '59.3', cy: '59.3', r: '59.3', fill: '#FFB69F' }),
	            _react2.default.createElement('rect', { x: '28.5', y: '28.1', width: '61.6', height: '62', fill: 'none', strokeWidth: '3', stroke: '#fff' }),
	            _react2.default.createElement('rect', { x: '56.3', y: '70.1', width: '25.8', height: '10.9', fill: 'none', strokeWidth: '3', stroke: '#fff' }),
	            _react2.default.createElement('rect', { x: '35.8', y: '36.1', width: '11.4', height: '26.7', fill: 'none', strokeWidth: '3', stroke: '#fff' }),
	            _react2.default.createElement('rect', { x: '35.8', y: '70.1', width: '11.4', height: '10.9', fill: 'none', strokeWidth: '3', stroke: '#fff' }),
	            _react2.default.createElement('rect', { x: '56.3', y: '36.1', width: '25.8', height: '26.7', fill: 'none', strokeWidth: '3', stroke: '#fff' }),
	            _react2.default.createElement('line', { x1: '82.1', y1: '62.7', x2: '56.3', y2: '36.1', fill: 'none', strokeWidth: '3', stroke: '#fff' }),
	            _react2.default.createElement('line', { x1: '82.1', y1: '51.2', x2: '67.5', y2: '36.1', fill: 'none', strokeWidth: '3', stroke: '#fff' }),
	            _react2.default.createElement('line', { x1: '71', y1: '62.7', x2: '56.3', y2: '47.6', fill: 'none', strokeWidth: '3', stroke: '#fff' })
	          );
	          break;
	        case 'servicios_proyecto':
	          return _react2.default.createElement(
	            'svg',
	            { xmlns: 'http://www.w3.org/2000/svg', width: '119', height: '119', viewBox: '0 0 118.6 118.6', className: className },
	            _react2.default.createElement('circle', { cx: '59.2', cy: '59.3', r: '59.3', fill: '#FFB69F' }),
	            _react2.default.createElement('polyline', { points: '90.7 45.8 90.7 90.8 27.6 90.8 27.6 29.2 90.7 29.2 90.7 34.1 ', fill: 'none', strokeWidth: '3', stroke: '#fff' }),
	            _react2.default.createElement('polyline', { points: '73.8 68.2 90.7 68.2 90.7 90.8 57.2 90.8 57.2 68.2 61 68.2 ', fill: 'none', strokeWidth: '3', stroke: '#fff' }),
	            _react2.default.createElement('polyline', { points: '27.6 68.2 46.4 68.2 46.4 81.4 ', fill: 'none', strokeWidth: '3', stroke: '#fff' }),
	            _react2.default.createElement('line', { x1: '90.7', y1: '59.5', x2: '56.1', y2: '59.5', fill: 'none', strokeWidth: '3', stroke: '#fff' }),
	            _react2.default.createElement('line', { x1: '46.9', y1: '28.8', x2: '46.9', y2: '59.1', fill: 'none', strokeWidth: '3', stroke: '#fff' }),
	            _react2.default.createElement('rect', { x: '54.8', y: '37.5', width: '27.8', height: '11.4', fill: 'none', strokeWidth: '3', stroke: '#fff' }),
	            _react2.default.createElement('rect', { x: '64.8', y: '73.8', width: '17.8', height: '11.4', fill: 'none', strokeWidth: '3', stroke: '#fff' }),
	            _react2.default.createElement('rect', { x: '33.3', y: '73.8', width: '7.9', height: '11.4', fill: 'none', strokeWidth: '3', stroke: '#fff' }),
	            _react2.default.createElement('rect', { x: '33.3', y: '37.5', width: '7.9', height: '11.4', fill: 'none', strokeWidth: '3', stroke: '#fff' })
	          );
	          break;
	        case 'servicios_ejecucion':
	          return _react2.default.createElement(
	            'svg',
	            { xmlns: 'http://www.w3.org/2000/svg', width: '119', height: '119', viewBox: '0 0 118.6 118.6', className: className },
	            _react2.default.createElement('circle', { cx: '59.3', cy: '59.3', r: '59.3', fill: '#FFB69F' }),
	            _react2.default.createElement('rect', { x: '28.5', y: '28.3', width: '61.6', height: '62', fill: 'none', strokeWidth: '3', stroke: '#fff' }),
	            _react2.default.createElement('rect', { x: '55.9', y: '66.7', width: '6.9', height: '12.2', fill: 'none', strokeWidth: '3', stroke: '#fff' }),
	            _react2.default.createElement('line', { x1: '56.1', y1: '78.9', x2: '56.1', y2: '83', fill: 'none', strokeWidth: '3', stroke: '#fff' }),
	            _react2.default.createElement('line', { x1: '76.8', y1: '78.9', x2: '76.8', y2: '83', fill: 'none', strokeWidth: '3', stroke: '#fff' }),
	            _react2.default.createElement('rect', { x: '66.3', y: '38.2', width: '16', height: '20.1', fill: 'none', strokeWidth: '3', stroke: '#fff' }),
	            _react2.default.createElement('rect', { x: '71.2', y: '68.5', width: '18.9', height: '10.4', fill: 'none', strokeWidth: '3', stroke: '#fff' }),
	            _react2.default.createElement('path', { d: 'M77.8 72.8c0.5 0 0.9 0.4 0.9 0.9s-0.4 0.9-0.9 0.9 -0.9-0.4-0.9-0.9S77.3 72.8 77.8 72.8M77.8 71.5c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2 2.2-1 2.2-2.2S79 71.5 77.8 71.5L77.8 71.5z', fill: '#FFF' }),
	            _react2.default.createElement('polyline', { points: '56.1 78.9 28.5 78.9 28.5 70.9 55.7 70.9', fill: 'none', strokeWidth: '3', stroke: '#fff' }),
	            _react2.default.createElement('polyline', { points: '56.1 70.9 28.5 70.9 28.5 58.3 59.3 58.3 59.3 66.7', fill: 'none', strokeWidth: '3', stroke: '#fff' })
	          );
	          break;
	        case 'location':
	          return _react2.default.createElement(
	            'svg',
	            { xmlns: 'http://www.w3.org/2000/svg', width: '18', height: '30', viewBox: '0 0 17.5 30', className: className },
	            _react2.default.createElement('path', { d: 'M8.8 5.4c-1.8 0-3.3 1.5-3.3 3.3 0 1.8 1.5 3.3 3.3 3.3 1.8 0 3.3-1.5 3.3-3.3C12.1 6.9 10.6 5.4 8.8 5.4zM8.8 10.1c-0.8 0-1.4-0.6-1.4-1.4 0-0.8 0.6-1.4 1.4-1.4 0.8 0 1.4 0.6 1.4 1.4C10.1 9.5 9.5 10.1 8.8 10.1z', fill: '#CBA764' }),
	            _react2.default.createElement('path', { d: 'M8.8 0C3.9 0 0 3.9 0 8.8c0 1.1 0.2 2.1 0.6 3.2L7.9 29.4C8 29.8 8.4 30 8.8 30c0 0 0 0 0 0 0.4 0 0.8-0.2 0.9-0.6l7.3-17.5c0.4-1 0.6-2.1 0.6-3.1C17.5 3.9 13.6 0 8.8 0zM15.1 11.3L8.8 26.5 2.5 11.5l-0.1-0.3C2.1 10.4 2 9.6 2 8.8c0-3.8 3.1-6.8 6.8-6.8 3.8 0 6.8 3.1 6.8 6.8C15.6 9.6 15.4 10.4 15.1 11.3z', fill: '#CBA764' })
	          );
	          break;
	        default:
	          return _react2.default.createElement(
	            'svg',
	            { xmlns: 'http://www.w3.org/2000/svg', width: '30', height: '30', viewBox: '0 0 30 30', className: className },
	            _react2.default.createElement('circle', { cx: '15', cy: '15', r: '15' }),
	            _react2.default.createElement('path', { d: 'M16.6 25.1v-9.2h3.2l0.5-3.6h-3.7v-2.3c0-1 0.3-1.7 1.9-1.7l2 0V5.1c-0.3 0-1.5-0.1-2.9-0.1 -2.9 0-4.8 1.7-4.8 4.7v2.6H9.5v3.6h3.2v9.2H16.6z' })
	          );
	        /*eslint-enable */
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.renderItems(this.props.network, this.props.className);
	    }
	  }]);

	  return SVG;
	}(_react2.default.Component);

	exports.default = SVG;

	SVG.propTypes = {
	  background: _react2.default.PropTypes.string,
	  color: _react2.default.PropTypes.string,
	  network: _react2.default.PropTypes.string,
	  className: _react2.default.PropTypes.string
	};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___s1Kc_","vCenter":"style__vCenter___NLv4F","navbarBrand":"style__navbarBrand___3C-2k","toggleButton":"style__toggleButton___1HDH1","navbarNavAnchor":"style__navbarNavAnchor___YxE1v","vCenterRel":"style__vCenterRel___2BQ_N","navbarIcons":"style__navbarIcons___dr1qz","sm_icon":"style__sm_icon___37x48","hCenter":"style__hCenter___6iKW4","inheritHeight":"style__inheritHeight___1_s2X","hideOverflow":"style__hideOverflow___3HuD4","icon-sprites":"style__icon-sprites___22kKN","bigBrand":"style__bigBrand___267I6","navbarWrapper":"style__navbarWrapper___1G7jv","navbarDefault":"style__navbarDefault___7oD7-","navbarHeader":"style__navbarHeader___R2f3i","bigBrandContainer":"style__bigBrandContainer___3YNSF","hidden":"style__hidden___AEeZP","iconBar":"style__iconBar___rWyNh","navbarCollapse":"style__navbarCollapse___2MKlE","navbarNav":"style__navbarNav___hhE6c","facebook":"style__facebook___1y0L5","twitter":"style__twitter___2iWZj","pinterest":"style__pinterest___V-LDI","instagram":"style__instagram___1Nnhj"};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	var _powered = __webpack_require__(20);

	var _powered2 = _interopRequireDefault(_powered);

	var _svg = __webpack_require__(17);

	var _svg2 = _interopRequireDefault(_svg);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = __webpack_require__(21);

	var FooterAAA = function (_React$Component) {
	  _inherits(FooterAAA, _React$Component);

	  function FooterAAA() {
	    _classCallCheck(this, FooterAAA);

	    return _possibleConstructorReturn(this, (FooterAAA.__proto__ || Object.getPrototypeOf(FooterAAA)).apply(this, arguments));
	  }

	  _createClass(FooterAAA, [{
	    key: 'getIcons',
	    value: function getIcons(data) {
	      return data.map(function (item, index) {
	        return _react2.default.createElement(
	          'div',
	          { key: index, className: 'col-xs-12' },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: item.url, className: style.sm_icon, id: item.url, target: '_blank' },
	            _react2.default.createElement(_svg2.default, { network: item.title, className: style[item.title] })
	          )
	        );
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: style.footerWrapper },
	        _react2.default.createElement(
	          'div',
	          { className: 'container-fluid ' + style.container },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-12' },
	              _react2.default.createElement('div', { className: style.footerBrand })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-12' },
	              _react2.default.createElement(
	                'div',
	                { className: 'row' },
	                _react2.default.createElement(
	                  'p',
	                  null,
	                  'Todos los derechos reservados \xA9 Notable'
	                ),
	                this.getIcons(this.props.icons)
	              )
	            ),
	            _react2.default.createElement(_powered2.default, null)
	          )
	        )
	      );
	    }
	  }]);

	  return FooterAAA;
	}(_react2.default.Component);

	exports.default = FooterAAA;


	FooterAAA.propTypes = {
	  items: _react2.default.PropTypes.array.isRequired,
	  addresses: _react2.default.PropTypes.array,
	  icons: _react2.default.PropTypes.array
	};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = __webpack_require__(21);

	var Powered = function (_React$Component) {
	  _inherits(Powered, _React$Component);

	  function Powered() {
	    _classCallCheck(this, Powered);

	    return _possibleConstructorReturn(this, (Powered.__proto__ || Object.getPrototypeOf(Powered)).apply(this, arguments));
	  }

	  _createClass(Powered, [{
	    key: 'render',
	    value: function render() {
	      var data = [{
	        name: 'POOL',
	        url: 'http://somospool.com',
	        title: 'somos pool'
	      }, {
	        name: 'MINT',
	        url: 'http://mintitmedia.com',
	        title: 'Diseño y Desarrollo Web en Tijuana'
	      }];

	      return _react2.default.createElement(
	        'div',
	        { className: 'col-xs-12 ' + style.powered },
	        'Un proyecto de:\xA0',
	        _react2.default.createElement(
	          'a',
	          { href: data[0].url, title: data[0].title, target: '_blank' },
	          data[0].name
	        ),
	        '\xA0\xA0 C\xF3digo por:\xA0',
	        _react2.default.createElement(
	          'a',
	          { href: data[1].url, title: data[1].title, target: '_blank' },
	          data[1].name
	        )
	      );
	    }
	  }]);

	  return Powered;
	}(_react2.default.Component);

	exports.default = Powered;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___1OtUJ","vCenter":"style__vCenter___ZfiQP","vCenterRel":"style__vCenterRel___2Z0U4","hCenter":"style__hCenter___NPfjE","inheritHeight":"style__inheritHeight___-BJ7q","hideOverflow":"style__hideOverflow___3CKMi","icon-sprites":"style__icon-sprites___jkq7k","footerBrand":"style__footerBrand___3AS3G","footerWrapper":"style__footerWrapper___rztFx","container":"style__container___yXdw3","sitemap":"style__sitemap___3tSun","facebook":"style__facebook___3O8Ag","twitter":"style__twitter___2vpeo","pinterest":"style__pinterest___1Sa-N","instagram":"style__instagram___3C0VL","contact_info":"style__contact_info___vZfBA","powered":"style__powered___2_Lfa","serviceTitle":"style__serviceTitle___2GOw5"};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* eslint max-len: [2, 600, 4] */
	var scropllInProgress = false;

	function getScrollTo(section, elementID) {
	  var topElements = ['inicio', 'nosotros', 'equipo', 'servicios', 'contacto'];
	  if (topElements.indexOf(elementID) !== -1 || section === 'contacto') {
	    return 0;
	  }
	  return $('#' + elementID).offset().top - 220;
	}

	exports.default = function (location) {
	  // todo: get topElements from sitemap and improve exceptions "elementID"
	  var bits = location.pathname.split('/');
	  var elementID = location.pathname ? bits.pop() || 'inicio' : 'inicio';
	  if ($('.menu_trigger').is(':visible') && bits.length === 1) {
	    elementID = 'inicio';
	  }
	  if (bits[1] === 'contacto') {
	    elementID = 'contacto';
	  }
	  if ($('#' + elementID).length && !scropllInProgress) {
	    scropllInProgress = true;
	    var scrollTo = getScrollTo(bits[1], elementID);
	    var srolltime = 100;
	    var rootTag = typeof document.body.scrollTop !== 'undefined' ? 'body' : 'html, body';
	    $(rootTag).animate({
	      scrollTop: scrollTo
	    }, srolltime, 'swing', function () {
	      scropllInProgress = false;
	    });
	  }
	};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (elementID) {
	  $('.navbar-nav li.active').removeClass('active');
	  $('.navbar-nav a#' + elementID).parent().addClass('active');
	};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _block = __webpack_require__(25);

	var _block2 = _interopRequireDefault(_block);

	var _block3 = __webpack_require__(30);

	var _block4 = _interopRequireDefault(_block3);

	var _block5 = __webpack_require__(32);

	var _block6 = _interopRequireDefault(_block5);

	var _block7 = __webpack_require__(34);

	var _block8 = _interopRequireDefault(_block7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */


	var style = __webpack_require__(36);
	var data = __webpack_require__(37);

	var HomeSection = function (_React$Component) {
	  _inherits(HomeSection, _React$Component);

	  function HomeSection() {
	    _classCallCheck(this, HomeSection);

	    return _possibleConstructorReturn(this, (HomeSection.__proto__ || Object.getPrototypeOf(HomeSection)).apply(this, arguments));
	  }

	  _createClass(HomeSection, [{
	    key: 'render',
	    value: function render() {
	      var block1 = data.block1,
	          block2 = data.block2,
	          block3 = data.block3,
	          block4 = data.block4;

	      var block3Styles = {
	        title1: style.title2,
	        paragraph1: style.paragraph1
	      };
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_block2.default, { data: block1 }),
	        _react2.default.createElement(_block4.default, { data: block2 }),
	        _react2.default.createElement(_block6.default, { data: block3, style: block3Styles }),
	        _react2.default.createElement(_block8.default, { data: block4 })
	      );
	    }
	  }]);

	  return HomeSection;
	}(_react2.default.Component);

	exports.default = HomeSection;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _lodash = __webpack_require__(26);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _reactRouter = __webpack_require__(4);

	var _carousel = __webpack_require__(27);

	var _carousel2 = _interopRequireDefault(_carousel);

	var _svg = __webpack_require__(17);

	var _svg2 = _interopRequireDefault(_svg);

	var _setImageAsBackground = __webpack_require__(28);

	var _setImageAsBackground2 = _interopRequireDefault(_setImageAsBackground);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */


	var style = __webpack_require__(29);

	var Block1 = function (_React$Component) {
	  _inherits(Block1, _React$Component);

	  function Block1() {
	    _classCallCheck(this, Block1);

	    return _possibleConstructorReturn(this, (Block1.__proto__ || Object.getPrototypeOf(Block1)).apply(this, arguments));
	  }

	  _createClass(Block1, [{
	    key: 'renderItems',
	    value: function renderItems(data) {
	      if (_lodash2.default.isArray(data) && data.length) {
	        return data.map(function (item, index) {
	          var className = index === 0 ? 'active' : '';
	          var divStyle = (0, _setImageAsBackground2.default)(item.image);
	          return _react2.default.createElement(
	            'div',
	            { className: 'item ' + className + ' ' + (style.item || ''), key: index, style: divStyle },
	            _react2.default.createElement(
	              'div',
	              { className: 'container-fluid' },
	              _react2.default.createElement(
	                'div',
	                { className: 'row' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-10px col-md-10-offset-1 ' + style.heightFix },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'row' },
	                    _react2.default.createElement(
	                      'div',
	                      { className: style.vCenter },
	                      _react2.default.createElement(_svg2.default, { network: 'brand', className: style.logo }),
	                      _react2.default.createElement(
	                        'h1',
	                        { className: style.mainTitle },
	                        item.title
	                      ),
	                      _react2.default.createElement(
	                        _reactRouter.Link,
	                        { to: item.button_url, title: item.button_title, className: style.button2 },
	                        item.button_title
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          );
	        });
	      }
	      return null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var slides = this.props.data.slides;

	      var carouselClasses = {
	        inner: style.inner,
	        controls: {
	          base: style.controls,
	          prev: style.prev,
	          next: style.next
	        }
	      };
	      return _lodash2.default.isArray(slides) && slides.length ? _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _carousel2.default,
	          { id: 'main-carousel2', interval: 8000, indicators: false, classes: carouselClasses },
	          this.renderItems(slides)
	        )
	      ) : null;
	    }
	  }]);

	  return Block1;
	}(_react2.default.Component);

	exports.default = Block1;


	Block1.propTypes = {
	  data: _react2.default.PropTypes.object
	};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports = require("lodash");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _lodash = __webpack_require__(26);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _svg = __webpack_require__(17);

	var _svg2 = _interopRequireDefault(_svg);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */


	var Carousel = function (_React$Component) {
	  _inherits(Carousel, _React$Component);

	  function Carousel() {
	    _classCallCheck(this, Carousel);

	    return _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).apply(this, arguments));
	  }

	  _createClass(Carousel, [{
	    key: 'getIndicators',
	    value: function getIndicators(data, flag) {
	      // todo: implement based on bootsrap syntax
	      if (flag !== false && _lodash2.default.isArray(data) && data.length) {
	        return data.map(function (item, index) {
	          return _react2.default.createElement(
	            'div',
	            { key: index },
	            item
	          );
	        });
	      }
	      return null;
	    }
	  }, {
	    key: 'getControls',
	    value: function getControls(flag, id, classes) {
	      var base = classes.base,
	          prev = classes.prev,
	          next = classes.next,
	          arrow = classes.arrow;

	      if (flag !== false) {
	        return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'a',
	            { className: 'left carousel-control ' + (base || '') + ' ' + (prev || ''), href: '#' + id, role: 'button', 'data-slide': 'prev' },
	            _react2.default.createElement(_svg2.default, { network: 'carousel_left', className: arrow }),
	            _react2.default.createElement(
	              'span',
	              { className: 'sr-only' },
	              'Previous'
	            )
	          ),
	          _react2.default.createElement(
	            'a',
	            { className: 'right carousel-control ' + (base || '') + ' ' + (next || ''), href: '#' + id, role: 'button', 'data-slide': 'next' },
	            _react2.default.createElement(_svg2.default, { network: 'carousel_right', className: arrow }),
	            _react2.default.createElement(
	              'span',
	              { className: 'sr-only' },
	              'Next'
	            )
	          )
	        );
	      }
	      return null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          id = _props.id,
	          interval = _props.interval,
	          children = _props.children,
	          indicators = _props.indicators,
	          controls = _props.controls,
	          classes = _props.classes;

	      return _react2.default.createElement(
	        'div',
	        { id: id, className: 'carousel slide', 'data-ride': 'carousel', 'data-interval': interval || 5000 },
	        _react2.default.createElement(
	          'div',
	          { className: 'carousel-inner ' + (classes.inner || ''), role: 'listbox' },
	          this.getIndicators(children, indicators),
	          children,
	          this.getControls(controls, id, classes.controls)
	        )
	      );
	    }
	  }]);

	  return Carousel;
	}(_react2.default.Component);

	exports.default = Carousel;


	Carousel.propTypes = {
	  id: _react2.default.PropTypes.string.isRequired,
	  interval: _react2.default.PropTypes.number.isRequired,
	  children: _react2.default.PropTypes.any,
	  indicators: _react2.default.PropTypes.bool,
	  controls: _react2.default.PropTypes.bool,
	  classes: _react2.default.PropTypes.object
	};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _lodash = __webpack_require__(26);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (data) {
	  var imgUrl = '/images/demo.png';
	  if (_lodash2.default.isObject(data) && data.src) {
	    imgUrl = data.src.replace('www.dropbox.com', 'dl.dropboxusercontent.com');
	  } else if (_lodash2.default.isString(data)) {
	    imgUrl = data.replace('www.dropbox.com', 'dl.dropboxusercontent.com');
	  }
	  return {
	    backgroundImage: 'url(' + imgUrl + ')'
	  };
	}; /* eslint max-len: [2, 500, 4] */

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___1IAv0","vCenter":"style__vCenter___3op1c","vCenterRel":"style__vCenterRel___3rmpk","hCenter":"style__hCenter___bN1_x","inheritHeight":"style__inheritHeight___3EV0T","hideOverflow":"style__hideOverflow___1jYcy","icon-sprites":"style__icon-sprites___113mW","sideSwipe":"style__sideSwipe___1_Jvs","button1":"style__button1___3teya","button2":"style__button2___3emCl","button3":"style__button3___1egvE","title1":"style__title1___1fgRn","title2":"style__title2___3VQJ-","title4":"style__title4___GbpGB","title5":"style__title5___21deO","title6":"style__title6___2x7FO","title3":"style__title3___15G1J","mainTitle":"style__mainTitle___2YLHB","title7":"style__title7___1Pacu","title8":"style__title8___1BoeB","item":"style__item___1hdp3","logo":"style__logo___2ohm4","base":"style__base___3O-48","heightFix":"style__heightFix___25O8x","controls":"style__controls___15CM-","title":"style__title___2u_GP"};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	var _lodash = __webpack_require__(26);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */

	var style = __webpack_require__(31);

	var Block2 = function (_React$Component) {
	  _inherits(Block2, _React$Component);

	  function Block2() {
	    _classCallCheck(this, Block2);

	    return _possibleConstructorReturn(this, (Block2.__proto__ || Object.getPrototypeOf(Block2)).apply(this, arguments));
	  }

	  _createClass(Block2, [{
	    key: 'render',
	    value: function render() {
	      var _props$data = this.props.data,
	          titles = _props$data.titles,
	          images = _props$data.images,
	          buttons = _props$data.buttons;

	      return !_lodash2.default.isEmpty(this.props.data) ? _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'container-fluid' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row ' + style.wrapper1 },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-4 col-xs-12' },
	              _react2.default.createElement(
	                'h2',
	                { className: style.title1 },
	                titles.title1
	              ),
	              _react2.default.createElement('img', { className: style.image1, src: images.image1.src, alt: images.image1.alt }),
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { className: style.button1, to: buttons.button1.href },
	                buttons.button1.title
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-4 col-xs-12' },
	              _react2.default.createElement(
	                'h2',
	                { className: style.title1 },
	                titles.title2
	              ),
	              _react2.default.createElement('img', { className: style.image1, src: images.image2.src, alt: images.image2.alt }),
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { className: style.button1, to: buttons.button2.href },
	                buttons.button2.title
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-4 col-xs-12' },
	              _react2.default.createElement(
	                'h2',
	                { className: style.title1 },
	                titles.title3
	              ),
	              _react2.default.createElement('img', { className: style.image1, src: images.image3.src, alt: images.image3.alt }),
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { className: style.button1, to: buttons.button3.href },
	                buttons.button3.title
	              )
	            )
	          )
	        )
	      ) : null;
	    }
	  }]);

	  return Block2;
	}(_react2.default.Component);

	exports.default = Block2;


	Block2.propTypes = {
	  data: _react2.default.PropTypes.object
	};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___ByilZ","vCenter":"style__vCenter___1v0oL","vCenterRel":"style__vCenterRel___r367-","hCenter":"style__hCenter___35AKo","inheritHeight":"style__inheritHeight___GkUeM","hideOverflow":"style__hideOverflow___30PJL","icon-sprites":"style__icon-sprites___1crXd","title1":"style__title1___3Lp7y","title2":"style__title2___1Nebh","title4":"style__title4___90ELg","title5":"style__title5___3p9GA","title6":"style__title6___1cWpF","title3":"style__title3___2cBjs","title7":"style__title7___1hdkz","title8":"style__title8___4sMWt","wrapper1":"style__wrapper1___vNX14","wrapper2":"style__wrapper2___lRsTj","sideSwipe":"style__sideSwipe___2tbA2","button1":"style__button1___3Mc_g","button2":"style__button2___2zikt","button3":"style__button3___3KWNZ","image1":"style__image1___4P84q"};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _lodash = __webpack_require__(26);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _sanitize = __webpack_require__(33);

	var _sanitize2 = _interopRequireDefault(_sanitize);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */

	var Block3 = function (_React$Component) {
	  _inherits(Block3, _React$Component);

	  function Block3() {
	    _classCallCheck(this, Block3);

	    return _possibleConstructorReturn(this, (Block3.__proto__ || Object.getPrototypeOf(Block3)).apply(this, arguments));
	  }

	  _createClass(Block3, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          data = _props.data,
	          style = _props.style;
	      var titles = data.titles,
	          paragraphs = data.paragraphs;

	      return !_lodash2.default.isEmpty(this.props.data) ? _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'container-fluid' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-12 col-sm-10 col-sm-offset-1' },
	              _react2.default.createElement(
	                'h2',
	                { className: style.title1 },
	                titles.title1
	              ),
	              _react2.default.createElement('p', { className: style.paragraph1, dangerouslySetInnerHTML: (0, _sanitize2.default)(paragraphs.paragraph1) })
	            )
	          )
	        )
	      ) : null;
	    }
	  }]);

	  return Block3;
	}(_react2.default.Component);

	exports.default = Block3;


	Block3.propTypes = {
	  data: _react2.default.PropTypes.object,
	  style: _react2.default.PropTypes.object
	};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (data) {
	  return {
	    __html: data
	  };
	};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	var _lodash = __webpack_require__(26);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _setImageAsBackground = __webpack_require__(28);

	var _setImageAsBackground2 = _interopRequireDefault(_setImageAsBackground);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */

	var style = __webpack_require__(35);

	var Block4 = function (_React$Component) {
	  _inherits(Block4, _React$Component);

	  function Block4() {
	    _classCallCheck(this, Block4);

	    return _possibleConstructorReturn(this, (Block4.__proto__ || Object.getPrototypeOf(Block4)).apply(this, arguments));
	  }

	  _createClass(Block4, [{
	    key: 'render',
	    value: function render() {
	      var _props$data = this.props.data,
	          titles = _props$data.titles,
	          buttons = _props$data.buttons,
	          images = _props$data.images;

	      var divStyle = (0, _setImageAsBackground2.default)(images.image1);
	      return !_lodash2.default.isEmpty(this.props.data) ? _react2.default.createElement(
	        'div',
	        { className: style.wrapper2, style: divStyle },
	        _react2.default.createElement(
	          'div',
	          { className: 'container-fluid' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-10 col-xs-12' },
	              _react2.default.createElement(
	                'h2',
	                { className: style.mainTitle },
	                titles.title1
	              ),
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { className: style.button2, to: buttons.button1.href },
	                buttons.button1.title
	              )
	            )
	          )
	        )
	      ) : null;
	    }
	  }]);

	  return Block4;
	}(_react2.default.Component);

	exports.default = Block4;


	Block4.propTypes = {
	  data: _react2.default.PropTypes.object
	};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___2Xb8X","vCenter":"style__vCenter___hmun0","vCenterRel":"style__vCenterRel___2lPVo","hCenter":"style__hCenter___1JZnn","inheritHeight":"style__inheritHeight___1rILl","hideOverflow":"style__hideOverflow___1Q2PJ","icon-sprites":"style__icon-sprites___38gIr","wrapper1":"style__wrapper1___3ANK2","wrapper2":"style__wrapper2___2RaJ7","title1":"style__title1___25IAx","title2":"style__title2___wfjef","title4":"style__title4____YoIR","title5":"style__title5___T2PV8","title6":"style__title6___G7Bi3","title3":"style__title3___EBeus","mainTitle":"style__mainTitle___1Zhib","title7":"style__title7___18HEf","title8":"style__title8___1HuLF","sideSwipe":"style__sideSwipe___2Dk6P","button1":"style__button1___1hNj-","button2":"style__button2___1PxHI","button3":"style__button3___1BqYh"};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___qougA","vCenter":"style__vCenter___2pche","vCenterRel":"style__vCenterRel___WRKiA","hCenter":"style__hCenter___GVDHq","inheritHeight":"style__inheritHeight___3vMr3","hideOverflow":"style__hideOverflow___DySF5","icon-sprites":"style__icon-sprites___3MPLL","title1":"style__title1___2nprc","title2":"style__title2___Ed3NC","title4":"style__title4___TWOKi","title5":"style__title5___3ggFp","title6":"style__title6___24Rd3","title3":"style__title3___3lNau","title7":"style__title7___12tON","title8":"style__title8___yHay2","paragraph1":"style__paragraph1___1TaFV","paragraph2":"style__paragraph2___2uqC0","paragraph3":"style__paragraph3___3gwex","paragraph4":"style__paragraph4___paMRe","paragraph5":"style__paragraph5___1RMUm"};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	'use strict';

	/* eslint max-len: [2, 500, 4] */

	var data = {
	  block1: {
	    slides: [{
	      id: 1,
	      image: 'https://www.dropbox.com/s/h7wfrs9280j2yxl/Img-Banner-EstiloNoSeHereda-Slide1.jpg?dl=0',
	      title: 'El estilo no se hereda',
	      button_title: 'Productos',
	      button_url: '/productos',
	      content: '',
	      block: 1
	    }, {
	      id: 2,
	      image: 'https://www.dropbox.com/s/dyimn062h0r403b/Img-Banner-DisenoInteriores-Slide2.jpg?dl=0',
	      title: 'DISEÑO DE INTERIORES',
	      button_title: 'SERVICIOS',
	      button_url: '/servicios',
	      content: '',
	      block: 1
	    }, {
	      id: 3,
	      image: 'https://www.dropbox.com/s/z0ch7kalfvu5t92/Img-Banner-MobiliarioContemporaneo-Slide3.jpg?dl=0',
	      title: 'MOBILIARIO CONTEMPORÁNEO',
	      button_title: 'Productos',
	      button_url: '/productos',
	      content: '',
	      block: 1
	    }]
	  },
	  block2: {
	    buttons: {
	      button1: { id: 1, href: '/productos', title: 'Ver productos', block: 2 },
	      button2: { id: 2, href: '/productos', title: 'Ver productos', block: 2 },
	      button3: { id: 3, href: '/productos', title: 'Ver productos', block: 2 }
	    },
	    images: {
	      image1: {
	        id: 1,
	        src: '/images/img_living.png',
	        alt: 'ver productos',
	        block: 2
	      },
	      image2: {
	        id: 2,
	        src: '/images/img_dining.png',
	        alt: 'ver productos',
	        block: 2
	      },
	      image3: {
	        id: 3,
	        src: '/images/img_bed.png',
	        alt: 'ver productos',
	        block: 2
	      }
	    },
	    titles: { title1: 'LIVINGROOM', title2: 'DINING', title3: 'BEDROOM' }
	  },
	  block3: {
	    paragraphs: {
	      paragraph1: 'En Notable más allá de adquirir un mueble de calidad, estás comprando una pieza de diseño tan bella, funcional y confortable, que sabemos que vivirás en ella momentos inolvidables.'
	    },
	    titles: { title1: 'NUESTRO COMPROMISO' }
	  },
	  block4: {
	    buttons: {
	      button1: { id: 6, href: '/contacto', title: 'UBICACIÓN', block: 9 }
	    },
	    images: {
	      image1: {
	        id: 7,
	        src: 'https://www.dropbox.com/s/2h1varw7k7wtauj/Img-Showroom2.jpg?dl=0',
	        alt: 'UBICACIÓN',
	        block: 9
	      }
	    },
	    titles: { title1: 'VISITA NUESTRO SHOWROOM EN TIJUANA' }
	  }
	};

	module.exports = data;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _block = __webpack_require__(39);

	var _block2 = _interopRequireDefault(_block);

	var _block3 = __webpack_require__(41);

	var _block4 = _interopRequireDefault(_block3);

	var _block5 = __webpack_require__(32);

	var _block6 = _interopRequireDefault(_block5);

	var _block7 = __webpack_require__(43);

	var _block8 = _interopRequireDefault(_block7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */


	var style = __webpack_require__(45);
	var data = __webpack_require__(46);

	var AboutSection = function (_React$Component) {
	  _inherits(AboutSection, _React$Component);

	  function AboutSection() {
	    _classCallCheck(this, AboutSection);

	    return _possibleConstructorReturn(this, (AboutSection.__proto__ || Object.getPrototypeOf(AboutSection)).apply(this, arguments));
	  }

	  _createClass(AboutSection, [{
	    key: 'render',
	    value: function render() {
	      var block1 = data.block1,
	          block2 = data.block2,
	          block3 = data.block3,
	          block4 = data.block4;

	      var block3Styles = {
	        title1: style.title5,
	        paragraph1: style.paragraph4
	      };
	      var block2classes = 'col-xs-12 col-sm-6 col-sm-offset-3';
	      var classes = {
	        svg: style.svg,
	        col1: 'col-xs-12 col-sm-6',
	        col2: 'col-xs-12 col-sm-6'
	      };
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_block2.default, { data: block1, classes: block2classes }),
	        _react2.default.createElement(_block4.default, { data: block2, classes: classes }),
	        _react2.default.createElement(_block6.default, { data: block3, style: block3Styles }),
	        _react2.default.createElement(_block8.default, { data: block4 })
	      );
	    }
	  }]);

	  return AboutSection;
	}(_react2.default.Component);

	exports.default = AboutSection;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _lodash = __webpack_require__(26);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _svg = __webpack_require__(17);

	var _svg2 = _interopRequireDefault(_svg);

	var _setImageAsBackground = __webpack_require__(28);

	var _setImageAsBackground2 = _interopRequireDefault(_setImageAsBackground);

	var _sanitize = __webpack_require__(33);

	var _sanitize2 = _interopRequireDefault(_sanitize);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */


	var style = __webpack_require__(40);

	var Block1 = function (_React$Component) {
	  _inherits(Block1, _React$Component);

	  function Block1() {
	    _classCallCheck(this, Block1);

	    return _possibleConstructorReturn(this, (Block1.__proto__ || Object.getPrototypeOf(Block1)).apply(this, arguments));
	  }

	  _createClass(Block1, [{
	    key: 'render',
	    value: function render() {
	      var styles = this.props.style;
	      var _props$data = this.props.data,
	          titles = _props$data.titles,
	          paragraphs = _props$data.paragraphs,
	          images = _props$data.images;

	      var divStyle = (0, _setImageAsBackground2.default)(images.image1);
	      return !_lodash2.default.isEmpty(this.props.data) ? _react2.default.createElement(
	        'div',
	        { style: divStyle, className: style.mainbanner + ' ' + (styles ? styles.wrapper : '') },
	        _react2.default.createElement(
	          'div',
	          { className: 'container-fluid' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: this.props.classes },
	              _react2.default.createElement(
	                'h2',
	                { className: style.title3 },
	                titles.title1
	              ),
	              _react2.default.createElement('p', { className: style.paragraph3, dangerouslySetInnerHTML: (0, _sanitize2.default)(paragraphs.paragraph1) }),
	              _react2.default.createElement(_svg2.default, { network: 'double_arrow_down', className: style.svg })
	            )
	          )
	        )
	      ) : null;
	    }
	  }]);

	  return Block1;
	}(_react2.default.Component);

	exports.default = Block1;


	Block1.propTypes = {
	  data: _react2.default.PropTypes.object,
	  classes: _react2.default.PropTypes.string,
	  style: _react2.default.PropTypes.object
	};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___31Hcb","vCenter":"style__vCenter___1vIHp","vCenterRel":"style__vCenterRel___370S2","hCenter":"style__hCenter___35qeO","inheritHeight":"style__inheritHeight___1sRB4","hideOverflow":"style__hideOverflow___3Yokh","icon-sprites":"style__icon-sprites___1i1iv","sideSwipe":"style__sideSwipe___3OFJQ","button1":"style__button1___knh5C","button2":"style__button2___3rlK3","button3":"style__button3___2KaTC","title1":"style__title1___1LlDm","title2":"style__title2___3ep2l","title4":"style__title4___1U9Z2","title5":"style__title5___1Vr2v","title6":"style__title6___2K-qx","title3":"style__title3___1URy1","title7":"style__title7___3y_yN","title8":"style__title8___1urYo","paragraph1":"style__paragraph1___8Df9P","paragraph2":"style__paragraph2___KQkCk","paragraph3":"style__paragraph3___2Y3uZ","paragraph4":"style__paragraph4___2iSO1","paragraph5":"style__paragraph5___iOq2N","mainbanner":"style__mainbanner___3hjPv","svg":"style__svg___29LI3"};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	var _lodash = __webpack_require__(26);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _svg = __webpack_require__(17);

	var _svg2 = _interopRequireDefault(_svg);

	var _sanitize = __webpack_require__(33);

	var _sanitize2 = _interopRequireDefault(_sanitize);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */


	var style = __webpack_require__(42);

	var Block2 = function (_React$Component) {
	  _inherits(Block2, _React$Component);

	  function Block2() {
	    _classCallCheck(this, Block2);

	    return _possibleConstructorReturn(this, (Block2.__proto__ || Object.getPrototypeOf(Block2)).apply(this, arguments));
	  }

	  _createClass(Block2, [{
	    key: 'render',
	    value: function render() {
	      var _props$data = this.props.data,
	          titles = _props$data.titles,
	          images = _props$data.images,
	          paragraphs = _props$data.paragraphs,
	          buttons = _props$data.buttons;

	      var classes = this.props.classes;
	      return !_lodash2.default.isEmpty(this.props.data) ? _react2.default.createElement(
	        'div',
	        { className: style.commitment },
	        _react2.default.createElement(
	          'div',
	          { className: 'container-fluid ' + style.wrapper },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: classes.col1 },
	              _react2.default.createElement(_svg2.default, { network: 'circled_brand', className: style.svg + ' ' + classes.svg }),
	              _react2.default.createElement(
	                'h2',
	                { className: style.title7 },
	                titles.title1
	              ),
	              _react2.default.createElement('p', { className: style.paragraph2, dangerouslySetInnerHTML: (0, _sanitize2.default)(paragraphs.paragraph1) }),
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { className: style.button1, to: buttons.button1.href },
	                buttons.button1.title
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: classes.col2 },
	              _react2.default.createElement('img', { className: style.image, src: images.image1.src, alt: images.image1.alt })
	            )
	          )
	        )
	      ) : null;
	    }
	  }]);

	  return Block2;
	}(_react2.default.Component);

	exports.default = Block2;


	Block2.propTypes = {
	  data: _react2.default.PropTypes.object,
	  classes: _react2.default.PropTypes.object
	};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___xP6Z-","vCenter":"style__vCenter___3EDwH","vCenterRel":"style__vCenterRel___1d1I_","hCenter":"style__hCenter___3LKuT","inheritHeight":"style__inheritHeight___11OVE","hideOverflow":"style__hideOverflow___1koJ0","icon-sprites":"style__icon-sprites___2uiLf","wrapper1":"style__wrapper1___3L2d2","wrapper2":"style__wrapper2___2PtFa","sideSwipe":"style__sideSwipe___19HIU","button1":"style__button1___ma4vA","button2":"style__button2___1Fwzx","button3":"style__button3___3p2Pg","title1":"style__title1___2c1PC","title2":"style__title2___U0Za7","title4":"style__title4___c-0OO","title5":"style__title5___XOjHY","title6":"style__title6___2E_cG","title3":"style__title3___qpZuD","title7":"style__title7___21JO_","title8":"style__title8___36gBQ","image1":"style__image1___25W0l","image":"style__image___3H8hz","paragraph1":"style__paragraph1___1m33N","paragraph2":"style__paragraph2___3OtNY","paragraph3":"style__paragraph3___3qs1J","paragraph4":"style__paragraph4___3oqJH","paragraph5":"style__paragraph5___akVWK","commitment":"style__commitment___2dWq9","svg":"style__svg___25w61"};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _lodash = __webpack_require__(26);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _svg = __webpack_require__(17);

	var _svg2 = _interopRequireDefault(_svg);

	var _sanitize = __webpack_require__(33);

	var _sanitize2 = _interopRequireDefault(_sanitize);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */


	var style = __webpack_require__(44);

	var Block4 = function (_React$Component) {
	  _inherits(Block4, _React$Component);

	  function Block4() {
	    _classCallCheck(this, Block4);

	    return _possibleConstructorReturn(this, (Block4.__proto__ || Object.getPrototypeOf(Block4)).apply(this, arguments));
	  }

	  _createClass(Block4, [{
	    key: 'render',
	    value: function render() {
	      var _props$data = this.props.data,
	          titles = _props$data.titles,
	          paragraphs = _props$data.paragraphs;

	      return !_lodash2.default.isEmpty(this.props.data) ? _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'container-fluid' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-12 col-xs-12' },
	              _react2.default.createElement(
	                'h2',
	                { className: style.title5 },
	                titles.title1
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-4 col-xs-12' },
	              _react2.default.createElement(_svg2.default, { network: 'circled_diseno', className: style.svg }),
	              _react2.default.createElement(
	                'h3',
	                { className: style.title4 },
	                titles.title2
	              ),
	              _react2.default.createElement('p', { className: style.paragraph2, dangerouslySetInnerHTML: (0, _sanitize2.default)(paragraphs.paragraph1) })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-4 col-xs-12' },
	              _react2.default.createElement(_svg2.default, { network: 'circled_coordinacion', className: style.svg }),
	              _react2.default.createElement(
	                'h3',
	                { className: style.title4 },
	                titles.title3
	              ),
	              _react2.default.createElement('p', { className: style.paragraph2, dangerouslySetInnerHTML: (0, _sanitize2.default)(paragraphs.paragraph2) })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-4 col-xs-12' },
	              _react2.default.createElement(_svg2.default, { network: 'circled_calidad', className: style.svg }),
	              _react2.default.createElement(
	                'h3',
	                { className: style.title4 },
	                titles.title4
	              ),
	              _react2.default.createElement('p', { className: style.paragraph2, dangerouslySetInnerHTML: (0, _sanitize2.default)(paragraphs.paragraph3) })
	            )
	          )
	        )
	      ) : null;
	    }
	  }]);

	  return Block4;
	}(_react2.default.Component);

	exports.default = Block4;


	Block4.propTypes = {
	  data: _react2.default.PropTypes.object
	};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___3P8Pp","vCenter":"style__vCenter___2Et1N","vCenterRel":"style__vCenterRel___3DCRz","hCenter":"style__hCenter___wKyoU","inheritHeight":"style__inheritHeight___1zL8U","hideOverflow":"style__hideOverflow___3ZV71","icon-sprites":"style__icon-sprites___8RQVq","image1":"style__image1___3KY44","wrapper1":"style__wrapper1___3SYJt","wrapper2":"style__wrapper2___Q9fKW","paragraph1":"style__paragraph1___3QbsS","paragraph2":"style__paragraph2___26NJ4","paragraph3":"style__paragraph3___3Uj57","paragraph4":"style__paragraph4___3ImpF","paragraph5":"style__paragraph5___3cZ7N","sideSwipe":"style__sideSwipe___13jwX","button1":"style__button1___1pbIc","button2":"style__button2___1FucC","button3":"style__button3___1uWcc","title1":"style__title1___1w9oV","title2":"style__title2___2-ry2","title4":"style__title4___2yc3s","title5":"style__title5___TtpHn","title6":"style__title6___eDkzQ","title3":"style__title3___L0OLC","title7":"style__title7___1eGbP","title8":"style__title8___3UdhB","svg":"style__svg___3Smom"};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___2vKQO","vCenter":"style__vCenter___1vanJ","vCenterRel":"style__vCenterRel___1rwm1","hCenter":"style__hCenter___ddexn","inheritHeight":"style__inheritHeight___17DwM","hideOverflow":"style__hideOverflow___3hU3x","icon-sprites":"style__icon-sprites___3jYla","title1":"style__title1___2DvLL","title2":"style__title2___3c7eJ","title4":"style__title4___2RV5L","title5":"style__title5___Fa1hY","title6":"style__title6___1WoJH","title3":"style__title3___3PmPe","title7":"style__title7___eYxlr","title8":"style__title8___18YDU","paragraph1":"style__paragraph1___14JoB","paragraph2":"style__paragraph2___21F7M","paragraph3":"style__paragraph3___2r_Hb","paragraph4":"style__paragraph4___1Nxee","paragraph5":"style__paragraph5___2PLE2","wrapper":"style__wrapper___NEBTv","svg":"style__svg___XiDUT"};

/***/ }),
/* 46 */
/***/ (function(module, exports) {

	'use strict';

	/* eslint max-len: [2, 500, 4] */

	var data = {
	  block1: {
	    images: {
	      image1: {
	        id: 5,
	        src: 'https://www.dropbox.com/s/fz0fgo91vodmn6c/Img-Banner-Slide1-Nosotros.jpg?dl=0',
	        alt: 'MOBILIARIO CONTEMPORÁNEO',
	        block: 4
	      }
	    },
	    paragraphs: {
	      paragraph1: 'Diseñamos mobiliario contemporáneo con el objetivo de crear espacios únicos y confortables.'
	    },
	    titles: { title1: 'MOBILIARIO CONTEMPORÁNEO' }
	  },
	  block2: {
	    buttons: {
	      button1: { id: 5, href: '/contacto', title: 'CONTÁCTANOS', block: 5 }
	    },
	    images: {
	      image1: {
	        id: 6,
	        src: '/images/nosotros-b2-fox.jpg',
	        alt: 'NUESTRO COMPROMISO',
	        block: 5
	      }
	    },
	    paragraphs: {
	      paragraph1: 'Crear mobiliario contemporáneo que cautive por la belleza de su diseño, sorprenda por su comodidad y que presuma la calidad de sus materiales.'
	    },
	    titles: { title1: 'NUESTRO COMPROMISO' }
	  },
	  block3: {
	    paragraphs: {
	      paragraph1: 'Somos una marca de muebles e interiores contemporáneos, destinada a crear espacios únicos y confortables, ofreciendo diseño único, coordinación y calidad. NOTABLE surge en el 2015 en Tijuana B.C. México, fundada por arquitectos apasionados por el diseño de mobiliario y espacios.'
	    },
	    titles: { title1: 'QUIÉNES SOMOS' }
	  },
	  block4: {
	    paragraphs: {
	      paragraph1: 'Porque somos una empresa de diseño y cada pieza es creada\r\npor el equipo de Notable.',
	      paragraph2: 'Porque todas las piezas están ideadas como un todo para conjugarse en diversos espacios.',
	      paragraph3: 'Porque cada uno de los materiales son seleccionados por su durabili- dad y calidad estética, y a su vez, tratados por manos expertas.'
	    },
	    titles: {
	      title1: 'MOBILIARIO NOTABLE',
	      title2: 'DISEÑO ÚNICO',
	      title3: 'COORDINACIÓN',
	      title4: 'CALIDAD'
	    }
	  }
	};

	module.exports = data;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _block = __webpack_require__(48);

	var _block2 = _interopRequireDefault(_block);

	var _block3 = __webpack_require__(39);

	var _block4 = _interopRequireDefault(_block3);

	var _block5 = __webpack_require__(50);

	var _block6 = _interopRequireDefault(_block5);

	var _block7 = __webpack_require__(52);

	var _block8 = _interopRequireDefault(_block7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */


	var style = __webpack_require__(54);
	var data = __webpack_require__(55);

	var ProductsSection = function (_React$Component) {
	  _inherits(ProductsSection, _React$Component);

	  function ProductsSection() {
	    _classCallCheck(this, ProductsSection);

	    return _possibleConstructorReturn(this, (ProductsSection.__proto__ || Object.getPrototypeOf(ProductsSection)).apply(this, arguments));
	  }

	  _createClass(ProductsSection, [{
	    key: 'render',
	    value: function render() {
	      var block1 = data.block1,
	          block2 = data.block2,
	          block3 = data.block3,
	          block4 = data.block4,
	          block5 = data.block5,
	          block6 = data.block6;

	      var block2Styles = {
	        wrapper: style.wrapper
	      };

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_block2.default, { data: block1 }),
	        _react2.default.createElement(_block4.default, { data: block2, classes: 'col-xs-12 col-sm-8 col-sm-offset-2', style: block2Styles }),
	        _react2.default.createElement(_block6.default, { data: block3, sliderId: 'main-carousel-livingroom' }),
	        _react2.default.createElement(_block6.default, { data: block4, sliderId: 'main-carousel-dining' }),
	        _react2.default.createElement(_block6.default, { data: block5, sliderId: 'main-carousel-bedroom' }),
	        _react2.default.createElement(_block8.default, { data: block6 })
	      );
	    }
	  }]);

	  return ProductsSection;
	}(_react2.default.Component);

	exports.default = ProductsSection;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _lodash = __webpack_require__(26);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _reactRouter = __webpack_require__(4);

	var _carousel = __webpack_require__(27);

	var _carousel2 = _interopRequireDefault(_carousel);

	var _sanitize = __webpack_require__(33);

	var _sanitize2 = _interopRequireDefault(_sanitize);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */


	var style = __webpack_require__(49);

	var Block1 = function (_React$Component) {
	  _inherits(Block1, _React$Component);

	  function Block1() {
	    _classCallCheck(this, Block1);

	    return _possibleConstructorReturn(this, (Block1.__proto__ || Object.getPrototypeOf(Block1)).apply(this, arguments));
	  }

	  _createClass(Block1, [{
	    key: 'renderItems',
	    value: function renderItems(data) {
	      if (_lodash2.default.isArray(data) && data.length) {
	        return data.map(function (item, index) {
	          var className = index === 0 ? 'active' : '';
	          var imgUrl = item.image.length ? item.image.replace('www.dropbox.com', 'dl.dropboxusercontent.com') : '/images/demo.png';

	          return _react2.default.createElement('div', { className: 'item ' + style.slide + ' ' + className + ' ' + (style.item || ''), key: index, style: { backgroundImage: 'url("' + imgUrl + '");"' } });
	        });
	      }
	      return null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props$data = this.props.data,
	          slides = _props$data.slides,
	          titles = _props$data.titles,
	          paragraphs = _props$data.paragraphs,
	          buttons = _props$data.buttons;

	      var carouselClasses = {
	        inner: style.inner,
	        controls: {
	          base: style.controls,
	          prev: style.prev,
	          next: style.next,
	          arrow: style.arrow
	        }
	      };
	      return _lodash2.default.isArray(slides) && slides.length && titles ? _react2.default.createElement(
	        'div',
	        { className: style.bannerContainer },
	        _react2.default.createElement(
	          _carousel2.default,
	          { id: 'main-carousel2', interval: 8000, indicators: false, classes: carouselClasses },
	          this.renderItems(slides)
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'container-fluid' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-12 col-sm-5' },
	              _react2.default.createElement(
	                'div',
	                { className: style.overbanner },
	                _react2.default.createElement(
	                  'div',
	                  { className: style.vCenter },
	                  _react2.default.createElement(
	                    'h1',
	                    { className: style.title },
	                    titles.title1
	                  ),
	                  _react2.default.createElement(
	                    'h2',
	                    { className: style.subtitle },
	                    titles.title2
	                  ),
	                  _react2.default.createElement('p', { className: style.paragraph, dangerouslySetInnerHTML: (0, _sanitize2.default)(paragraphs.paragraph1) }),
	                  _react2.default.createElement(
	                    _reactRouter.Link,
	                    { className: style.button, to: buttons.button1.href, title: buttons.button1.title },
	                    buttons.button1.title
	                  )
	                )
	              )
	            )
	          )
	        )
	      ) : null;
	    }
	  }]);

	  return Block1;
	}(_react2.default.Component);

	exports.default = Block1;


	Block1.propTypes = {
	  data: _react2.default.PropTypes.object
	};

/***/ }),
/* 49 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___1j0pv","vCenter":"style__vCenter___2KQFQ","vCenterRel":"style__vCenterRel___34eYy","hCenter":"style__hCenter___1Lkdf","inheritHeight":"style__inheritHeight___1q40G","hideOverflow":"style__hideOverflow___DrxCZ","icon-sprites":"style__icon-sprites___3tV9U","sideSwipe":"style__sideSwipe___1FVlo","button1":"style__button1___3ZmPV","button":"style__button___1lbNE","button2":"style__button2___2shnn","button3":"style__button3___3VbYO","title1":"style__title1___1gW4S","title2":"style__title2___2Tj1e","title4":"style__title4___3J4Je","title5":"style__title5___2Nimp","title6":"style__title6___1J_L3","title":"style__title___SyWrl","title3":"style__title3___1HOPW","title7":"style__title7___2tzA4","subtitle":"style__subtitle___28u9N","title8":"style__title8___2p7DZ","paragraph1":"style__paragraph1___3jelK","paragraph2":"style__paragraph2___3QqbA","paragraph":"style__paragraph___2nuu4","paragraph3":"style__paragraph3___2muKz","paragraph4":"style__paragraph4___1geTk","paragraph5":"style__paragraph5___30-m9","slide":"style__slide___1g7hl","overbanner":"style__overbanner___2RmA_","controls":"style__controls___MnoRe","bannerContainer":"style__bannerContainer___1enrP"};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _lodash = __webpack_require__(26);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _reactRouter = __webpack_require__(4);

	var _carousel = __webpack_require__(27);

	var _carousel2 = _interopRequireDefault(_carousel);

	var _sanitize = __webpack_require__(33);

	var _sanitize2 = _interopRequireDefault(_sanitize);

	var _svg = __webpack_require__(17);

	var _svg2 = _interopRequireDefault(_svg);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */


	var style = __webpack_require__(51);

	var Block3 = function (_React$Component) {
	  _inherits(Block3, _React$Component);

	  function Block3() {
	    _classCallCheck(this, Block3);

	    return _possibleConstructorReturn(this, (Block3.__proto__ || Object.getPrototypeOf(Block3)).apply(this, arguments));
	  }

	  _createClass(Block3, [{
	    key: 'renderItems',
	    value: function renderItems(data) {
	      if (_lodash2.default.isArray(data) && data.length) {
	        return data.map(function (item, index) {
	          var className = index === 0 ? 'active' : '';
	          var imgUrl = item.image.length ? item.image.replace('www.dropbox.com', 'dl.dropboxusercontent.com') : '/images/demo.png';
	          return _react2.default.createElement(
	            'div',
	            { className: 'item ' + className + ' ' + (style.item || ''), key: index },
	            _react2.default.createElement(
	              'div',
	              { className: 'container-fluid ' + style.wrapper },
	              _react2.default.createElement(
	                'div',
	                { className: 'row' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'col-xs-12 col-sm-8 col-sm-offset-2 col-md-10 col-md-offset-1 ' },
	                  _react2.default.createElement('img', { className: style.image, src: imgUrl, alt: item.title }),
	                  _react2.default.createElement('hr', { className: style.hr })
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'col-xs-12 col-sm-4 col-sm-offset-2 col-md-5 col-md-offset-1' },
	                  _react2.default.createElement(
	                    'h3',
	                    { className: style.subtitle },
	                    item.title
	                  ),
	                  _react2.default.createElement('p', { dangerouslySetInnerHTML: (0, _sanitize2.default)(item.content), className: style.paragraph })
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'col-xs-12 col-sm-4 col-md-5' },
	                  _react2.default.createElement(
	                    _reactRouter.Link,
	                    { to: item.button_url, title: item.button_title, className: style.button },
	                    item.button_title
	                  ),
	                  _react2.default.createElement(
	                    _reactRouter.Link,
	                    { to: 'https://dl.dropboxusercontent.com/s/k3w1vgfgiwfdd5l/CATALOGO%20NOTABLE%202016_low.pdf?dl=0', title: item.button_title, className: style.button_descargar, target: '_blank' },
	                    'DESCARGAR CAT\xC1LOGO ',
	                    _react2.default.createElement(_svg2.default, { network: 'arrow_down', className: style.arrow_down })
	                  )
	                )
	              )
	            )
	          );
	        });
	      }
	      return null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var sliderId = this.props.sliderId;
	      var _props$data = this.props.data,
	          slides = _props$data.slides,
	          titles = _props$data.titles;

	      var carouselClasses = {
	        inner: style.inner,
	        controls: {
	          base: style.controls,
	          prev: style.prev,
	          next: style.next,
	          arrow: style.arrow
	        }
	      };
	      return _lodash2.default.isArray(slides) && slides.length && titles ? _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'h2',
	            { className: style.title },
	            titles.title1
	          )
	        ),
	        _react2.default.createElement(
	          _carousel2.default,
	          { id: sliderId, interval: 8000, indicators: false, classes: carouselClasses },
	          this.renderItems(slides)
	        )
	      ) : null;
	    }
	  }]);

	  return Block3;
	}(_react2.default.Component);

	exports.default = Block3;


	Block3.propTypes = {
	  data: _react2.default.PropTypes.object,
	  sliderId: _react2.default.PropTypes.string.isRequired
	};

/***/ }),
/* 51 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___zkvoI","arrow":"style__arrow___YRQ8M","vCenter":"style__vCenter___1amrF","arrow_down":"style__arrow_down___1xpHt","vCenterRel":"style__vCenterRel___dRIh_","hCenter":"style__hCenter___3ATdP","inheritHeight":"style__inheritHeight___35WI7","hideOverflow":"style__hideOverflow___1PqV_","icon-sprites":"style__icon-sprites___1wvNu","image1":"style__image1___1XYmO","image":"style__image___3La5m","paragraph1":"style__paragraph1___GDSgG","paragraph2":"style__paragraph2___YHIz0","paragraph":"style__paragraph___altZf","paragraph3":"style__paragraph3___3TUGd","paragraph4":"style__paragraph4___36NX-","paragraph5":"style__paragraph5___1IKiM","sideSwipe":"style__sideSwipe___10nak","button1":"style__button1___1wRom","button":"style__button___f4bc2","button_descargar":"style__button_descargar___3_aw1","button2":"style__button2___2IfG_","button3":"style__button3___90xKI","title1":"style__title1___1ALfY","subtitle":"style__subtitle___2oUeT","title2":"style__title2___1rAMk","title4":"style__title4___2PoEp","title5":"style__title5___3oOGE","title6":"style__title6___3AN-Q","title":"style__title___2mlf9","title3":"style__title3___3_np7","title7":"style__title7___JQtWA","title8":"style__title8___1nNSa","wrapper":"style__wrapper___1BJ7Q","hr":"style__hr___37AfO","controls":"style__controls___1nXQ8"};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	var _lodash = __webpack_require__(26);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _carousel = __webpack_require__(27);

	var _carousel2 = _interopRequireDefault(_carousel);

	var _sanitize = __webpack_require__(33);

	var _sanitize2 = _interopRequireDefault(_sanitize);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */


	var style = __webpack_require__(53);

	var Block4 = function (_React$Component) {
	  _inherits(Block4, _React$Component);

	  function Block4() {
	    _classCallCheck(this, Block4);

	    return _possibleConstructorReturn(this, (Block4.__proto__ || Object.getPrototypeOf(Block4)).apply(this, arguments));
	  }

	  _createClass(Block4, [{
	    key: 'renderItems',
	    value: function renderItems(data) {
	      if (_lodash2.default.isArray(data) && data.length) {
	        return data.map(function (item, index) {
	          var className = index === 0 ? 'active' : '';
	          var imgUrl = item.image.length ? item.image.replace('www.dropbox.com', 'dl.dropboxusercontent.com') : '/images/demo.png';
	          return _react2.default.createElement(
	            'div',
	            { className: 'item ' + className + ' ' + (style.item || ''), key: index },
	            _react2.default.createElement('img', { className: style.image, src: imgUrl, alt: item.title })
	          );
	        });
	      }
	      return null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props$data = this.props.data,
	          titles = _props$data.titles,
	          slides = _props$data.slides,
	          paragraphs = _props$data.paragraphs,
	          buttons = _props$data.buttons;

	      var carouselClasses = {
	        inner: style.inner,
	        controls: {
	          base: style.controls,
	          prev: style.prev,
	          next: style.next,
	          arrow: style.arrow
	        }
	      };
	      return !_lodash2.default.isEmpty(this.props.data) ? _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'container-fluid ' + style.wrapper },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-4 col-sm-offset-2 col-md-5 col-md-offset-1 col-xs-12' },
	              _react2.default.createElement(
	                'h2',
	                { className: style.title },
	                titles.title1
	              ),
	              _react2.default.createElement('p', { className: style.paragraph, dangerouslySetInnerHTML: (0, _sanitize2.default)(paragraphs.paragraph1) }),
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { className: style.button, to: buttons.button1.href },
	                buttons.button1.title
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-6 col-xs-12' },
	              _react2.default.createElement(
	                _carousel2.default,
	                { id: 'products-sliders-showroom', interval: 8000, indicators: false, classes: carouselClasses },
	                this.renderItems(slides)
	              )
	            )
	          )
	        )
	      ) : null;
	    }
	  }]);

	  return Block4;
	}(_react2.default.Component);

	exports.default = Block4;


	Block4.propTypes = {
	  data: _react2.default.PropTypes.object
	};

/***/ }),
/* 53 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___2OwT_","controls":"style__controls___3nGvH","vCenter":"style__vCenter___2CepC","vCenterRel":"style__vCenterRel___3KKir","hCenter":"style__hCenter___3pCCD","inheritHeight":"style__inheritHeight___8XMfg","hideOverflow":"style__hideOverflow___3CRd7","icon-sprites":"style__icon-sprites___xUhFv","image1":"style__image1___s6jf9","image":"style__image___3_x2J","wrapper1":"style__wrapper1___QX2J1","wrapper2":"style__wrapper2___17lUu","paragraph1":"style__paragraph1___dfw1j","paragraph2":"style__paragraph2___338-V","paragraph":"style__paragraph___2V_vx","paragraph3":"style__paragraph3___3UGDB","paragraph4":"style__paragraph4___2cXGH","paragraph5":"style__paragraph5___O7bBq","sideSwipe":"style__sideSwipe___2-mAi","button1":"style__button1___BIa7T","button":"style__button___3VSSK","button2":"style__button2___3QGUS","button3":"style__button3___1UDFh","title1":"style__title1___3cDQX","title2":"style__title2___m8Ozm","title4":"style__title4___3niwQ","title5":"style__title5___21xX0","title6":"style__title6___2KofO","title":"style__title___1d6P1","title3":"style__title3___2xYWi","title7":"style__title7___Vrojr","title8":"style__title8___23y-T","wrapper":"style__wrapper___TskVX"};

/***/ }),
/* 54 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___1Q73D","vCenter":"style__vCenter___3XNrH","vCenterRel":"style__vCenterRel___1YeFJ","hCenter":"style__hCenter___1mVF7","inheritHeight":"style__inheritHeight___23Hgw","hideOverflow":"style__hideOverflow___25XXq","icon-sprites":"style__icon-sprites___2Iyi8","title1":"style__title1___1LBCJ","title2":"style__title2___ww8Lf","title4":"style__title4___1hQD3","title5":"style__title5___3wxeQ","title6":"style__title6___1W4EN","title3":"style__title3___1rrjg","title7":"style__title7___2cEVO","title8":"style__title8___2jhdQ","paragraph1":"style__paragraph1___3dDFe","paragraph2":"style__paragraph2___1bVFj","paragraph3":"style__paragraph3___3RtTB","paragraph4":"style__paragraph4___2KvJl","paragraph5":"style__paragraph5___32RKi","wrapper":"style__wrapper___2hxyL"};

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	'use strict';

	/* eslint max-len: [2, 500, 4] */

	var data = {
	  block1: {
	    slides: [{
	      id: 4,
	      image: 'https://www.dropbox.com/s/dfy96d3kh8nmak4/Img_Banner-Slide1-Bed.jpg?dl=0',
	      title: '',
	      button_title: '',
	      button_url: '',
	      content: '',
	      block: 10
	    }, {
	      id: 5,
	      image: 'https://www.dropbox.com/s/18imc4gu553rhkp/Img_Banner-Slide2-Living.jpg?dl=0',
	      title: '',
	      button_title: '',
	      button_url: '',
	      content: '',
	      block: 10
	    }, {
	      id: 6,
	      image: 'https://www.dropbox.com/s/hezderezzwemkph/Img_Banner-Slide3-Dining.jpg?dl=0',
	      title: '',
	      button_title: '',
	      button_url: '',
	      content: '',
	      block: 10
	    }, {
	      id: 13,
	      image: 'https://www.dropbox.com/s/4nqqjh0rsr19k7m/Img_Banner-Slide4-Living.jpg?dl=0',
	      title: '',
	      button_title: '',
	      button_url: '',
	      content: '',
	      block: 10
	    }],
	    buttons: {
	      button1: { id: 7, href: '/contacto', title: 'CONTÁCTANOS', block: 10 }
	    },
	    paragraphs: {
	      paragraph1: 'Estilo contemporáneo, gama de colores neutros, textiles de alta calidad y\r\nmaderas como nogal, encino, roble\r\ny metales como cromo y acero inoxidable.'
	    },
	    titles: { title1: 'COLECCIÓN NOTABLE', title2: '2016' }
	  },
	  block2: {
	    images: {
	      image1: {
	        id: 8,
	        src: '/images/productos-detalles.jpg',
	        alt: 'el poder de los detalles',
	        block: 11
	      }
	    },
	    paragraphs: {
	      paragraph1: 'Cada una de nuestras piezas la fabricamos prestando especial atención a cada uno de los detalles constructivos que la conforman, desde la selección de materiales\r\nde la más alta calidad, hasta el ensamblaje y acabados finos.'
	    },
	    titles: { title1: 'EL PODER DE LOS DETALLES' }
	  },
	  block3: {
	    slides: [{
	      id: 7,
	      image: 'https://www.dropbox.com/s/h8rdgjwnz4626h3/Img-Product-Luso-Living.jpg?dl=0',
	      title: 'Luso',
	      button_title: 'CONTÁCTANOS',
	      button_url: '/contacto',
	      content: 'En esta sección mostramos las piezas más recientes y destacadas de la temporada, conoce a detalle nuestras colecciones descargando nuestro catálogo completo.',
	      block: 12
	    }, {
	      id: 8,
	      image: 'https://www.dropbox.com/s/5903ethr5kwthvf/Img-Product-Leira-Living.jpg?dl=0',
	      title: 'Leia',
	      button_title: 'CONTÁCTANOS',
	      button_url: '/contacto',
	      content: 'En esta sección mostramos las piezas más recientes y destacadas de la temporada, conoce a detalle nuestras colecciones descargando nuestro catálogo completo.',
	      block: 12
	    }, {
	      id: 17,
	      image: 'https://www.dropbox.com/s/pnhbuc9wtq4hi1c/Img-Product-Maia-Living.jpg?dl=0',
	      title: 'Maia',
	      button_title: 'CONTÁCTANOS',
	      button_url: '/contacto',
	      content: 'En esta sección mostramos las piezas más recientes y destacadas de la temporada, conoce a detalle nuestras colecciones descargando nuestro catálogo completo.',
	      block: 12
	    }, {
	      id: 18,
	      image: 'https://www.dropbox.com/s/wqheyutctb2tagw/Img-Product-Ordes-Living.jpg?dl=0',
	      title: 'Ordes',
	      button_title: 'CONTÁCTANOS',
	      button_url: '/contacto',
	      content: 'En esta sección mostramos las piezas más recientes y destacadas de la temporada, conoce a detalle nuestras colecciones descargando nuestro catálogo completo.',
	      block: 12
	    }, {
	      id: 19,
	      image: 'https://www.dropbox.com/s/ff56ih695tsp1yb/Img-Product-Sintra-Living.jpg?dl=0',
	      title: 'Sintra',
	      button_title: 'CONTÁCTANOS',
	      button_url: '/contacto',
	      content: 'En esta sección mostramos las piezas más recientes y destacadas de la temporada, conoce a detalle nuestras colecciones descargando nuestro catálogo completo.',
	      block: 12
	    }, {
	      id: 20,
	      image: 'https://www.dropbox.com/s/1od69hkreqn54h9/Img-Product-Alassio-Living.jpg?dl=0',
	      title: 'Alessio',
	      button_title: 'CONTÁCTANOS',
	      button_url: '/contacto',
	      content: 'En esta sección mostramos las piezas más recientes y destacadas de la temporada, conoce a detalle nuestras colecciones descargando nuestro catálogo completo.',
	      block: 12
	    }, {
	      id: 21,
	      image: 'https://www.dropbox.com/s/1od69hkreqn54h9/Img-Product-Alassio-Living.jpg?dl=0',
	      title: 'Alessio',
	      button_title: 'CONTÁCTANOS',
	      button_url: '/contacto',
	      content: 'En esta sección mostramos las piezas más recientes y destacadas de la temporada, conoce a detalle nuestras colecciones descargando nuestro catálogo completo.',
	      block: 12
	    }, {
	      id: 22,
	      image: 'https://www.dropbox.com/s/wiwtwsa05bcutiy/Img-Product-Almeira-Living.jpg?dl=0',
	      title: 'Almeira',
	      button_title: 'CONTÁCTANOS',
	      button_url: '/contacto',
	      content: 'En esta sección mostramos las piezas más recientes y destacadas de la temporada, conoce a detalle nuestras colecciones descargando nuestro catálogo completo.',
	      block: 12
	    }, {
	      id: 23,
	      image: 'https://www.dropbox.com/s/hpcdvn83y7ev9ci/Img-Product-Braga-Living.jpg?dl=0',
	      title: 'Braga',
	      button_title: 'CONTÁCTANOS',
	      button_url: '/contacto',
	      content: 'En esta sección mostramos las piezas más recientes y destacadas de la temporada, conoce a detalle nuestras colecciones descargando nuestro catálogo completo.',
	      block: 12
	    }, {
	      id: 24,
	      image: 'https://www.dropbox.com/s/kardqjls2r1dq41/Img-Product-Breto-Living.jpg?dl=0',
	      title: 'Breto',
	      button_title: 'CONTÁCTANOS',
	      button_url: '/contacto',
	      content: 'En esta sección mostramos las piezas más recientes y destacadas de la temporada, conoce a detalle nuestras colecciones descargando nuestro catálogo completo.',
	      block: 12
	    }, {
	      id: 25,
	      image: 'https://www.dropbox.com/s/3u60rv1kiypk1wz/Img-Product-Brion-Livng.jpg?dl=0',
	      title: 'Brion',
	      button_title: 'CONTÁCTANOS',
	      button_url: '/contacto',
	      content: 'En esta sección mostramos las piezas más recientes y destacadas de la temporada, conoce a detalle nuestras colecciones descargando nuestro catálogo completo.',
	      block: 12
	    }, {
	      id: 26,
	      image: 'https://www.dropbox.com/s/wn5y7ovpwfv74ja/Img-Product-Jean-Living.jpg?dl=0',
	      title: 'Brion',
	      button_title: 'CONTÁCTANOS',
	      button_url: '/contacto',
	      content: 'En esta sección mostramos las piezas más recientes y destacadas de la temporada, conoce a detalle nuestras colecciones descargando nuestro catálogo completo.',
	      block: 12
	    }],
	    titles: { title1: 'LIVINGROOM' }
	  },
	  block4: {
	    slides: [{
	      id: 9,
	      image: 'https://www.dropbox.com/s/bzvxjpbcwnqz00l/Img-Product-Lyon-Dining.jpg?dl=0',
	      title: 'Lyon',
	      button_title: 'CONTÁCTANOS',
	      button_url: '/contacto',
	      content: 'En esta sección mostramos las piezas más recientes y destacadas de la temporada, conoce a detalle nuestras colecciones descargando nuestro catálogo completo.',
	      block: 13
	    }, {
	      id: 10,
	      image: 'https://www.dropbox.com/s/6w2nov6b70cl35m/Img-Product-Pavia-Dining.jpg?dl=0',
	      title: 'Pavia',
	      button_title: 'CONTÁCTANOS',
	      button_url: '/contacto',
	      content: 'En esta sección mostramos las piezas más recientes y destacadas de la temporada, conoce a detalle nuestras colecciones descargando nuestro catálogo completo.',
	      block: 13
	    }, {
	      id: 27,
	      image: 'https://www.dropbox.com/s/w9vfp61q2ovy2es/Img-Product-Arezzo-Dining.jpg?dl=0',
	      title: 'Arezzo',
	      button_title: 'CONTÁCTANOS',
	      button_url: '/contacto',
	      content: 'En esta sección mostramos las piezas más recientes y destacadas de la temporada, conoce a detalle nuestras colecciones descargando nuestro catálogo completo.',
	      block: 13
	    }, {
	      id: 28,
	      image: 'https://www.dropbox.com/s/s6u5qfptx7vc05z/Img-Product-Concorde-Dining.jpg?dl=0',
	      title: 'Concorde',
	      button_title: 'CONTÁCTANOS',
	      button_url: '/contacto',
	      content: 'En esta sección mostramos las piezas más recientes y destacadas de la temporada, conoce a detalle nuestras colecciones descargando nuestro catálogo completo.',
	      block: 13
	    }, {
	      id: 29,
	      image: 'https://www.dropbox.com/s/3m3v9m8ky9osuct/Img-Product-Coria-Dining.jpg?dl=0',
	      title: 'Coria',
	      button_title: 'CONTÁCTANOS',
	      button_url: '/contacto',
	      content: 'En esta sección mostramos las piezas más recientes y destacadas de la temporada, conoce a detalle nuestras colecciones descargando nuestro catálogo completo.',
	      block: 13
	    }, {
	      id: 30,
	      image: 'https://www.dropbox.com/s/g634anah5opdcgo/Img-Product-Girona-Dining.jpg?dl=0',
	      title: 'Girona',
	      button_title: 'CONTÁCTANOS',
	      button_url: '/contacto',
	      content: 'En esta sección mostramos las piezas más recientes y destacadas de la temporada, conoce a detalle nuestras colecciones descargando nuestro catálogo completo.',
	      block: 13
	    }],
	    titles: { title1: 'DINING' }
	  },
	  block5: {
	    slides: [{
	      id: 11,
	      image: 'https://www.dropbox.com/s/9lmn4nhi2r2refg/Img-Product-Lugo2-Bedroom.jpg?dl=0',
	      title: 'Lugo',
	      button_title: 'CONTÁCTANOS',
	      button_url: '/contacto',
	      content: 'En esta sección mostramos las piezas más recientes y destacadas de la temporada, conoce a detalle nuestras colecciones descargando nuestro catálogo completo.',
	      block: 14
	    }, {
	      id: 12,
	      image: 'https://www.dropbox.com/s/jar6kozp8qhej8c/Img-Product-Lugo-Bedroom.jpg?dl=0',
	      title: 'Lugo',
	      button_title: 'CONTÁCTANOS',
	      button_url: '/contacto',
	      content: 'En esta sección mostramos las piezas más recientes y destacadas de la temporada, conoce a detalle nuestras colecciones descargando nuestro catálogo completo.',
	      block: 14
	    }, {
	      id: 31,
	      image: 'https://www.dropbox.com/s/hfedbebbl5awdbq/Img-Product-Mantua-Bedroom.jpg?dl=0',
	      title: 'Mantua',
	      button_title: 'CONTÁCTANOS',
	      button_url: '/contacto',
	      content: 'En esta sección mostramos las piezas más recientes y destacadas de la temporada, conoce a detalle nuestras colecciones descargando nuestro catálogo completo.',
	      block: 14
	    }, {
	      id: 32,
	      image: 'https://www.dropbox.com/s/zoxa2x1d7d81r8a/Img-Product-Novara-Bedroom.jpg?dl=0',
	      title: 'Novara',
	      button_title: 'CONTÁCTANOS',
	      button_url: '/contacto',
	      content: 'En esta sección mostramos las piezas más recientes y destacadas de la temporada, conoce a detalle nuestras colecciones descargando nuestro catálogo completo.',
	      block: 14
	    }, {
	      id: 33,
	      image: 'https://www.dropbox.com/s/8zxmb2y7yhp7m23/Img-Product-Palermo-Bedroom.jpg?dl=0',
	      title: 'Palermo',
	      button_title: 'CONTÁCTANOS',
	      button_url: '/contacto',
	      content: 'En esta sección mostramos las piezas más recientes y destacadas de la temporada, conoce a detalle nuestras colecciones descargando nuestro catálogo completo.',
	      block: 14
	    }, {
	      id: 34,
	      image: 'https://www.dropbox.com/s/05c9c3onz1j32no/Img-Product-Siena-Bedroom.jpg?dl=0',
	      title: 'Siena',
	      button_title: 'CONTÁCTANOS',
	      button_url: '/contacto',
	      content: 'En esta sección mostramos las piezas más recientes y destacadas de la temporada, conoce a detalle nuestras colecciones descargando nuestro catálogo completo.',
	      block: 14
	    }, {
	      id: 35,
	      image: 'https://www.dropbox.com/s/8xao0pkbsqwse4x/Img-Product-Varzi-Bedroom.jpg?dl=0',
	      title: 'Varzi',
	      button_title: 'CONTÁCTANOS',
	      button_url: '/contacto',
	      content: 'En esta sección mostramos las piezas más recientes y destacadas de la temporada, conoce a detalle nuestras colecciones descargando nuestro catálogo completo.',
	      block: 14
	    }, {
	      id: 36,
	      image: 'https://www.dropbox.com/s/3vo71s2knhyr2en/Img-Product-Corval-Bedroom.jpg?dl=0',
	      title: 'Corval',
	      button_title: 'CONTÁCTANOS',
	      button_url: '/contacto',
	      content: 'En esta sección mostramos las piezas más recientes y destacadas de la temporada, conoce a detalle nuestras colecciones descargando nuestro catálogo completo.',
	      block: 14
	    }, {
	      id: 37,
	      image: 'https://www.dropbox.com/s/jclgjd9ginfxwl1/Img-Product-Cassino-Bedroom.jpg?dl=0',
	      title: 'Cassino',
	      button_title: 'CONTÁCTANOS',
	      button_url: '/contacto',
	      content: 'En esta sección mostramos las piezas más recientes y destacadas de la temporada, conoce a detalle nuestras colecciones descargando nuestro catálogo completo.',
	      block: 14
	    }, {
	      id: 38,
	      image: 'https://www.dropbox.com/s/za0wpwe0o9uy2dr/Img-Product-Finisterra-Bedroom.jpg?dl=0',
	      title: 'Finisterra',
	      button_title: 'CONTÁCTANOS',
	      button_url: '/contacto',
	      content: 'En esta sección mostramos las piezas más recientes y destacadas de la temporada, conoce a detalle nuestras colecciones descargando nuestro catálogo completo.',
	      block: 14
	    }],
	    titles: { title1: 'BEDROOM' }
	  },
	  block6: {
	    slides: [{
	      id: 39,
	      image: 'https://www.dropbox.com/s/xbkhv7rj3t4lpec/Img-ShowroomSlider-1.jpg?dl=0',
	      title: 'SHOWROOM',
	      button_title: '',
	      button_url: '',
	      content: '',
	      block: 15
	    }, {
	      id: 40,
	      image: 'https://www.dropbox.com/s/sau8w65f2racser/Img-ShowroomSlider-2.jpg?dl=0',
	      title: 'SHOWROOM',
	      button_title: '',
	      button_url: '',
	      content: '',
	      block: 15
	    }, {
	      id: 41,
	      image: 'https://www.dropbox.com/s/8ltn0514lsqyckp/Img-ShowroomSlider-3.jpg?dl=0',
	      title: 'SHOWROOM',
	      button_title: '',
	      button_url: '',
	      content: '',
	      block: 15
	    }, {
	      id: 42,
	      image: 'https://www.dropbox.com/s/07qe88lxuh79x2q/Img-ShowroomSlider-4.jpg?dl=0',
	      title: 'SHOWROOM',
	      button_title: '',
	      button_url: '',
	      content: '',
	      block: 15
	    }],
	    buttons: {
	      button1: { id: 8, href: '/contacto', title: 'UBICACIÓN', block: 15 }
	    },
	    paragraphs: {
	      paragraph1: 'Visita nuestro showroom y conoce de cerca nuestros productos.'
	    },
	    titles: { title1: 'SHOWROOM' }
	  }
	};

	module.exports = data;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _block = __webpack_require__(39);

	var _block2 = _interopRequireDefault(_block);

	var _block3 = __webpack_require__(57);

	var _block4 = _interopRequireDefault(_block3);

	var _block5 = __webpack_require__(59);

	var _block6 = _interopRequireDefault(_block5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = __webpack_require__(61);
	var data = __webpack_require__(62);

	var ServicesSection = function (_React$Component) {
	  _inherits(ServicesSection, _React$Component);

	  function ServicesSection() {
	    _classCallCheck(this, ServicesSection);

	    return _possibleConstructorReturn(this, (ServicesSection.__proto__ || Object.getPrototypeOf(ServicesSection)).apply(this, arguments));
	  }

	  _createClass(ServicesSection, [{
	    key: 'render',
	    value: function render() {
	      var block1 = data.block1,
	          block2 = data.block2,
	          block3 = data.block3;

	      var block1classes = 'col-xs-12 col-sm-6 col-sm-offset-3';
	      var classes = {
	        svg: style.svg,
	        col1: 'col-xs-12 col-sm-5 ',
	        col2: 'col-xs-12 col-sm-7 '
	      };
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_block2.default, { data: block1, classes: block1classes }),
	        _react2.default.createElement(_block4.default, { data: block2, classes: classes }),
	        _react2.default.createElement(_block6.default, { data: block3 })
	      );
	    }
	  }]);

	  return ServicesSection;
	}(_react2.default.Component);

	exports.default = ServicesSection;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	var _lodash = __webpack_require__(26);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _svg = __webpack_require__(17);

	var _svg2 = _interopRequireDefault(_svg);

	var _sanitize = __webpack_require__(33);

	var _sanitize2 = _interopRequireDefault(_sanitize);

	var _carousel = __webpack_require__(27);

	var _carousel2 = _interopRequireDefault(_carousel);

	var _setImageAsBackground = __webpack_require__(28);

	var _setImageAsBackground2 = _interopRequireDefault(_setImageAsBackground);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */


	var style = __webpack_require__(58);

	var Block2 = function (_React$Component) {
	  _inherits(Block2, _React$Component);

	  function Block2() {
	    _classCallCheck(this, Block2);

	    return _possibleConstructorReturn(this, (Block2.__proto__ || Object.getPrototypeOf(Block2)).apply(this, arguments));
	  }

	  _createClass(Block2, [{
	    key: 'renderItems',
	    value: function renderItems(data) {
	      if (_lodash2.default.isArray(data) && data.length) {
	        return data.map(function (item, index) {
	          var className = index === 0 ? 'active' : '';
	          var divStyle = (0, _setImageAsBackground2.default)(item.image);
	          return _react2.default.createElement('div', { className: 'item ' + className + ' ' + (style.item || ''), key: index, style: divStyle });
	        });
	      }
	      return null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props$data = this.props.data,
	          titles = _props$data.titles,
	          slides = _props$data.slides,
	          paragraphs = _props$data.paragraphs,
	          buttons = _props$data.buttons;

	      var classes = this.props.classes;
	      var carouselClasses = {
	        inner: style.inner,
	        controls: {
	          base: style.controls,
	          prev: style.prev,
	          next: style.next
	        }
	      };
	      return !_lodash2.default.isEmpty(this.props.data) ? _react2.default.createElement(
	        'div',
	        { className: style.commitment },
	        _react2.default.createElement(
	          'div',
	          { className: 'container-fluid ' + style.wrapper },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: classes.col1 },
	              _react2.default.createElement(_svg2.default, { network: 'circled_brand', className: style.svg + ' ' + classes.svg }),
	              _react2.default.createElement(
	                'h2',
	                { className: style.title7 },
	                titles.title1
	              ),
	              _react2.default.createElement('p', { className: style.paragraph2, dangerouslySetInnerHTML: (0, _sanitize2.default)(paragraphs.paragraph1) }),
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { className: style.button1, to: buttons.button1.href },
	                buttons.button1.title
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: classes.col2 },
	              _react2.default.createElement(
	                _carousel2.default,
	                { id: 'carousel-services-block2', interval: 8000, indicators: false, classes: carouselClasses },
	                this.renderItems(slides)
	              )
	            )
	          )
	        )
	      ) : null;
	    }
	  }]);

	  return Block2;
	}(_react2.default.Component);

	exports.default = Block2;


	Block2.propTypes = {
	  data: _react2.default.PropTypes.object,
	  classes: _react2.default.PropTypes.object
	};

/***/ }),
/* 58 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___k1HWT","controls":"style__controls____N_dT","vCenter":"style__vCenter___1hLuS","vCenterRel":"style__vCenterRel___3DEM_","hCenter":"style__hCenter___3ebKg","inheritHeight":"style__inheritHeight___w-Ei1","hideOverflow":"style__hideOverflow____BJoV","icon-sprites":"style__icon-sprites___Kttgj","wrapper1":"style__wrapper1___3jDji","wrapper2":"style__wrapper2___2GHch","sideSwipe":"style__sideSwipe___2b3Q6","button1":"style__button1___2a8IJ","button2":"style__button2___GRQjv","button3":"style__button3___2M-rR","title1":"style__title1___1xM8z","title2":"style__title2___LF5TQ","title4":"style__title4___1PaT5","title5":"style__title5___1sE5Y","title6":"style__title6___2wgMr","title3":"style__title3___3Sprm","title7":"style__title7___36iEP","title8":"style__title8___3W-Za","image1":"style__image1___3rI5j","image":"style__image___3SkN_","paragraph1":"style__paragraph1___2nD_z","paragraph2":"style__paragraph2___1cWGF","paragraph3":"style__paragraph3___z4eur","paragraph4":"style__paragraph4___1lG91","paragraph5":"style__paragraph5___M9YhS","commitment":"style__commitment___YvNZZ","svg":"style__svg___1ct8P","item":"style__item___20ywg"};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _lodash = __webpack_require__(26);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _svg = __webpack_require__(17);

	var _svg2 = _interopRequireDefault(_svg);

	var _sanitize = __webpack_require__(33);

	var _sanitize2 = _interopRequireDefault(_sanitize);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */


	var style = __webpack_require__(60);

	var Block3 = function (_React$Component) {
	  _inherits(Block3, _React$Component);

	  function Block3() {
	    _classCallCheck(this, Block3);

	    return _possibleConstructorReturn(this, (Block3.__proto__ || Object.getPrototypeOf(Block3)).apply(this, arguments));
	  }

	  _createClass(Block3, [{
	    key: 'render',
	    value: function render() {
	      var _props$data = this.props.data,
	          titles = _props$data.titles,
	          paragraphs = _props$data.paragraphs;

	      return !_lodash2.default.isEmpty(this.props.data) ? _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'container-fluid' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-12 col-xs-12' },
	              _react2.default.createElement(
	                'h2',
	                { className: style.title },
	                titles.title1
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-3 col-xs-12' },
	              _react2.default.createElement(_svg2.default, { network: 'servicios_entrevista', className: style.svg }),
	              _react2.default.createElement(
	                'h3',
	                { className: style.subtitle },
	                titles.title2
	              ),
	              _react2.default.createElement('p', { className: style.paragraph, dangerouslySetInnerHTML: (0, _sanitize2.default)(paragraphs.paragraph1) })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-3 col-xs-12' },
	              _react2.default.createElement(_svg2.default, { network: 'servicios_conceptualizacion', className: style.svg }),
	              _react2.default.createElement(
	                'h3',
	                { className: style.subtitle },
	                titles.title3
	              ),
	              _react2.default.createElement('p', { className: style.paragraph, dangerouslySetInnerHTML: (0, _sanitize2.default)(paragraphs.paragraph2) })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-3 col-xs-12' },
	              _react2.default.createElement(_svg2.default, { network: 'servicios_proyecto', className: style.svg }),
	              _react2.default.createElement(
	                'h3',
	                { className: style.subtitle },
	                titles.title4
	              ),
	              _react2.default.createElement('p', { className: style.paragraph, dangerouslySetInnerHTML: (0, _sanitize2.default)(paragraphs.paragraph3) })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-3 col-xs-12' },
	              _react2.default.createElement(_svg2.default, { network: 'servicios_ejecucion', className: style.svg }),
	              _react2.default.createElement(
	                'h3',
	                { className: style.subtitle },
	                titles.title5
	              ),
	              _react2.default.createElement('p', { className: style.paragraph, dangerouslySetInnerHTML: (0, _sanitize2.default)(paragraphs.paragraph4) })
	            )
	          )
	        )
	      ) : null;
	    }
	  }]);

	  return Block3;
	}(_react2.default.Component);

	exports.default = Block3;


	Block3.propTypes = {
	  data: _react2.default.PropTypes.object
	};

/***/ }),
/* 60 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___3oQI6","vCenter":"style__vCenter___oZn6y","vCenterRel":"style__vCenterRel___1q8U5","hCenter":"style__hCenter___3-mPZ","inheritHeight":"style__inheritHeight___1pvpY","hideOverflow":"style__hideOverflow___1wBei","icon-sprites":"style__icon-sprites___3VAjS","image1":"style__image1___2YDfQ","paragraph1":"style__paragraph1___wwuTz","paragraph2":"style__paragraph2___1wqDF","paragraph":"style__paragraph___OBox-","paragraph3":"style__paragraph3___1FdtX","paragraph4":"style__paragraph4___2OZAv","paragraph5":"style__paragraph5___1TG0A","sideSwipe":"style__sideSwipe___2R1ie","button1":"style__button1___2I4ug","button2":"style__button2___35m1v","button3":"style__button3___2Yf9W","title1":"style__title1___2rKvl","title2":"style__title2___1KnQH","title4":"style__title4___1JbOI","title5":"style__title5___2lYZQ","title":"style__title___2N5Bv","title6":"style__title6___31YeL","title3":"style__title3___2OcWE","title7":"style__title7___2ByrJ","title8":"style__title8___2K7RZ","subtitle":"style__subtitle___24FM7","svg":"style__svg___opN4I"};

/***/ }),
/* 61 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___3XSK8","vCenter":"style__vCenter___etdmJ","vCenterRel":"style__vCenterRel___3Tmte","hCenter":"style__hCenter___1nwKY","inheritHeight":"style__inheritHeight___1CRTZ","hideOverflow":"style__hideOverflow___1cMav","icon-sprites":"style__icon-sprites___2cJKM","wrapper":"style__wrapper___1XWvz","svg":"style__svg___1dmhH"};

/***/ }),
/* 62 */
/***/ (function(module, exports) {

	'use strict';

	/* eslint max-len: [2, 500, 4] */

	var data = {
	  block1: {
	    images: {
	      image1: {
	        id: 10,
	        src: 'https://www.dropbox.com/s/dahx5rf9zj2vb0q/Img_Banner-Interiores.jpg?dl=0',
	        alt: 'DISEÑO DE INTERIORES',
	        block: 16
	      }
	    },
	    paragraphs: {
	      paragraph1: 'Hacer realidad tus ideas para que puedas disfrutar durante años de la armonía que proporciona una buena decoración.'
	    },
	    titles: { title1: 'DISEÑO DE INTERIORES' }
	  },
	  block2: {
	    slides: [{
	      id: 14,
	      image: 'https://www.dropbox.com/s/s07jozoy2z62v5m/Img-Boceto-interiores2.jpg?dl=0',
	      title: '',
	      button_title: '',
	      button_url: '',
	      content: '',
	      block: 17
	    }, {
	      id: 15,
	      image: 'https://www.dropbox.com/s/mujzm1vjlixyyhn/Img-Boceto-interiores3.jpg?dl=0',
	      title: '',
	      button_title: '',
	      button_url: '',
	      content: '',
	      block: 17
	    }, {
	      id: 16,
	      image: 'https://www.dropbox.com/s/f5lxla7gldg1se2/Img-Boceto-interiores4.jpg?dl=0',
	      title: '',
	      button_title: '',
	      button_url: '',
	      content: '',
	      block: 17
	    }],
	    buttons: {
	      button1: { id: 9, href: '/contacto', title: 'CONTÁCTANOS', block: 17 }
	    },
	    paragraphs: {
	      paragraph1: 'En Notable ofrecemos el servicio de Diseño de Interiores que consiste en descubrir las necesidades de nuestro cliente y poder lograr crear espacios funcionales, cálidos, confortables y armoniosos.'
	    },
	    titles: { title1: 'DISEÑO CONTEMPORÁNEO' }
	  },
	  block3: {
	    paragraphs: {
	      paragraph1: 'Reunión en donde conocemos las necesidades y gusto del cliente, así como el espacio a trabajar.',
	      paragraph2: 'Primeras ideas, visualización de espacio, proponemos gama de colores, texturas, posibles piezas.',
	      paragraph3: 'Presentamos en proyecto para revisión. Planos arquitectónicos, visualización de espacios en 3D, muestras de acabados, selección de muebles, presupuesto de ejecución de proyecto.',
	      paragraph4: 'Coordinación del equipo Nota- ble para desarrollar el diseño proyectado.'
	    },
	    titles: {
	      title1: 'NUESTRO PROCESO',
	      title2: 'ENTREVISTA',
	      title3: 'CONCEPTUALIZACIÓN',
	      title4: 'PROYECTO',
	      title5: 'EJECUCIÓN'
	    }
	  }
	};

	module.exports = data;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _block = __webpack_require__(64);

	var _block2 = _interopRequireDefault(_block);

	var _block3 = __webpack_require__(66);

	var _block4 = _interopRequireDefault(_block3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var data = __webpack_require__(74);

	var ContactSection = function (_React$Component) {
	  _inherits(ContactSection, _React$Component);

	  function ContactSection() {
	    _classCallCheck(this, ContactSection);

	    return _possibleConstructorReturn(this, (ContactSection.__proto__ || Object.getPrototypeOf(ContactSection)).apply(this, arguments));
	  }

	  _createClass(ContactSection, [{
	    key: 'render',
	    value: function render() {
	      var block1 = data.block1,
	          block2 = data.block2;

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_block2.default, { data: block1 }),
	        _react2.default.createElement(_block4.default, { data: block2 })
	      );
	    }
	  }]);

	  return ContactSection;
	}(_react2.default.Component);

	exports.default = ContactSection;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _lodash = __webpack_require__(26);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */

	var style = __webpack_require__(65);

	var Block1 = function (_React$Component) {
	  _inherits(Block1, _React$Component);

	  function Block1() {
	    _classCallCheck(this, Block1);

	    return _possibleConstructorReturn(this, (Block1.__proto__ || Object.getPrototypeOf(Block1)).apply(this, arguments));
	  }

	  _createClass(Block1, [{
	    key: 'render',
	    value: function render() {
	      var _props$data = this.props.data,
	          images = _props$data.images,
	          buttons = _props$data.buttons;

	      var imgUrl = images && images.image1 && images.image1.src ? images.image1.src.replace('www.dropbox.com', 'dl.dropboxusercontent.com') : '/images/contacto_map.png';
	      return !_lodash2.default.isEmpty(this.props.data) ? _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement('img', { cassName: style.image, src: imgUrl, alt: images.image1.alt }),
	        _react2.default.createElement(
	          'a',
	          { className: style.button, href: buttons.button1.href, target: '_blank' },
	          buttons.button1.title
	        )
	      ) : null;
	    }
	  }]);

	  return Block1;
	}(_react2.default.Component);

	exports.default = Block1;


	Block1.propTypes = {
	  data: _react2.default.PropTypes.object
	};

/***/ }),
/* 65 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___3WsSe","vCenter":"style__vCenter___3G_X_","vCenterRel":"style__vCenterRel___2rlOE","hCenter":"style__hCenter___3ARcP","inheritHeight":"style__inheritHeight___1YsqB","hideOverflow":"style__hideOverflow___ps_Tr","icon-sprites":"style__icon-sprites___2f7vT","image1":"style__image1___1oYSl","paragraph1":"style__paragraph1___3JnQd","paragraph2":"style__paragraph2___3M3qm","paragraph3":"style__paragraph3___6lKhK","paragraph4":"style__paragraph4___1Z42s","paragraph5":"style__paragraph5___1v105","sideSwipe":"style__sideSwipe___50l2S","button1":"style__button1___1iQls","button":"style__button___6iE0P","button2":"style__button2___2nT5Y","button3":"style__button3___1WIju","title1":"style__title1___3f0o0","title2":"style__title2___XQgLg","title4":"style__title4___BpZsL","title5":"style__title5___hKWjC","title6":"style__title6___2GSXY","title3":"style__title3___2f5QU","title7":"style__title7___3_kU1","title8":"style__title8___2cLGW","image":"style__image___mSywh"};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _lodash = __webpack_require__(26);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _svg = __webpack_require__(17);

	var _svg2 = _interopRequireDefault(_svg);

	var _form = __webpack_require__(67);

	var _form2 = _interopRequireDefault(_form);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */


	var style = __webpack_require__(73);

	var Block2 = function (_React$Component) {
	  _inherits(Block2, _React$Component);

	  function Block2() {
	    _classCallCheck(this, Block2);

	    return _possibleConstructorReturn(this, (Block2.__proto__ || Object.getPrototypeOf(Block2)).apply(this, arguments));
	  }

	  _createClass(Block2, [{
	    key: 'render',
	    value: function render() {
	      var _props$data = this.props.data,
	          titles = _props$data.titles,
	          paragraphs = _props$data.paragraphs,
	          buttons = _props$data.buttons;

	      return !_lodash2.default.isEmpty(this.props.data) ? _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'container-fluid' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-6 col-xs-12' },
	              _react2.default.createElement(
	                'h2',
	                { className: style.title },
	                titles.title1,
	                _react2.default.createElement(_svg2.default, { network: 'location', className: style.svg })
	              ),
	              _react2.default.createElement(
	                'p',
	                { className: style.paragraph },
	                paragraphs.paragraph1
	              ),
	              _react2.default.createElement(
	                'p',
	                { className: style.paragraph },
	                paragraphs.paragraph2
	              ),
	              _react2.default.createElement(
	                'a',
	                { className: style.gmap, href: buttons.button1.href, target: '_blank' },
	                buttons.button1.title
	              ),
	              _react2.default.createElement(
	                'p',
	                { className: style.paragraph },
	                paragraphs.paragraph3
	              ),
	              _react2.default.createElement(
	                'p',
	                { className: style.paragraph },
	                paragraphs.paragraph4
	              ),
	              _react2.default.createElement(
	                'a',
	                { className: style.paragraph, href: buttons.button2.href, target: '_blank' },
	                buttons.button2.title
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-6 col-xs-12' },
	              _react2.default.createElement(
	                'h2',
	                { className: style.title },
	                titles.title2
	              ),
	              _react2.default.createElement(
	                'p',
	                { className: style.paragraph },
	                paragraphs.paragraph6
	              ),
	              _react2.default.createElement(_form2.default, null)
	            )
	          )
	        )
	      ) : null;
	    }
	  }]);

	  return Block2;
	}(_react2.default.Component);

	exports.default = Block2;


	Block2.propTypes = {
	  data: _react2.default.PropTypes.object
	};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _lodash = __webpack_require__(26);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _restClient = __webpack_require__(68);

	var _restClient2 = _interopRequireDefault(_restClient);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 600, 4] */

	var style = __webpack_require__(72);

	var Form1 = function (_React$Component) {
	  _inherits(Form1, _React$Component);

	  function Form1(props) {
	    _classCallCheck(this, Form1);

	    var _this2 = _possibleConstructorReturn(this, (Form1.__proto__ || Object.getPrototypeOf(Form1)).call(this, props));

	    _this2.state = {
	      formData: _this2.getInitialFormState(),
	      requiredFields: _this2.getRequiredFields(_this2.getInitialFormState()),
	      showLoading: false
	    };

	    _this2.submitFormHandler = _this2.submitFormHandler.bind(_this2);
	    _this2.onChangeHandler = _this2.onChangeHandler.bind(_this2);
	    return _this2;
	  }

	  _createClass(Form1, [{
	    key: 'onChangeHandler',
	    value: function onChangeHandler(event) {
	      var formData = this.state.formData;
	      var _event$target = event.target,
	          name = _event$target.name,
	          value = _event$target.value;

	      formData[name].value = value;
	      this.setState({ formData: formData });
	    }
	  }, {
	    key: 'getRequiredFields',
	    value: function getRequiredFields(data) {
	      var fields = {};
	      _lodash2.default.map(data, function (item, index) {
	        if (item.require) {
	          fields[index] = item;
	        }
	      });
	      return fields;
	    }
	  }, {
	    key: 'getInitialFormState',
	    value: function getInitialFormState() {
	      return {
	        name: {
	          title: 'Nombre',
	          value: '',
	          require: true
	        },
	        email: {
	          title: 'Correo',
	          value: '',
	          require: true
	        },
	        tel: {
	          title: 'Tel&eacute;fono',
	          value: '',
	          require: true
	        },
	        message: {
	          title: 'Mensaje',
	          value: '',
	          require: true
	        }
	      };
	    }
	  }, {
	    key: 'getHTMLMessage',
	    value: function getHTMLMessage(data) {
	      var response = _lodash2.default.map(data, function (item) {
	        return item.title + ': ' + item.value + '<br />';
	      });
	      return response.join('');
	    }
	  }, {
	    key: 'validateForm',
	    value: function validateForm(data, requiredFields) {
	      var response = true;
	      _lodash2.default.map(requiredFields, function (item, property) {
	        var labelElement = $('#lab_' + property);
	        if (!data.hasOwnProperty(property) || !data[property].value.length) {
	          if (response) {
	            response = false;
	          }
	          labelElement.addClass(style.errorCSSClass);
	        } else {
	          labelElement.removeClass(style.errorCSSClass);
	        }
	      });
	      return response;
	    }

	    /*
	    Handler function to validate form and send data
	    */

	  }, {
	    key: 'submitFormHandler',
	    value: function submitFormHandler(event) {
	      event.preventDefault();
	      var formData = this.state.formData;
	      var isFormValid = this.validateForm(formData, this.state.requiredFields);
	      var msgElement = $('#msg');
	      msgElement.removeClass(style.errorCSSClass + ' ' + style.successCSSClass);
	      msgElement.html('');

	      if (isFormValid) {
	        this.setState({
	          showLoading: true
	        });
	        msgElement.html('Enviando...');
	        var _this = this;
	        var html = this.getHTMLMessage(formData);
	        var data = {
	          fromname: formData.name.value,
	          replyto: formData.email.value,
	          subject: 'Forma de Contacto Website: NOTABLE',
	          html: html
	        };

	        (0, _restClient2.default)({
	          path: '/api/send_email',
	          method: 'POST',
	          entity: data
	        }).then(function (response) {
	          var state = {
	            showLoading: false
	          };
	          if (response.entity.status) {
	            state.formData = _this.getInitialFormState();
	          }
	          _this.setState(state);
	          msgElement.addClass(response.entity.status ? style.successCSSClass : style.errorCSSClass);
	          msgElement.html(response.entity.status ? 'Información enviada de manera exitosa, gracias.' : 'Lo sentimos, favor de intentar más tarde.');
	        });
	      } else {
	        msgElement.addClass(style.errorCSSClass);
	      }
	      msgElement.html(!isFormValid ? 'Favor de llenar los campos en rojo.' : '');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _state$formData = this.state.formData,
	          name = _state$formData.name,
	          email = _state$formData.email,
	          tel = _state$formData.tel,
	          message = _state$formData.message;


	      return _react2.default.createElement(
	        'form',
	        { id: 'form', className: style.form + ' form-horizontal' },
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group ' + style.formGroup },
	          _react2.default.createElement(
	            'label',
	            { id: 'lab_name', className: 'col-xs-2 control-label' },
	            'Nombre:'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-10' },
	            _react2.default.createElement('input', { type: 'text', name: 'name', onChange: this.onChangeHandler, value: name.value })
	          ),
	          _react2.default.createElement('div', { className: style.borderBottom2 })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group ' + style.formGroup },
	          _react2.default.createElement(
	            'label',
	            { id: 'lab_email', className: 'col-xs-2 control-label' },
	            'Correo:'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-10' },
	            _react2.default.createElement('input', { type: 'text', name: 'email', onChange: this.onChangeHandler, value: email.value })
	          ),
	          _react2.default.createElement('div', { className: style.borderBottom2 })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group ' + style.formGroup },
	          _react2.default.createElement(
	            'label',
	            { id: 'lab_tel', className: 'col-xs-2 control-label' },
	            'Tele\u0301fono:'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-10' },
	            _react2.default.createElement('input', { type: 'tel', name: 'tel', onChange: this.onChangeHandler, value: tel.value })
	          ),
	          _react2.default.createElement('div', { className: style.borderBottom2 })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group ' + style.formGroup },
	          _react2.default.createElement(
	            'label',
	            { id: 'lab_message', className: 'col-sm-12 control-label' },
	            'Mensaje:'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-sm-12 col-sm-offset-1' },
	            _react2.default.createElement('input', { type: 'text', name: 'message', onChange: this.onChangeHandler, value: message.value })
	          ),
	          _react2.default.createElement('div', { className: style.borderBottom2 })
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement('span', { id: 'msg' })
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          this.state.showLoading ? _react2.default.createElement(
	            'span',
	            { className: style.loader },
	            'Cargando'
	          ) : null
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'pull-right' },
	          _react2.default.createElement(
	            'a',
	            { className: style.submit, onClick: this.submitFormHandler },
	            'ENVIAR'
	          )
	        )
	      );
	    }
	  }]);

	  return Form1;
	}(_react2.default.Component);

	exports.default = Form1;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rest = __webpack_require__(69);

	var _rest2 = _interopRequireDefault(_rest);

	var _mime = __webpack_require__(70);

	var _mime2 = _interopRequireDefault(_mime);

	var _errorCode = __webpack_require__(71);

	var _errorCode2 = _interopRequireDefault(_errorCode);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _rest2.default.wrap(_mime2.default, { mime: 'application/json' }).wrap(_errorCode2.default, { code: 300 });

/***/ }),
/* 69 */
/***/ (function(module, exports) {

	module.exports = require("rest");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

	module.exports = require("rest/interceptor/mime");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

	module.exports = require("rest/interceptor/errorCode");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___365qk","vCenter":"style__vCenter___9LFiT","vCenterRel":"style__vCenterRel___27ebh","hCenter":"style__hCenter___3MSN5","inheritHeight":"style__inheritHeight___20X8j","hideOverflow":"style__hideOverflow___1e_Sa","icon-sprites":"style__icon-sprites___SBb6q","image1":"style__image1___20ULB","paragraph1":"style__paragraph1___1Iuas","paragraph2":"style__paragraph2___XLNUn","paragraph3":"style__paragraph3___cQhzG","paragraph4":"style__paragraph4___3o8-x","paragraph5":"style__paragraph5___-5J8a","sideSwipe":"style__sideSwipe___3Jh_M","button1":"style__button1___QW0Tv","submit":"style__submit___2YBRa","button2":"style__button2___3fzL1","button3":"style__button3___1LtgP","title1":"style__title1___2DL5-","title2":"style__title2___3etcM","title4":"style__title4___33kmt","title5":"style__title5___2k_sU","title6":"style__title6___1dv-o","title3":"style__title3___8tZ0C","title7":"style__title7___OUaen","title8":"style__title8___1LvKh","form":"style__form___1nnSk","formGroup":"style__formGroup___1VfYe"};

/***/ }),
/* 73 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___YPy8K","vCenter":"style__vCenter___32xVO","vCenterRel":"style__vCenterRel___29zgs","hCenter":"style__hCenter___2lorl","inheritHeight":"style__inheritHeight___VvRBI","hideOverflow":"style__hideOverflow___2GeSp","icon-sprites":"style__icon-sprites___3vhaB","image1":"style__image1___2KQtF","paragraph1":"style__paragraph1___21zOk","paragraph2":"style__paragraph2___1ISwm","paragraph3":"style__paragraph3___34fOz","paragraph4":"style__paragraph4___1tgYT","paragraph5":"style__paragraph5___BDRxV","paragraph":"style__paragraph___29758","sideSwipe":"style__sideSwipe___1IOUP","button1":"style__button1___1cwjy","button2":"style__button2___hQ_-V","button3":"style__button3___3HwaY","gmap":"style__gmap___1uAlR","title1":"style__title1___OAVsV","title2":"style__title2___3iVlU","title4":"style__title4___JohwZ","title5":"style__title5___3Apbg","title6":"style__title6___8Y1Ek","title":"style__title___31zi9","title3":"style__title3___173Gl","title7":"style__title7___5Kp7I","title8":"style__title8___3uCuH","svg":"style__svg___38pi8"};

/***/ }),
/* 74 */
/***/ (function(module, exports) {

	'use strict';

	/* eslint max-len: [2, 500, 4] */

	var data = {
	  block1: {
	    buttons: {
	      button1: {
	        id: 10,
	        href: 'https://www.google.com.mx/maps/place/Hip%C3%B3dromo+20,+Hipodromo,+Tijuana,+B.C./@32.5073837,-116.9998885,19z/data=!3m1!4b1!4m2!3m1!1s0x80d9481b72e700cf:0x68dbb7def8274e25?hl=en',
	        title: 'VER EN GOOGLE MAPS',
	        block: 19
	      }
	    },
	    images: {
	      image1: {
	        id: 12,
	        src: '/images/contacto_map.jpg',
	        alt: 'VER EN GOOGLE MAPS',
	        block: 19
	      }
	    }
	  },
	  block2: {
	    buttons: {
	      button1: {
	        id: 11,
	        href: 'https://www.google.com.mx/maps/place/Hip%C3%B3dromo+20,+Hipodromo,+Tijuana,+B.C./@32.5073837,-116.9998885,19z/data=!3m1!4b1!4m2!3m1!1s0x80d9481b72e700cf:0x68dbb7def8274e25?hl=en',
	        title: 'Ver en Google Maps',
	        block: 20
	      },
	      button2: {
	        id: 12,
	        href: 'https://www.facebook.com/notablemobiliario/',
	        title: 'F: /NotableMobiliario',
	        block: 20
	      }
	    },
	    paragraphs: {
	      paragraph1: 'Av Hipódromo 19-103, Colonia',
	      paragraph2: 'Hipódromo Tijuana BC, CP. 22420',
	      paragraph3: 'T: 664 681 8284',
	      paragraph4: 'C: 044 (664) 219 8158',
	      paragraph5: 'Para cualquier pregunta o comentario sobre nuestros productos y servicios por favor completa la siguiente forma:'
	    },
	    titles: { title1: 'INFORMACIÓN DE CONTACTO', title2: 'CONTÁCTANOS' }
	  }
	};

	module.exports = data;

/***/ })
/******/ ]);