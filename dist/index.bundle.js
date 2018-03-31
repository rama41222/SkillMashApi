/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config/constants.js":
/*!*********************************!*\
  !*** ./src/config/constants.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n/*\n * Created by Rama41222 on 3/31/18 2:29 AM\n * Copyright(c) 2018  All rights reserved\n * Last Modified: 3/31/18 2:25 AM by  Rama41222\n */\n\nvar devConfig = {\n    MONGO_URL: 'mongodb://localhost/skillmash-dev',\n    JWT_SECRET: 'df#$EFDT$^$%&*(YUHGFYR^THF%$ETRFDfdrt56t5$N3cRH`',\n    FACEBOOK_SECRET: 'dd7cd71543ee3887b0a92aa3307e3e7c'\n};\n\nvar prodConfig = {\n    MONGO_URL: 'mongodb://localhost/skillmash-prod',\n    JWT_SECRET: 't_!`pz=u-`byQ+)v:+^N3cRH`',\n    FACEBOOK_SECRET: 'dd7cd71543ee3887b0a92aa3307e3e7c'\n};\n\nvar defaultConfig = {\n    port: process.env.port || 3410,\n    version: 'API v1.0.0'\n};\n\nfunction getConfig(env) {\n    switch (env) {\n        case 'development':\n            return devConfig;\n        case 'production':\n            return prodConfig;\n        default:\n            return devConfig;\n    }\n}\n\nexports.default = _extends({}, defaultConfig, getConfig(\"development\"));\n\n//# sourceURL=webpack:///./src/config/constants.js?");

/***/ }),

/***/ "./src/config/database.js":
/*!********************************!*\
  !*** ./src/config/database.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/*\n * Created by Rama41222 on 3/31/18 2:39 AM\n * Copyright(c) 2018  All rights reserved\n * Last Modified: 3/31/18 2:25 AM by  Rama41222\n */\n\n_mongoose2.default.Promise = global.Promise;\n\n_mongoose2.default.connect(_constants2.default.MONGO_URL).then(console.log('\\n                Connected to mongodb @ ' + _constants2.default.MONGO_URL + '\\n    ')).catch(function (e) {\n    console.log('\\n               Error occured when connecting to ' + _constants2.default.MONGO_URL + '\\n               ERROR: ' + e.message + '\\n    ');\n});\n\n//# sourceURL=webpack:///./src/config/database.js?");

/***/ }),

/***/ "./src/config/middleware.js":
/*!**********************************!*\
  !*** ./src/config/middleware.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _morgan = __webpack_require__(/*! morgan */ \"morgan\");\n\nvar _morgan2 = _interopRequireDefault(_morgan);\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _helmet = __webpack_require__(/*! helmet */ \"helmet\");\n\nvar _helmet2 = _interopRequireDefault(_helmet);\n\nvar _compression = __webpack_require__(/*! compression */ \"compression\");\n\nvar _compression2 = _interopRequireDefault(_compression);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/*\n * Created by Rama41222 on 3/31/18 2:40 AM\n * Copyright(c) 2018  All rights reserved\n * Last Modified: 3/31/18 2:25 AM by  Rama41222\n */\n\nvar isProd = \"development\" === 'production';\nvar isDev = \"development\" === 'development';\n\nexports.default = function (app) {\n\n    app.use((0, _cors2.default)());\n    app.use(_bodyParser2.default.json());\n    app.use(_bodyParser2.default.urlencoded({ extended: true }));\n\n    if (isDev) {\n        app.use((0, _morgan2.default)('dev'));\n    }\n\n    if (isProd) {\n        app.use((0, _compression2.default)());\n        app.use((0, _helmet2.default)());\n    }\n    app.use(_passport2.default.initialize());\n};\n\n//# sourceURL=webpack:///./src/config/middleware.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _middleware = __webpack_require__(/*! ./config/middleware */ \"./src/config/middleware.js\");\n\nvar _middleware2 = _interopRequireDefault(_middleware);\n\nvar _index = __webpack_require__(/*! ./modules/index.routes */ \"./src/modules/index.routes.js\");\n\nvar _index2 = _interopRequireDefault(_index);\n\n__webpack_require__(/*! ./config/database */ \"./src/config/database.js\");\n\nvar _constants = __webpack_require__(/*! ./config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)(); /*\n                                     * Created by Rama41222 on 3/31/18 2:24 AM\n                                     * Copyright(c) 2018  All rights reserved\n                                     * Last Modified: 3/31/18 2:23 AM by  Rama41222\n                                     */\n\n(0, _middleware2.default)(app);\n(0, _index2.default)(app);\n\napp.listen(_constants2.default.port, function (e) {\n    if (e) {\n        console.log(e.message);\n        return;\n    }\n    console.log('\\n                 SKILLMASH IS RUNNING ON PORT ' + _constants2.default.port + '\\n    ');\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/index.routes.js":
/*!*************************************!*\
  !*** ./src/modules/index.routes.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _user = __webpack_require__(/*! ./users/user.routes */ \"./src/modules/users/user.routes.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _httpStatus = __webpack_require__(/*! http-status */ \"http-status\");\n\nvar _httpStatus2 = _interopRequireDefault(_httpStatus);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/*\n * Created by Rama41222 on 3/31/18 2:41 AM\n * Copyright(c) 2018  All rights reserved\n * Last Modified: 3/31/18 2:26 AM by  Rama41222\n */\n\nexports.default = function (app) {\n  app.use('/api/v1/users', _user2.default);\n  app.get('/', function (req, res) {\n    return res.status(_httpStatus2.default.OK).send({ hello: \"SKILLMASH\" });\n  });\n};\n\n//# sourceURL=webpack:///./src/modules/index.routes.js?");

/***/ }),

/***/ "./src/modules/users/user.controller.js":
/*!**********************************************!*\
  !*** ./src/modules/users/user.controller.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.getAllUserRating = exports.rateSkill = exports.createSkills = exports.getSkills = exports.profile = undefined;\n\nvar profile = exports.profile = function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n        var authToken;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n            while (1) {\n                switch (_context.prev = _context.next) {\n                    case 0:\n                        try {\n                            authToken = 'bearer ' + req.user.createToken();\n\n                            res.set('token', authToken);\n                            res.status(_httpStatus2.default.OK).json(req.user.toJSON());\n                        } catch (e) {\n                            console.log(e.message);\n                            res.status(_httpStatus2.default.BAD_REQUEST).send();\n                        }\n\n                    case 1:\n                    case 'end':\n                        return _context.stop();\n                }\n            }\n        }, _callee, this);\n    }));\n\n    return function profile(_x, _x2) {\n        return _ref.apply(this, arguments);\n    };\n}();\n\nvar getSkills = exports.getSkills = function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {\n        var token, decoded, uuid, user, skills;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n            while (1) {\n                switch (_context2.prev = _context2.next) {\n                    case 0:\n                        _context2.prev = 0;\n                        token = req.headers.authorization.split(' ')[1];\n                        _context2.next = 4;\n                        return _jsonwebtoken2.default.verify(token, _constants2.default.JWT_SECRET);\n\n                    case 4:\n                        decoded = _context2.sent;\n                        uuid = req.params.id || null;\n\n                        if (uuid) {\n                            _context2.next = 8;\n                            break;\n                        }\n\n                        return _context2.abrupt('return', res.status(_httpStatus2.default.UNAUTHORIZED).send());\n\n                    case 8:\n                        _context2.next = 10;\n                        return _user2.default.findById(uuid).select('skills').populate('skills');\n\n                    case 10:\n                        user = _context2.sent;\n\n                        if (user) {\n                            _context2.next = 13;\n                            break;\n                        }\n\n                        return _context2.abrupt('return', res.status(_httpStatus2.default.NO_CONTENT).send());\n\n                    case 13:\n                        _context2.next = 15;\n                        return user.toJSONSkills();\n\n                    case 15:\n                        skills = _context2.sent;\n\n\n                        res.status(_httpStatus2.default.OK).json(skills);\n                        _context2.next = 22;\n                        break;\n\n                    case 19:\n                        _context2.prev = 19;\n                        _context2.t0 = _context2['catch'](0);\n\n                        res.status(_httpStatus2.default.BAD_REQUEST).send();\n\n                    case 22:\n                    case 'end':\n                        return _context2.stop();\n                }\n            }\n        }, _callee2, this, [[0, 19]]);\n    }));\n\n    return function getSkills(_x3, _x4) {\n        return _ref2.apply(this, arguments);\n    };\n}();\n\nvar createSkills = exports.createSkills = function () {\n    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {\n        var token, decoded, uuid, newSkill, user, skillArray, newSkillSet, newSkillArray, newUser;\n        return regeneratorRuntime.wrap(function _callee3$(_context3) {\n            while (1) {\n                switch (_context3.prev = _context3.next) {\n                    case 0:\n                        _context3.prev = 0;\n                        token = req.headers.authorization.split(' ')[1];\n                        _context3.next = 4;\n                        return _jsonwebtoken2.default.verify(token, _constants2.default.JWT_SECRET);\n\n                    case 4:\n                        decoded = _context3.sent;\n                        uuid = req.params.id || null;\n\n                        if (!(!uuid || uuid !== decoded._id)) {\n                            _context3.next = 8;\n                            break;\n                        }\n\n                        return _context3.abrupt('return', res.status(_httpStatus2.default.UNAUTHORIZED).send());\n\n                    case 8:\n                        newSkill = req.body.skill;\n                        _context3.next = 11;\n                        return _user2.default.findById(decoded._id);\n\n                    case 11:\n                        user = _context3.sent;\n                        skillArray = user.skills;\n                        newSkillSet = {\n                            skill: newSkill\n                        };\n\n\n                        newSkillSet = [newSkillSet];\n\n                        skillArray.push(newSkillSet);\n                        newSkillArray = _lodash2.default.unionBy(newSkillSet, skillArray, 'skill');\n                        _context3.next = 19;\n                        return _user2.default.findByIdAndUpdate(user._id, { skills: newSkillArray });\n\n                    case 19:\n                        newUser = _context3.sent;\n\n                        if (newUser) {\n                            _context3.next = 22;\n                            break;\n                        }\n\n                        return _context3.abrupt('return', res.status(_httpStatus2.default.NO_CONTENT).send());\n\n                    case 22:\n\n                        res.status(_httpStatus2.default.OK).send();\n                        _context3.next = 29;\n                        break;\n\n                    case 25:\n                        _context3.prev = 25;\n                        _context3.t0 = _context3['catch'](0);\n\n                        console.log(_context3.t0.message);\n                        res.status(_httpStatus2.default.BAD_REQUEST).send();\n\n                    case 29:\n                    case 'end':\n                        return _context3.stop();\n                }\n            }\n        }, _callee3, this, [[0, 25]]);\n    }));\n\n    return function createSkills(_x5, _x6) {\n        return _ref3.apply(this, arguments);\n    };\n}();\n\nvar rateSkill = exports.rateSkill = function () {\n    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {\n        var token, decoded, newRating, sid, uuid, user, skillArray, skill, newSkillArray, newUser;\n        return regeneratorRuntime.wrap(function _callee4$(_context4) {\n            while (1) {\n                switch (_context4.prev = _context4.next) {\n                    case 0:\n                        _context4.prev = 0;\n                        token = req.headers.authorization.split(' ')[1];\n                        _context4.next = 4;\n                        return _jsonwebtoken2.default.verify(token, _constants2.default.JWT_SECRET);\n\n                    case 4:\n                        decoded = _context4.sent;\n                        newRating = req.body.rating;\n                        sid = req.params.sid;\n                        uuid = req.params.id || null;\n\n                        if (uuid) {\n                            _context4.next = 10;\n                            break;\n                        }\n\n                        return _context4.abrupt('return', res.status(_httpStatus2.default.UNAUTHORIZED).send());\n\n                    case 10:\n                        _context4.next = 12;\n                        return _user2.default.findById(uuid);\n\n                    case 12:\n                        user = _context4.sent;\n                        skillArray = user.skills;\n\n                        console.log(skillArray);\n\n                        _context4.next = 17;\n                        return _lodash2.default.find(skillArray, function (o) {\n                            console.log(o);\n                            console.log('sid ' + sid + ' === > ' + o._id);\n                            return o._id == sid;\n                        });\n\n                    case 17:\n                        skill = _context4.sent;\n\n\n                        skill.rating.push(newRating);\n                        skill = [skill];\n\n                        newSkillArray = _lodash2.default.unionBy(skill, skillArray, 'skill');\n\n                        console.log(newSkillArray);\n\n                        _context4.next = 24;\n                        return _user2.default.findByIdAndUpdate(user._id, { skills: newSkillArray });\n\n                    case 24:\n                        newUser = _context4.sent;\n\n                        if (user) {\n                            _context4.next = 27;\n                            break;\n                        }\n\n                        return _context4.abrupt('return', res.status(_httpStatus2.default.NO_CONTENT).send());\n\n                    case 27:\n\n                        res.status(_httpStatus2.default.OK).send();\n                        _context4.next = 34;\n                        break;\n\n                    case 30:\n                        _context4.prev = 30;\n                        _context4.t0 = _context4['catch'](0);\n\n                        console.log(_context4.t0.message);\n                        res.status(_httpStatus2.default.BAD_REQUEST).send();\n\n                    case 34:\n                    case 'end':\n                        return _context4.stop();\n                }\n            }\n        }, _callee4, this, [[0, 30]]);\n    }));\n\n    return function rateSkill(_x7, _x8) {\n        return _ref4.apply(this, arguments);\n    };\n}();\n\nvar getAllUserRating = exports.getAllUserRating = function () {\n    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {\n        var token, decoded, users, modUsers, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, user, featuredskill;\n\n        return regeneratorRuntime.wrap(function _callee5$(_context5) {\n            while (1) {\n                switch (_context5.prev = _context5.next) {\n                    case 0:\n                        _context5.prev = 0;\n                        token = req.headers.authorization.split(' ')[1];\n                        _context5.next = 4;\n                        return _jsonwebtoken2.default.verify(token, _constants2.default.JWT_SECRET);\n\n                    case 4:\n                        decoded = _context5.sent;\n                        _context5.next = 7;\n                        return _user2.default.find().select({ token: 0, email: 0 }).limit(50);\n\n                    case 7:\n                        users = _context5.sent;\n                        modUsers = [];\n                        _iteratorNormalCompletion = true;\n                        _didIteratorError = false;\n                        _iteratorError = undefined;\n                        _context5.prev = 12;\n\n                        for (_iterator = users[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n                            user = _step.value;\n                            featuredskill = user.skills[_lodash2.default.random(0, user.skills.length - 1)];\n\n                            user.skills = featuredskill;\n                            modUsers.push(user);\n                        }\n                        _context5.next = 20;\n                        break;\n\n                    case 16:\n                        _context5.prev = 16;\n                        _context5.t0 = _context5['catch'](12);\n                        _didIteratorError = true;\n                        _iteratorError = _context5.t0;\n\n                    case 20:\n                        _context5.prev = 20;\n                        _context5.prev = 21;\n\n                        if (!_iteratorNormalCompletion && _iterator.return) {\n                            _iterator.return();\n                        }\n\n                    case 23:\n                        _context5.prev = 23;\n\n                        if (!_didIteratorError) {\n                            _context5.next = 26;\n                            break;\n                        }\n\n                        throw _iteratorError;\n\n                    case 26:\n                        return _context5.finish(23);\n\n                    case 27:\n                        return _context5.finish(20);\n\n                    case 28:\n                        res.status(_httpStatus2.default.OK).send(modUsers);\n                        _context5.next = 35;\n                        break;\n\n                    case 31:\n                        _context5.prev = 31;\n                        _context5.t1 = _context5['catch'](0);\n\n                        console.log(_context5.t1.message);\n                        res.status(_httpStatus2.default.BAD_REQUEST).send();\n\n                    case 35:\n                    case 'end':\n                        return _context5.stop();\n                }\n            }\n        }, _callee5, this, [[0, 31], [12, 16, 20, 28], [21,, 23, 27]]);\n    }));\n\n    return function getAllUserRating(_x9, _x10) {\n        return _ref5.apply(this, arguments);\n    };\n}();\n\nexports.fbLogin = fbLogin;\n\nvar _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nvar _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _httpStatus = __webpack_require__(/*! http-status */ \"http-status\");\n\nvar _httpStatus2 = _interopRequireDefault(_httpStatus);\n\nvar _constants = __webpack_require__(/*! ./../../config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nvar _user = __webpack_require__(/*! ./user.model */ \"./src/modules/users/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; } /*\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Created by Rama41222 on 3/31/18 2:50 AM\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Copyright(c) 2018  All rights reserved\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Last Modified: 2/19/18 2:36 PM by  Rama41222\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */\n\nfunction fbLogin(req, res, next) {\n    var authToken = 'bearer ' + req.user.createToken();\n    res.set('token', authToken);\n    res.status(_httpStatus2.default.OK).json(req.user.toJSON());\n    return next();\n}\n\n//# sourceURL=webpack:///./src/modules/users/user.controller.js?");

/***/ }),

/***/ "./src/modules/users/user.model.js":
/*!*****************************************!*\
  !*** ./src/modules/users/user.model.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nvar _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);\n\nvar _constants = __webpack_require__(/*! ../../config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/*\n * Created by Rama41222 on 3/31/18 2:44 AM\n * Copyright(c) 2018  All rights reserved\n * Last Modified: 2/16/18 5:40 PM by  Rama41222\n */\n\nvar UserSchema = new _mongoose.Schema({\n\n    facebookId: {\n        type: String,\n        trim: true,\n        required: true,\n        index: { unique: true }\n    },\n    avatar: {\n        type: String,\n        default: null\n    },\n    name: {\n        type: String,\n        required: true,\n        trim: true\n    },\n    email: {\n        type: String,\n        required: true,\n        trim: true\n    },\n    skills: [{\n        skill: { type: String, default: \"Default\" },\n        rating: [{ type: Number, default: 0 }]\n    }],\n    friends: [{\n        type: String,\n        ref: 'User'\n    }],\n    block: {\n        type: Boolean,\n        default: false\n    }\n}, { timestamps: true });\n\nUserSchema.methods = {\n    createToken: function createToken() {\n        return _jsonwebtoken2.default.sign({\n            _id: this._id,\n            facebookId: this.facebookId\n        }, _constants2.default.JWT_SECRET);\n    },\n    toJSON: function toJSON() {\n        return {\n            _id: this._id,\n            name: this.name,\n            avatar: this.avatar,\n            email: this.email,\n            skills: this.skills,\n            friends: this.friends\n        };\n    },\n    toJSONSkills: function toJSONSkills() {\n        return {\n            skills: _lodash2.default.toArray(this.skills)\n        };\n    },\n    toJSONImportant: function toJSONImportant() {\n        return {\n            _id: this._id,\n            name: this.name,\n            avatar: this.avatar,\n            skills: this.skills\n        };\n    }\n};\n\nUserSchema.statics = {\n    list: function list() {\n        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n            _ref$skip = _ref.skip,\n            skip = _ref$skip === undefined ? 0 : _ref$skip,\n            _ref$limit = _ref.limit,\n            limit = _ref$limit === undefined ? 50 : _ref$limit;\n\n        return this.find().sort({ createdAt: -1 }).skip(+skip).limit(+limit).exec();\n    },\n    listBlocked: function listBlocked() {\n        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n            _ref2$skip = _ref2.skip,\n            skip = _ref2$skip === undefined ? 0 : _ref2$skip,\n            _ref2$limit = _ref2.limit,\n            limit = _ref2$limit === undefined ? 50 : _ref2$limit;\n\n        return this.find({ block: true }).sort({ createdAt: -1 }).skip(+skip).limit(+limit).exec();\n    }\n};\n\nexports.default = _mongoose2.default.model('User', UserSchema);\n\n//# sourceURL=webpack:///./src/modules/users/user.model.js?");

/***/ }),

/***/ "./src/modules/users/user.routes.js":
/*!******************************************!*\
  !*** ./src/modules/users/user.routes.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _expressValidation = __webpack_require__(/*! express-validation */ \"express-validation\");\n\nvar _expressValidation2 = _interopRequireDefault(_expressValidation);\n\nvar _user = __webpack_require__(/*! ./user.validation */ \"./src/modules/users/user.validation.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _user3 = __webpack_require__(/*! ./user.controller */ \"./src/modules/users/user.controller.js\");\n\nvar UserController = _interopRequireWildcard(_user3);\n\nvar _auth = __webpack_require__(/*! ../../services/auth.service */ \"./src/services/auth.service.js\");\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = (0, _express.Router)();\n\n//users OK\n/*\n * Created by Rama41222 on 3/31/18 2:50 AM\n * Copyright(c) 2018  All rights reserved\n * Last Modified: 2/16/18 5:50 PM by  Rama41222\n */\nrouter.post('/auth/facebook', _auth.authFB, UserController.fbLogin);\n\n//get user profile OK\nrouter.get('/:id', _auth.authJwt, UserController.profile);\n\n//skills\n\n//get user skills OK\nrouter.get('/:id/skills', _auth.authJwt, UserController.getSkills);\n\n//create a skill OK\nrouter.post('/:id/skills', [_auth.authJwt, (0, _expressValidation2.default)(_user2.default.skills)], UserController.createSkills);\n\n//rate skills OK\nrouter.post('/:id/skills/:sid', [_auth.authJwt, (0, _expressValidation2.default)(_user2.default.rating)], UserController.rateSkill);\n\n//get all users and skills\nrouter.get('/', _auth.authJwt, UserController.getAllUserRating);\n\n// //get all users with aggregated rating skill\n// router.get('/skills',authJwt , UserController.getRatingAll)\n\n//remove a skill\n// router.delete('/:id/skills/:sid',authJwt , UserController.removeSkills)\n\n\n// //friends\n//\n// //get all my friends\n// router.get('/:id/friends',authJwt , UserController.getSkills)\n//\n// //get my friends profile\n// router.get('/:id/friends/:fid',authJwt , UserController.getSkills)\n//\n// //remove user as a friend\n// router.delete('/:id/friends/:fid',authJwt , UserController.getSkills)\n//\n//\n// ////get my friends skills\n// router.get('/:id/friends/:fid/skills',authJwt , UserController.getSkills)\n//\n// ////rate my friends skills\n// router.post('/:id/friends/:fid/skills/:sid',[ authJwt, validation(UserValidation.skills) ] , UserController.createSkills)\n//\n// //users\n//\n\n// //add user as a friend\n// router.post('/:uid',authJwt , UserController.getSkills)\n\n\nexports.default = router;\n\n//# sourceURL=webpack:///./src/modules/users/user.routes.js?");

/***/ }),

/***/ "./src/modules/users/user.validation.js":
/*!**********************************************!*\
  !*** ./src/modules/users/user.validation.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _joi = __webpack_require__(/*! joi */ \"joi\");\n\nvar _joi2 = _interopRequireDefault(_joi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n\n    skills: {\n        body: {\n            skill: _joi2.default.string().required()\n        }\n    },\n    rating: {\n        body: {\n            rating: _joi2.default.number().min(0).max(5).required()\n        }\n    }\n\n}; /*\n    * Created by Rama41222 on 3/31/18 2:53 AM\n    * Copyright(c) 2018  All rights reserved\n    * Last Modified: 2/16/18 4:58 PM by  Rama41222\n    */\n\n//# sourceURL=webpack:///./src/modules/users/user.validation.js?");

/***/ }),

/***/ "./src/services/auth.service.js":
/*!**************************************!*\
  !*** ./src/services/auth.service.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.authFB = exports.authJwt = undefined;\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _passportJwt = __webpack_require__(/*! passport-jwt */ \"passport-jwt\");\n\nvar _passportFacebookToken = __webpack_require__(/*! passport-facebook-token */ \"passport-facebook-token\");\n\nvar _passportFacebookToken2 = _interopRequireDefault(_passportFacebookToken);\n\nvar _user = __webpack_require__(/*! ../modules/users/user.model */ \"./src/modules/users/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _constants = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; } /*\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Created by Rama41222 on 3/31/18 2:41 AM\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Copyright(c) 2018  All rights reserved\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Last Modified: 3/31/18 2:41 AM by  Rama41222\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */\n\n// JWT Strategy\nvar jwtOpts = {\n    jwtFromRequest: _passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken('Authorization'),\n    secretOrKey: _constants2.default.JWT_SECRET\n};\n\nvar jwtStrategy = new _passportJwt.Strategy(jwtOpts, function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(payload, done) {\n        var user;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n            while (1) {\n                switch (_context.prev = _context.next) {\n                    case 0:\n                        console.log(payload);\n                        _context.prev = 1;\n                        _context.next = 4;\n                        return _user2.default.findById(payload._id);\n\n                    case 4:\n                        user = _context.sent;\n\n                        if (user) {\n                            _context.next = 7;\n                            break;\n                        }\n\n                        return _context.abrupt('return', done(null, false));\n\n                    case 7:\n                        return _context.abrupt('return', done(null, user));\n\n                    case 10:\n                        _context.prev = 10;\n                        _context.t0 = _context['catch'](1);\n\n                        console.log(_context.t0.message);\n                        return _context.abrupt('return', done(_context.t0, false));\n\n                    case 14:\n                    case 'end':\n                        return _context.stop();\n                }\n            }\n        }, _callee, undefined, [[1, 10]]);\n    }));\n\n    return function (_x, _x2) {\n        return _ref.apply(this, arguments);\n    };\n}());\n\n//facebook Strategy\n\nvar fbOpts = {\n    clientID: \"775429522651949\",\n    clientSecret: _constants2.default.FACEBOOK_SECRET,\n    profileFields: [\"id\", \"birthday\", \"email\", \"first_name\", \"gender\", \"last_name\", \"profileUrl\", \"picture.width(200).height(200)\"]\n};\n\nvar facebookStrategy = new _passportFacebookToken2.default(fbOpts, function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(accessToken, refreshToken, profile, done) {\n        var profJson, name, pic, imgData, id, img, email, user, updateUser, updateDUser, newUser, userNew;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n            while (1) {\n                switch (_context2.prev = _context2.next) {\n                    case 0:\n                        _context2.prev = 0;\n                        profJson = profile._json;\n                        name = profJson.first_name + \" \" + profJson.last_name;\n                        pic = profJson.picture;\n                        imgData = pic.data;\n                        id = profile.id;\n                        img = imgData.url;\n                        email = profJson.email;\n                        _context2.next = 10;\n                        return _user2.default.findOne({ facebookId: id });\n\n                    case 10:\n                        user = _context2.sent;\n\n                        console.log(user);\n\n                        if (!user) {\n                            _context2.next = 20;\n                            break;\n                        }\n\n                        updateUser = {\n                            name: name,\n                            avatar: img\n                        };\n                        _context2.next = 16;\n                        return _user2.default.findByIdAndUpdate(user._id, updateUser);\n\n                    case 16:\n                        updateDUser = _context2.sent;\n                        return _context2.abrupt('return', done(null, updateDUser));\n\n                    case 20:\n\n                        console.log(\"--------->> \");\n                        newUser = new _user2.default({\n                            name: name,\n                            facebookId: id,\n                            avatar: img,\n                            email: email\n                        });\n                        _context2.prev = 22;\n                        _context2.next = 25;\n                        return _user2.default.create(newUser);\n\n                    case 25:\n                        userNew = _context2.sent;\n\n                        done(null, userNew);\n                        _context2.next = 32;\n                        break;\n\n                    case 29:\n                        _context2.prev = 29;\n                        _context2.t0 = _context2['catch'](22);\n                        return _context2.abrupt('return', done(_context2.t0, false));\n\n                    case 32:\n                        _context2.next = 38;\n                        break;\n\n                    case 34:\n                        _context2.prev = 34;\n                        _context2.t1 = _context2['catch'](0);\n\n                        console.log(_context2.t1.message);\n                        return _context2.abrupt('return', done(_context2.t1, false));\n\n                    case 38:\n                    case 'end':\n                        return _context2.stop();\n                }\n            }\n        }, _callee2, undefined, [[0, 34], [22, 29]]);\n    }));\n\n    return function (_x3, _x4, _x5, _x6) {\n        return _ref2.apply(this, arguments);\n    };\n}());\n\n_passport2.default.use(jwtStrategy);\n_passport2.default.use(facebookStrategy);\n\nvar authJwt = exports.authJwt = _passport2.default.authenticate('jwt', { session: false });\nvar authFB = exports.authFB = _passport2.default.authenticate('facebook-token', { session: false });\n\n//# sourceURL=webpack:///./src/services/auth.service.js?");

/***/ }),

/***/ 0:
/*!*******************************************!*\
  !*** multi babel-polyfill ./src/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! babel-polyfill */\"babel-polyfill\");\nmodule.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_babel-polyfill_./src/index.js?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-validation":
/*!*************************************!*\
  !*** external "express-validation" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-validation\");\n\n//# sourceURL=webpack:///external_%22express-validation%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "http-status":
/*!******************************!*\
  !*** external "http-status" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http-status\");\n\n//# sourceURL=webpack:///external_%22http-status%22?");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"joi\");\n\n//# sourceURL=webpack:///external_%22joi%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-facebook-token":
/*!******************************************!*\
  !*** external "passport-facebook-token" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-facebook-token\");\n\n//# sourceURL=webpack:///external_%22passport-facebook-token%22?");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-jwt\");\n\n//# sourceURL=webpack:///external_%22passport-jwt%22?");

/***/ })

/******/ });