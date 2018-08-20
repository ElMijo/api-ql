(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _server = __webpack_require__(/*! ./server */ "./src/server/index.js");

Object.keys(_server).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _server[key];
    }
  });
});

var _schema = __webpack_require__(/*! ./schema */ "./src/schema/index.js");

Object.keys(_schema).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _schema[key];
    }
  });
});

/***/ }),

/***/ "./src/schema/index.js":
/*!*****************************!*\
  !*** ./src/schema/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Schema = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _graphqlTools = __webpack_require__(/*! graphql-tools */ "graphql-tools");

const defaultTypeDefs = `
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;

const defaultResolvers = { Query: { hello: () => "world" } };

class Schema {
    constructor({ typeDefs = [], resolvers = {} }) {
        this.typeDefs = typeDefs;
        this.resolvers = typeDefs;
    }

    make() {
        const hasSchema = !!this.typeDefs.length;
        return (0, _graphqlTools.makeExecutableSchema)({
            typeDefs: hasSchema ? this.typeDefs : [defaultTypeDefs],
            resolvers: hasSchema ? this.resolvers : defaultResolvers
        });
    }

    addTypeDef(typeDef) {
        if (typeof typeDef !== 'string') {
            throw new Error("[Schema::addTypeDef] typeDef should an String");
        }

        this.typeDefs.push(typeDef);
        return this;
    }

    addResolver(resolver) {
        if (!resolver instanceof Object) {
            throw new Error("[Schema::addResolver] resolver should an Object");
        }

        this.resolvers = _extends({}, this.resolvers, resolver);
        return this;
    }
}
exports.Schema = Schema;

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Server = undefined;

var _url = __webpack_require__(/*! url */ "url");

var _http = __webpack_require__(/*! http */ "http");

var _http2 = _interopRequireDefault(_http);

var _express = __webpack_require__(/*! express */ "express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = __webpack_require__(/*! body-parser */ "body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _graphqlServerExpress = __webpack_require__(/*! graphql-server-express */ "graphql-server-express");

var _graphqlTools = __webpack_require__(/*! graphql-tools */ "graphql-tools");

var _schema = __webpack_require__(/*! ../schema */ "./src/schema/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Server {
    constructor({
        endpoint = "/graphql",
        graphiql = "/graphiql",
        schema
    }) {
        if (!(schema instanceof _schema.Schema)) {
            schema = new _schema.Schema({});
        }

        this.app = (0, _express2.default)();
        this.server = _http2.default.createServer(this.app);
        this.app.use(endpoint, _bodyParser2.default.json(), (0, _graphqlServerExpress.graphqlExpress)({ schema: schema.make() }));
        this.app.use(graphiql, (0, _graphqlServerExpress.graphiqlExpress)({ endpointURL: endpoint }));
    }

    getApp() {
        return this.app;
    }
    start(port = 3000, host = "localhost") {
        const url = new _url.URL(`${host}:${port}`);
        this.server.listen(port, host, () => {
            console.log(`🚀 Server ready at ${url}`);
        });
    }

    stop() {
        this.server.close(() => {
            console.log("🛑 The server was stopped");
        });
    }
}
exports.Server = Server;

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "graphql-server-express":
/*!*****************************************!*\
  !*** external "graphql-server-express" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-server-express");

/***/ }),

/***/ "graphql-tools":
/*!********************************!*\
  !*** external "graphql-tools" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tools");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ })));
//# sourceMappingURL=index.js.map