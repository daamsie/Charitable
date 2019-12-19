/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/charitable-blocks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./src/blocks/campaign-progress-bar/block.js":
/*!***************************************************!*\
  !*** ./src/blocks/campaign-progress-bar/block.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_campaign_select_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../components/campaign-select/index.js */ "./src/components/campaign-select/index.js");
/* harmony import */ var _settings_editor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settings-editor.js */ "./src/blocks/campaign-progress-bar/settings-editor.js");
/* harmony import */ var _progress_bar_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./progress-bar.js */ "./src/blocks/campaign-progress-bar/progress-bar.js");
/* harmony import */ var _inspector_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./inspector.js */ "./src/blocks/campaign-progress-bar/inspector.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/blockEditor */ "@wordpress/blockEditor");
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_13__);








/**
 * Block dependencies
 */




/**
 * WordPress dependencies
 */






var CharitableCampaignProgressBarBlock =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(CharitableCampaignProgressBarBlock, _Component);

  function CharitableCampaignProgressBarBlock() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CharitableCampaignProgressBarBlock);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(CharitableCampaignProgressBarBlock).apply(this, arguments));
    _this.state = {
      edit_mode: false,
      amount_raised: null,
      ready: false
    };
    _this.updateGoal = _this.updateGoal.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.updateCampaignId = _this.updateCampaignId.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.updateEditMode = _this.updateEditMode.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.getInspectorControls = _this.getInspectorControls.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.getToolbarControls = _this.getToolbarControls.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.getSettingsEditor = _this.getSettingsEditor.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.getPreview = _this.getPreview.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }
  /**
  * Fetch the first 100 campaigns into memory, for faster search.
  *
  * We also record how many campaigns there are, in case there are more than 100.
  */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CharitableCampaignProgressBarBlock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var is_campaign = 'campaign' === wp.data.select('core/editor').getCurrentPostType();

      if (is_campaign) {
        this.updateGoal(wp.data.select('core/editor').getEditedPostAttribute('goal'));
        this.updateCampaignId(wp.data.select('core/editor').getCurrentPostId());
        this.updateAmountRaised(wp.data.select('core/editor').getCurrentPost().donated_amount);
      } else {}

      this.setState({
        ready: true
      });
    }
    /**
     * Update basic attributes.
     */

  }, {
    key: "updateGoal",
    value: function updateGoal(goal) {
      this.props.setAttributes({
        goal: goal
      });
    }
    /**
     * Update basic attributes.
     */

  }, {
    key: "updateCampaignId",
    value: function updateCampaignId(campaignId) {
      this.props.setAttributes({
        campaignId: campaignId
      });
    }
    /**
     * Update the amount raised.
     */

  }, {
    key: "updateAmountRaised",
    value: function updateAmountRaised(amount) {
      this.setState({
        amount_raised: amount
      });
    }
    /**
    * Update edit mode in state.
    */

  }, {
    key: "updateEditMode",
    value: function updateEditMode() {
      this.setState({
        edit_mode: !this.state.edit_mode
      });
    }
    /**
    * Get the components for the sidebar settings area that is rendered while focused on a Donation Form block.
    *
    * @return Component
    */

  }, {
    key: "getInspectorControls",
    value: function getInspectorControls() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_inspector_js__WEBPACK_IMPORTED_MODULE_10__["Inspector"], this.props);
    }
    /**
    * Get the components for the toolbar area that appears on top of the block when focused.
    *
    * @return Component
    */

  }, {
    key: "getToolbarControls",
    value: function getToolbarControls() {
      var editButton = [{
        icon: 'edit',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('Edit Goal', 'charitable'),
        onClick: this.updateEditMode,
        isActive: this.state.edit_mode
      }];
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_13__["BlockControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["Toolbar"], {
        controls: editButton
      }));
    }
    /**
     * Get the block settings editor UI.
     *
     * @return Component
     */

  }, {
    key: "getSettingsEditor",
    value: function getSettingsEditor() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_settings_editor_js__WEBPACK_IMPORTED_MODULE_8__["SettingsEditor"], this.props);
    }
    /**
     * Get the block preview.
     *
     * @return Component
     */

  }, {
    key: "getPreview",
    value: function getPreview() {
      var showProgressBar = this.props.attributes.showProgressBar;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, showProgressBar && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_progress_bar_js__WEBPACK_IMPORTED_MODULE_9__["ProgressBar"], this.props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("a", {
        href: "#",
        className: "button"
      }, "Donate"));
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.ready) {
        return null;
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, this.getInspectorControls(), this.getToolbarControls(), this.getPreview());
    }
  }]);

  return CharitableCampaignProgressBarBlock;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CharitableCampaignProgressBarBlock);

/***/ }),

/***/ "./src/blocks/campaign-progress-bar/icon.js":
/*!**************************************************!*\
  !*** ./src/blocks/campaign-progress-bar/icon.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

// const icon = <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20">
//     <path d="M18.9,1.1V18.9H1.1V1.1H18.9M20,0H0V20H20V0Z"/>
//     <rect width="20" height="9"/>
//     <rect x="3" y="11" width="11" height="2"/>
//     <rect x="3" y="15" width="14" height="2"/>
// </svg>;
var icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  version: "1.1",
  id: "Layer_1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "20px",
  height: "20px",
  viewBox: "0 0 20 20"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M11.717,9.315c-0.582-1.569-0.764-3.073-0.558-4.046l-6.863,5.835c-0.103,0.087-0.14,0.231-0.093,0.358l0.207,0.559h0l0,0 l6.696-2.485c0.001,0.001,0.001,0.003,0.002,0.004c0.857,2.309,2.522,3.848,3.821,3.589c-0.018,0.001-0.037,0.003-0.056,0.003 C13.893,13.141,12.543,11.54,11.717,9.315z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M10,14.45c0.005,0,0.009,0,0.014,0c0.612,0,1.116-0.431,1.223-1.01L8.76,13.436C8.857,14.032,9.376,14.45,10,14.45z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M14.232,8.377c-0.203-0.548-0.813-0.828-1.361-0.624l0.737,1.986C14.156,9.535,14.435,8.926,14.232,8.377z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M10,0C4.477,0,0,4.477,0,10s4.477,10,10,10c5.523,0,10-4.477,10-10S15.523,0,10,0z M15.278,13.403 c-0.124,0.041-0.253,0.041-0.383,0.041l-2.889-0.004c-0.081,1.024-0.935,1.744-1.984,1.756c-0.007,0-0.015,0-0.022,0 c-1.056,0-1.927-0.723-2.007-1.761l-3.068-0.004c-0.451,0.003-0.859-0.222-1.016-0.645l-0.207-0.501v0l-0.207-0.559 c-0.157-0.423-0.031-0.903,0.312-1.196l7.59-6.454c0.1-0.085,0.339-0.197,0.339-0.197c0.629-0.233,1.391,0.096,2.147,0.928 c0.677,0.745,1.3,1.829,1.754,3.054c0.454,1.224,0.69,2.442,0.663,3.448C16.269,12.433,15.907,13.169,15.278,13.403z"
}));
/* harmony default export */ __webpack_exports__["default"] = (icon);

/***/ }),

/***/ "./src/blocks/campaign-progress-bar/index.js":
/*!***************************************************!*\
  !*** ./src/blocks/campaign-progress-bar/index.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "./src/blocks/campaign-progress-bar/icon.js");
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block */ "./src/blocks/campaign-progress-bar/block.js");


/**
 * Block dependencies
 */


/**
 * Internal block libraries
 */

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
/**
 * Register block
 */

registerBlockType('charitable/campaign-progress-bar', {
  title: __('Campaign Progress Bar'),
  category: 'widgets',
  icon: _icon__WEBPACK_IMPORTED_MODULE_1__["default"],
  keywords: [__('Fundraisers'), __('Charitable'), __('Donation')],
  attributes: {
    showProgressBar: {
      type: 'boolean',
      default: false
    },
    colour: {
      type: 'string',
      default: '#f8e9fd'
    },
    height: {
      type: 'number',
      default: 30
    },
    isCampaign: {
      type: 'boolean',
      default: false
    }
  },
  edit: function edit(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block__WEBPACK_IMPORTED_MODULE_2__["default"], props);
  },
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/blocks/campaign-progress-bar/inspector.js":
/*!*******************************************************!*\
  !*** ./src/blocks/campaign-progress-bar/inspector.js ***!
  \*******************************************************/
/*! exports provided: Inspector, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inspector", function() { return Inspector; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_campaign_select_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../components/campaign-select/index.js */ "./src/components/campaign-select/index.js");
/* harmony import */ var _settings_editor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings-editor.js */ "./src/blocks/campaign-progress-bar/settings-editor.js");
/* harmony import */ var _progress_bar_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./progress-bar.js */ "./src/blocks/campaign-progress-bar/progress-bar.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__);







/**
 * Block dependencies
 */




/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$components = wp.components,
    Toolbar = _wp$components.Toolbar,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    RangeControl = _wp$components.RangeControl,
    ColorPicker = _wp$components.ColorPicker;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    BlockControls = _wp$blockEditor.BlockControls;
var Inspector =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Inspector, _Component);

  function Inspector() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Inspector);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Inspector).apply(this, arguments));
  }
  /**
  * Get the components for the sidebar settings area that is rendered while focused on a Donation Form block.
  *
  * @return Component
  */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Inspector, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes,
          isSelected = _this$props.isSelected;
      var colour = attributes.colour,
          height = attributes.height,
          showProgressBar = attributes.showProgressBar;

      if (!isSelected) {
        return null;
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(InspectorControls, {
        key: "campaign-progress-bar-inspector",
        description: __('Configure', 'charitable')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        title: __('Progress Bar', 'charitable')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["ToggleControl"], {
        label: __('Show progress bar', 'charitable'),
        checked: showProgressBar,
        onChange: function onChange(checked) {
          return setAttributes({
            showProgressBar: checked
          });
        }
      }), showProgressBar && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPicker, {
        label: __('Tracker Colour', 'charitable'),
        color: colour,
        onChangeComplete: function onChangeComplete(value) {
          return setAttributes({
            colour: value.hex
          });
        },
        disableAlpha: true
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        label: __('Progress Bar Height', 'charitable'),
        onChange: function onChange(value) {
          return setAttributes({
            height: value
          });
        },
        min: 10,
        max: 200,
        value: height
      }))));
    }
  }]);

  return Inspector;
}(Component);
/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/blocks/campaign-progress-bar/progress-bar.js":
/*!**********************************************************!*\
  !*** ./src/blocks/campaign-progress-bar/progress-bar.js ***!
  \**********************************************************/
/*! exports provided: ProgressBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBar", function() { return ProgressBar; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies
 */




var ProgressBarBase = function ProgressBarBase(props) {
  var attributes = props.attributes,
      donated = props.donated,
      goal = props.goal;
  var height = attributes.height,
      colour = attributes.colour;

  if (0 === goal) {
    return null;
  }

  var progress = 100 * (donated / goal);
  var bar_style = {
    height: height + 'px'
  };
  var tracker_style = {
    width: progress + '%',
    backgroundColor: colour
  };

  var formatMoney = function formatMoney(amount) {
    return accounting.formatMoney(amount, {
      decimal: CHARITABLE_BLOCK_VARS.currency_format_decimal_sep,
      thousand: CHARITABLE_BLOCK_VARS.currency_format_thousand_sep,
      precision: CHARITABLE_BLOCK_VARS.currency_format_num_decimals,
      format: CHARITABLE_BLOCK_VARS.currency_format
    });
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "charitable-campaign-progress-bar"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "charitable-campaign-progress-bar-amount-raised"
  }, formatMoney(donated)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "charitable-campaign-progress-bar-goal"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Goal: %s'), formatMoney(goal))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "campaign-progress-bar",
    role: "progressbar",
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    "aria-valuenow": progress,
    style: bar_style
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "campaign-progress-bar-tracker",
    style: tracker_style
  })));
};

var ProgressBar = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["withSelect"])(function (select) {
  return {
    goal: select('core/editor').getEditedPostAttribute('goal'),
    donated: select('core/editor').getCurrentPost().donated_amount
  };
})(ProgressBarBase);

/***/ }),

/***/ "./src/blocks/campaign-progress-bar/settings-editor.js":
/*!*************************************************************!*\
  !*** ./src/blocks/campaign-progress-bar/settings-editor.js ***!
  \*************************************************************/
/*! exports provided: SettingsEditor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsEditor", function() { return SettingsEditor; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);







/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var Component = wp.element.Component;
var TextControl = wp.components.TextControl;
var SettingsEditor =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SettingsEditor, _Component);

  function SettingsEditor() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SettingsEditor);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SettingsEditor).apply(this, arguments));
  }
  /**
   * Render the settings.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SettingsEditor, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;

      function updateGoal(goal) {
        setAttributes({
          goal: goal
        });
        wp.data.dispatch('core/editor').editPost({
          goal: goal
        });
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "charitable-block-settings charitable-block-settings-campaign-progress-bar"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TextControl, {
        label: __('Goal', 'charitable'),
        value: attributes.goal,
        onChange: updateGoal
      }));
    }
  }]);

  return SettingsEditor;
}(Component);
/* harmony default export */ __webpack_exports__["default"] = (SettingsEditor);

/***/ }),

/***/ "./src/blocks/campaign-summary/block.js":
/*!**********************************************!*\
  !*** ./src/blocks/campaign-summary/block.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_campaign_select_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../components/campaign-select/index.js */ "./src/components/campaign-select/index.js");








/**
 * Block dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var Component = wp.element.Component;
var useSelect = wp.data.useSelect;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    withAPIData = _wp$components.withAPIData,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl,
    RangeControl = _wp$components.RangeControl;
var findDOMNode = wp.element.findDOMNode;
var InspectorControls = wp.editor.InspectorControls;

var CharitableCampaignSummaryBlock =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(CharitableCampaignSummaryBlock, _Component);

  function CharitableCampaignSummaryBlock() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CharitableCampaignSummaryBlock);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(CharitableCampaignSummaryBlock).apply(this, arguments)); // this.toggleMasonryLayout = this.toggleMasonryLayout.bind( this );
    // this.toggleResponsiveLayout = this.toggleResponsiveLayout.bind( this );

    _this.getCurrentPostType = _this.getCurrentPostType(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  } // toggleMasonryLayout() {
  // 	const { masonryLayout } = this.props.attributes;
  // 	const { setAttributes } = this.props;
  // 	setAttributes( { masonryLayout: ! masonryLayout } );
  // }
  // toggleResponsiveLayout() {
  // 	const { responsiveLayout } = this.props.attributes;
  // 	const { setAttributes } = this.props;
  // 	setAttributes( { responsiveLayout: ! responsiveLayout } );
  // }


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CharitableCampaignSummaryBlock, [{
    key: "getCurrentPostType",
    value: function getCurrentPostType(state) {
      return useSelect(function (select) {
        return select('core/editor').getCurrentPostType(state);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          isSelected = _this$props.isSelected,
          setAttributes = _this$props.setAttributes;
      var campaign = attributes.campaign,
          columns = attributes.columns;
      var postType = this.getCurrentPostType(this.state);
      var inspectorControls = isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(InspectorControls, {
        key: "inspector",
        description: __('Configure')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components_campaign_select_index_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        key: "campaign-select",
        label: __('Campaign'),
        selectedOption: attributes.campaign,
        onChange: function onChange(value) {
          return props.setAttributes({
            campaign: value
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(PanelBody, {
        title: postType
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RangeControl, {
        key: "columns-select",
        label: __('Columns'),
        value: columns,
        min: "1",
        max: "4",
        onChange: function onChange(value) {
          return setAttributes({
            columns: value
          });
        }
      }))));
      return [inspectorControls, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("p", {
        key: "charitable-campaign-summary"
      }, __('CAMPAIGN Summary'))];
    }
  }]);

  return CharitableCampaignSummaryBlock;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (CharitableCampaignSummaryBlock);

/***/ }),

/***/ "./src/blocks/campaign-summary/icon.js":
/*!*********************************************!*\
  !*** ./src/blocks/campaign-summary/icon.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20px",
  height: "20px",
  viewBox: "0 0 20 20"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M18.9,1.1V18.9H1.1V1.1H18.9M20,0H0V20H20V0Z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
  width: "20",
  height: "9"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
  x: "3",
  y: "11",
  width: "11",
  height: "2"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
  x: "3",
  y: "15",
  width: "14",
  height: "2"
}));
/* harmony default export */ __webpack_exports__["default"] = (icon);

/***/ }),

/***/ "./src/blocks/campaign-summary/index.js":
/*!**********************************************!*\
  !*** ./src/blocks/campaign-summary/index.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon */ "./src/blocks/campaign-summary/icon.js");
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block */ "./src/blocks/campaign-summary/block.js");
/**
 * Block dependencies
 */


/**
 * Internal block libraries
 */

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
/**
 * Register block
 */

registerBlockType('charitable/campaign-summary', {
  title: __('Campaign Summary'),
  category: 'widgets',
  icon: _icon__WEBPACK_IMPORTED_MODULE_0__["default"],
  keywords: [__('Fundraisers'), __('Charitable'), __('Donation')],
  edit: _block__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/blocks/campaigns/block.js":
/*!***************************************!*\
  !*** ./src/blocks/campaigns/block.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icon */ "./src/blocks/campaigns/icon.js");
/* harmony import */ var _settings_editor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings-editor.js */ "./src/blocks/campaigns/settings-editor.js");
/* harmony import */ var _components_campaign_select_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../components/campaign-select/index.js */ "./src/components/campaign-select/index.js");
/* harmony import */ var _components_category_select_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../components/category-select/index.js */ "./src/components/category-select/index.js");
/* harmony import */ var _components_filter_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../components/filter/index.js */ "./src/components/filter/index.js");









/**
 * Block dependencies
 */





/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var Component = wp.element.Component;
var _wp$components = wp.components,
    Toolbar = _wp$components.Toolbar,
    ServerSideRender = _wp$components.ServerSideRender,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl,
    RangeControl = _wp$components.RangeControl,
    Dashicon = _wp$components.Dashicon;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls;
/**
 * The campaigns block UI.
 */

var CharitableCampaignsBlock =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(CharitableCampaignsBlock, _Component);

  function CharitableCampaignsBlock() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, CharitableCampaignsBlock);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(CharitableCampaignsBlock).apply(this, arguments));
    _this.state = {
      edit_mode: false
    };
    _this.updateEditMode = _this.updateEditMode.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.toggleMasonryLayout = _this.toggleMasonryLayout.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.toggleResponsiveLayout = _this.toggleResponsiveLayout.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.getInspectorControls = _this.getInspectorControls.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.getToolbarControls = _this.getToolbarControls.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.getSettingsEditor = _this.getSettingsEditor.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.getPreview = _this.getPreview.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    return _this;
  }
  /**
   * Update edit mode in state.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(CharitableCampaignsBlock, [{
    key: "updateEditMode",
    value: function updateEditMode() {
      this.setState({
        edit_mode: !this.state.edit_mode
      });
    }
    /**
     * Turn the masonry layout on/off.
     */

  }, {
    key: "toggleMasonryLayout",
    value: function toggleMasonryLayout() {
      var masonryLayout = this.props.attributes.masonryLayout;
      var setAttributes = this.props.setAttributes;
      setAttributes({
        masonryLayout: !masonryLayout
      });
    }
    /**
     * Turn responsive mode on/off.
     */

  }, {
    key: "toggleResponsiveLayout",
    value: function toggleResponsiveLayout() {
      var responsiveLayout = this.props.attributes.responsiveLayout;
      var setAttributes = this.props.setAttributes;
      setAttributes({
        responsiveLayout: !responsiveLayout
      });
    }
    /**
     * Get the components for the sidebar settings area that is rendered while focused on a Donation Form block.
     *
     * @return Component
     */

  }, {
    key: "getInspectorControls",
    value: function getInspectorControls() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var number = attributes.number,
          orderBy = attributes.orderBy,
          order = attributes.order,
          columns = attributes.columns,
          masonryLayout = attributes.masonryLayout,
          responsiveLayout = attributes.responsiveLayout;
      var fullOrderBy = orderBy + '/' + order;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(InspectorControls, {
        key: "inspector",
        description: __('Configure', 'charitable')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(PanelBody, {
        title: __('Display Settings', 'charitable')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(SelectControl, {
        key: "orderby-select",
        label: __('Order by', 'charitable'),
        value: fullOrderBy,
        options: [{
          label: __('Date created (newest to oldest)', 'charitable'),
          value: 'post_date/DESC'
        }, {
          label: __('Date created (oldest to newest)', 'charitable'),
          value: 'post_date/ASC'
        }, {
          label: __('Amount donated', 'charitable'),
          value: 'popular/DESC'
        }, {
          label: __('Time left (least first)', 'charitable'),
          value: 'ending/DESC'
        }, {
          label: __('Time left (longest first)', 'charitable'),
          value: 'ending/ASC'
        }],
        onChange: function onChange(value) {
          var _value$split = value.split('/'),
              _value$split2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_value$split, 2),
              newOrderBy = _value$split2[0],
              newOrder = _value$split2[1];

          if (newOrder !== order) {
            setAttributes({
              order: newOrder
            });
          }

          if (newOrderBy !== orderBy) {
            setAttributes({
              orderBy: newOrderBy
            });
          }
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(RangeControl, {
        key: "number-control",
        label: __('Number of campaigns', 'charitable'),
        value: number,
        onChange: function onChange(value) {
          return setAttributes({
            number: value
          });
        },
        min: "-1",
        max: "999"
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(RangeControl, {
        key: "columns-select",
        label: __('Columns', 'charitable'),
        value: columns,
        min: "1",
        max: "4",
        onChange: function onChange(value) {
          return setAttributes({
            columns: value
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(ToggleControl, {
        label: __('Masonry layout', 'charitable'),
        checked: masonryLayout,
        onChange: this.toggleMasonryLayout
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(ToggleControl, {
        label: __('Responsive layout', 'charitable'),
        checked: responsiveLayout,
        onChange: this.toggleResponsiveLayout
      }))));
    }
    /**
     * Get the components for the toolbar area that appears on top of the block when focused.
     *
     * @return Component
     */

  }, {
    key: "getToolbarControls",
    value: function getToolbarControls() {
      var editButton = [{
        icon: 'filter',
        title: __('Filter Campaigns', 'charitable'),
        onClick: this.updateEditMode,
        isActive: this.state.edit_mode
      }];
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(BlockControls, {
        key: "controls"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Toolbar, {
        controls: editButton
      }));
    }
    /**
     * Get the block settings editor UI.
     *
     * @return Component
     */

  }, {
    key: "getSettingsEditor",
    value: function getSettingsEditor() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_settings_editor_js__WEBPACK_IMPORTED_MODULE_9__["SettingsEditor"], this.props);
    }
    /**
     * Get the block preview.
     *
     * @return Component
     */

  }, {
    key: "getPreview",
    value: function getPreview() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        class: "charitable-block-campaigns has-preview"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(ServerSideRender, {
        block: "charitable/campaigns",
        attributes: this.props.attributes
      }));
    }
    /**
     * Render the block UI.
     */

  }, {
    key: "render",
    value: function render() {
      return [this.getInspectorControls(), this.getToolbarControls(), this.state.edit_mode ? this.getSettingsEditor() : this.getPreview()];
    }
  }]);

  return CharitableCampaignsBlock;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (CharitableCampaignsBlock);

/***/ }),

/***/ "./src/blocks/campaigns/icon.js":
/*!**************************************!*\
  !*** ./src/blocks/campaigns/icon.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20px",
  height: "20px",
  viewBox: "0 0 20 20"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M18.9,1.1V18.9H1.1V1.1H18.9M20,0H0V20H20V0Z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
  width: "20",
  height: "9"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
  x: "3",
  y: "11",
  width: "11",
  height: "2"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
  x: "3",
  y: "15",
  width: "14",
  height: "2"
}));
/* harmony default export */ __webpack_exports__["default"] = (icon);

/***/ }),

/***/ "./src/blocks/campaigns/index.js":
/*!***************************************!*\
  !*** ./src/blocks/campaigns/index.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "./src/blocks/campaigns/icon.js");
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block */ "./src/blocks/campaigns/block.js");


/**
 * Block dependencies
 */


/**
 * Internal block libraries
 */

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
/**
 * Register block
 */

registerBlockType('charitable/campaigns', {
  /**
   * The block title.
   */
  title: __('Campaigns', 'charitable'),

  /**
   * Block description.
   */
  description: __('Display a list or grid of campaigns.', 'charitable'),

  /**
   * Type of block. This controls where it will be found in the block UI.
   */
  category: 'widgets',

  /**
   * Block icon.
   */
  icon: _icon__WEBPACK_IMPORTED_MODULE_1__["default"],

  /**
   * Keywords used to find the block.
   */
  keywords: [__('Fundraisers'), __('Charitable'), __('Donation')],

  /**
   * Block attributes.
   */
  attributes: {
    /**
     * The category of campaigns to show.
     */
    categories: {
      type: 'array',
      default: [],
      items: {
        type: 'string'
      }
    },

    /**
     * Whether to hide inactive campaigns.
     */
    includeInactive: {
      type: 'boolean',
      default: false
    },

    /**
     * Specific campaigns to show.
     */
    campaigns: {
      type: 'array',
      default: [],
      items: {
        type: 'number'
      }
    },

    /**
     * Specific campaigns to exclude.
     */
    campaignsToExclude: {
      type: 'array',
      default: [],
      items: {
        type: 'number'
      }
    },

    /**
     * A campaign creator whose campaigns will be shown.
     */
    creator: {
      type: 'string',
      default: ''
    },

    /**
     * Whether to show the campaigns in ascending or descending order.
     */
    order: {
      type: 'string',
      default: 'DESC'
    },

    /**
     * The criteria to order campaigns by.
     */
    orderBy: {
      type: 'string',
      default: 'post_date'
    },

    /**
     * The number of campaigns to show.
     */
    number: {
      type: 'number',
      default: 10
    },

    /**
     * The number of columns to show.
     */
    columns: {
      type: 'number',
      default: 2
    },

    /**
     * Whether to use the masonry layout.
     */
    masonryLayout: {
      type: 'boolean',
      default: false
    },

    /**
     * Whether to use a responsive layout.
     */
    responsiveLayout: {
      type: 'boolean',
      default: true
    }
  },

  /**
   * Define the block UI.
   */
  edit: function edit(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block__WEBPACK_IMPORTED_MODULE_2__["default"], props);
  },

  /**
   * How the block is saved to the database.
   */
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/blocks/campaigns/settings-editor.js":
/*!*************************************************!*\
  !*** ./src/blocks/campaigns/settings-editor.js ***!
  \*************************************************/
/*! exports provided: SettingsEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsEditor", function() { return SettingsEditor; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icon */ "./src/blocks/campaigns/icon.js");
/* harmony import */ var _components_campaign_select_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../components/campaign-select/index.js */ "./src/components/campaign-select/index.js");
/* harmony import */ var _components_category_select_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../components/category-select/index.js */ "./src/components/category-select/index.js");
/* harmony import */ var _components_filter_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../components/filter/index.js */ "./src/components/filter/index.js");








/**
 * Block dependencies
 */




/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var Component = wp.element.Component;
var _wp$components = wp.components,
    Toolbar = _wp$components.Toolbar,
    ServerSideRender = _wp$components.ServerSideRender,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl,
    RangeControl = _wp$components.RangeControl,
    Dashicon = _wp$components.Dashicon;
/**
 * The campaigns block settings area in Edit mode.
 */

var SettingsEditor =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(SettingsEditor, _Component);

  /**
   * Construtor.
   */
  function SettingsEditor(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SettingsEditor);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SettingsEditor).call(this, props));
    _this.state = {
      display_option: 'all',
      display_option_settings_open: false
    }; // this.updateDisplay = this.updateDisplay.bind( this );
    // this.closeMenu     = this.closeMenu.bind( this );

    _this.toggleIncludeInactive = _this.toggleIncludeInactive.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.closeDisplayOptionSettings = _this.closeDisplayOptionSettings.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.updateDisplayOption = _this.updateDisplayOption.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.getCurrentDisplayOption = _this.getCurrentDisplayOption.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.getCurrentView = _this.getCurrentView.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }
  /**
   * When the component is mounted, set the display_option.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SettingsEditor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var attributes = this.props.attributes;
      var campaigns = attributes.campaigns,
          categories = attributes.categories,
          creator = attributes.creator;
      var display_option = 'all';

      if (campaigns.length) {
        display_option = 'specific';
      } else {
        if (categories.length || creator.length) {
          display_option = 'filter';
        }
      }

      this.setState({
        display_option: display_option
      });
    }
    /**
     * Close the display option settings view.
     */

  }, {
    key: "closeDisplayOptionSettings",
    value: function closeDisplayOptionSettings() {
      this.setState({
        display_option_settings_open: false
      });
    }
    /**
     * Toggle the includeInactive setting.
     */

  }, {
    key: "toggleIncludeInactive",
    value: function toggleIncludeInactive() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var includeInactive = attributes.includeInactive;
      setAttributes({
        includeInactive: !includeInactive
      });
    }
    /**
     * Update the state of display_option.
     */

  }, {
    key: "updateDisplayOption",
    value: function updateDisplayOption(option) {
      var _this$props2 = this.props,
          attributes = _this$props2.attributes,
          setAttributes = _this$props2.setAttributes;
      var options = ['all', 'filter', 'specific'];

      if (options.includes(option)) {
        this.setState({
          display_option: option,
          display_option_settings_open: true
        });

        switch (option) {
          case 'all':
            setAttributes({
              categories: [],
              campaigns: [],
              creator: '',
              includeInactive: false
            });
            break;

          case 'filter':
            setAttributes({
              campaigns: []
            });
            break;

          case 'specific':
            setAttributes({
              categories: [],
              campaignsToExclude: [],
              creator: '',
              includeInactive: true
            });
            break;
        }
      }
    }
    /**
     * Get the title for the current display option.
     *
     * @return string
     */

  }, {
    key: "getCurrentDisplayOption",
    value: function getCurrentDisplayOption() {
      var currentDisplayOption = null;

      switch (this.state.display_option) {
        case 'all':
          currentDisplayOption = __('All active campaigns', 'charitable');
          break;

        case 'filter':
          currentDisplayOption = __('Filtered campaigns', 'charitable');
          break;

        case 'specific':
          currentDisplayOption = __('Specific campaigns', 'charitable');
          break;
      }

      return currentDisplayOption;
    }
    /**
     * Return the appropriate view to display.
     *
     * @return Component
     */

  }, {
    key: "getCurrentView",
    value: function getCurrentView() {
      var _this$props3 = this.props,
          attributes = _this$props3.attributes,
          setAttributes = _this$props3.setAttributes;
      var settingsView = null;

      if (!!this.state.display_option_settings_open) {
        switch (this.state.display_option) {
          case 'all':
            settingsView = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(AllSettingsView, {
              setAttributes: setAttributes,
              attributes: attributes,
              update_include_inactive_callback: this.toggleIncludeInactive
            });
            break;

          case 'filter':
            settingsView = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(FilterSettingsView, {
              setAttributes: setAttributes,
              attributes: attributes,
              update_include_inactive_callback: this.toggleIncludeInactive
            });
            break;

          case 'specific':
            settingsView = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(SpecificSettingsView, {
              setAttributes: setAttributes,
              attributes: attributes
            });
            break;
        }
      } else {
        settingsView = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(DisplayOptions, {
          attributes: attributes,
          title: __('Filter campaigns', 'charitable'),
          selected_display_option: this.state.display_option,
          update_display_option_callback: this.updateDisplayOption
        });
      }

      return settingsView;
    }
    /**
     * Render the settings.
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          attributes = _this$props4.attributes,
          setAttributes = _this$props4.setAttributes;
      var categories = attributes.categories,
          includeInactive = attributes.includeInactive,
          campaigns = attributes.campaigns,
          campaignsToExclude = attributes.campaignsToExclude,
          creator = attributes.creator,
          columns = attributes.columns,
          displayOption = attributes.displayOption;
      var returnLink = null;

      if (!!this.state.display_option_settings_open) {
        returnLink = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
          className: "charitable-block-settings-breadcrumbs"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("a", {
          href: "#",
          onClick: this.closeDisplayOptionSettings
        }, __('Display different campaigns', 'charitable')));
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        class: "charitable-block-settings charitable-block-settings-campaigns"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "charitable-block-settings-heading"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("h2", {
        className: "charitable-block-settings-title"
      }, _icon__WEBPACK_IMPORTED_MODULE_7__["default"], " ", __('Campaigns', 'charitable'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "charitable-block-settings-campaigns-subheading"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("strong", null, __('Currently showing:', 'charitable')), "\xA0", this.getCurrentDisplayOption())), returnLink, this.getCurrentView());
    }
  }]);

  return SettingsEditor;
}(Component);
/**
 * List all display options.
 */

var DisplayOptions =
/*#__PURE__*/
function (_Component2) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(DisplayOptions, _Component2);

  function DisplayOptions() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DisplayOptions);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(DisplayOptions).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DisplayOptions, [{
    key: "render",

    /**
     * Render the display options.
     */
    value: function render() {
      var _this$props5 = this.props,
          title = _this$props5.title,
          selected_display_option = _this$props5.selected_display_option,
          update_display_option_callback = _this$props5.update_display_option_callback;
      var header = title.length ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("p", {
        className: "charitable-block-settings-campaigns--display-options-header"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("strong", null, title)) : '';
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "charitable-block-settings-campaigns--display-options-wrapper"
      }, header, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("ul", {
        className: "charitable-block-settings-campaigns--display-options"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(DisplayOption, {
        selected_display_option: selected_display_option,
        update_display_option_callback: update_display_option_callback,
        option: "all",
        label: __('Show all campaigns', 'charitable')
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(DisplayOption, {
        selected_display_option: selected_display_option,
        update_display_option_callback: update_display_option_callback,
        option: "filter",
        label: __('Filter by category, tag or campaign creator', 'charitable')
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(DisplayOption, {
        selected_display_option: selected_display_option,
        update_display_option_callback: update_display_option_callback,
        option: "specific",
        label: __('Choose specific campaigns', 'charitable')
      })));
    }
  }]);

  return DisplayOptions;
}(Component);
/**
 * Display a single display option row.
 */


var DisplayOption =
/*#__PURE__*/
function (_Component3) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(DisplayOption, _Component3);

  function DisplayOption() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DisplayOption);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(DisplayOption).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DisplayOption, [{
    key: "render",

    /**
     * Render the display options.
     */
    value: function render() {
      var _this$props6 = this.props,
          option = _this$props6.option,
          label = _this$props6.label,
          selected_display_option = _this$props6.selected_display_option,
          update_display_option_callback = _this$props6.update_display_option_callback;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("li", {
        className: option === selected_display_option ? 'active-option' : '',
        onClick: function onClick() {
          return update_display_option_callback(option);
        }
      }, option === selected_display_option ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Dashicon, {
        icon: "yes"
      }) : '', label, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("button", {
        onClick: function onClick() {
          return update_display_option_callback(option);
        },
        className: "charitable-block-settings-campaigns--display-options-button",
        type: "button"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Dashicon, {
        icon: "admin-generic"
      })));
    }
  }]);

  return DisplayOption;
}(Component);
/**
 * Specific campaign settings view.
 */


var SpecificSettingsView =
/*#__PURE__*/
function (_Component4) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(SpecificSettingsView, _Component4);

  function SpecificSettingsView() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SpecificSettingsView);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SpecificSettingsView).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SpecificSettingsView, [{
    key: "render",

    /**
     * Render the view.
     */
    value: function render() {
      var _this$props7 = this.props,
          attributes = _this$props7.attributes,
          setAttributes = _this$props7.setAttributes;
      var campaigns = attributes.campaigns,
          columns = attributes.columns;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "charitable-block-settings-view charitable-block-settings-view--specific"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components_campaign_select_index_js__WEBPACK_IMPORTED_MODULE_8__["CampaignSelect"], {
        attributes: attributes,
        label: __('Choose campaigns', 'charitable'),
        search_placeholder: __('Search for campaigns to display', 'charitable'),
        selected_campaigns: campaigns,
        update_campaign_setting_callback: function update_campaign_setting_callback(value) {
          return setAttributes({
            campaigns: value
          });
        },
        multiple: true,
        columns: columns,
        campaign_active_status: ""
      }));
    }
  }]);

  return SpecificSettingsView;
}(Component);
/**
 * All campaigns settings view.
 */


var AllSettingsView =
/*#__PURE__*/
function (_Component5) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(AllSettingsView, _Component5);

  function AllSettingsView() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AllSettingsView);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(AllSettingsView).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(AllSettingsView, [{
    key: "render",

    /**
     * Render the view.
     */
    value: function render() {
      var _this$props8 = this.props,
          attributes = _this$props8.attributes,
          setAttributes = _this$props8.setAttributes,
          update_include_inactive_callback = _this$props8.update_include_inactive_callback;
      var campaignsToExclude = attributes.campaignsToExclude,
          includeInactive = attributes.includeInactive;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "charitable-block-settings-view charitable-block-settings-view--all"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(ToggleControl, {
        label: __('Include inactive campaigns', 'charitable'),
        checked: !!includeInactive,
        onChange: update_include_inactive_callback
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components_filter_index_js__WEBPACK_IMPORTED_MODULE_10__["Filter"], {
        title: __('Exclude Campaigns', 'charitable'),
        enabled: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components_campaign_select_index_js__WEBPACK_IMPORTED_MODULE_8__["CampaignSelect"], {
        attributes: attributes,
        label: __('Campaigns to exclude', 'charitable'),
        search_placeholder: __('Search for campaigns to exclude', 'charitable'),
        selected_campaigns: campaignsToExclude,
        update_campaign_setting_callback: function update_campaign_setting_callback(value) {
          return setAttributes({
            campaignsToExclude: value
          });
        },
        multiple: true,
        campaign_active_status: ""
      })));
    }
  }]);

  return AllSettingsView;
}(Component);
/**
 * Filtered campaigns settings view.
 */


var FilterSettingsView =
/*#__PURE__*/
function (_Component6) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(FilterSettingsView, _Component6);

  function FilterSettingsView() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, FilterSettingsView);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(FilterSettingsView).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(FilterSettingsView, [{
    key: "render",

    /**
     * Render the view.
     */
    value: function render() {
      var _this$props9 = this.props,
          attributes = _this$props9.attributes,
          setAttributes = _this$props9.setAttributes,
          update_include_inactive_callback = _this$props9.update_include_inactive_callback;
      var categories = attributes.categories,
          campaignsToExclude = attributes.campaignsToExclude,
          includeInactive = attributes.includeInactive,
          campaigns = attributes.campaigns,
          columns = attributes.columns;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "charitable-block-settings-view charitable-block-settings-view--filter"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(ToggleControl, {
        label: __('Include inactive campaigns', 'charitable'),
        checked: !!includeInactive,
        onChange: update_include_inactive_callback
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components_filter_index_js__WEBPACK_IMPORTED_MODULE_10__["Filter"], {
        title: __('Category', 'charitable'),
        enabled: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components_category_select_index_js__WEBPACK_IMPORTED_MODULE_9__["CampaignCategorySelect"], {
        attributes: attributes,
        label: __('Filter by category', 'charitable'),
        selected_categories: categories,
        update_category_setting_callback: function update_category_setting_callback(value) {
          return setAttributes({
            categories: value
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components_filter_index_js__WEBPACK_IMPORTED_MODULE_10__["Filter"], {
        title: __('Exclude Campaigns', 'charitable'),
        enabled: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components_campaign_select_index_js__WEBPACK_IMPORTED_MODULE_8__["CampaignSelect"], {
        attributes: attributes,
        label: __('Campaigns to exclude', 'charitable'),
        search_placeholder: __('Search for campaigns to exclude', 'charitable'),
        selected_campaigns: campaignsToExclude,
        update_campaign_setting_callback: function update_campaign_setting_callback(value) {
          return setAttributes({
            campaignsToExclude: value
          });
        },
        multiple: true,
        columns: columns,
        campaign_active_status: ""
      })));
    }
  }]);

  return FilterSettingsView;
}(Component);

/***/ }),

/***/ "./src/blocks/donation-form/block.js":
/*!*******************************************!*\
  !*** ./src/blocks/donation-form/block.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CharitableDonationFormBlock; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_campaign_select_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../components/campaign-select/index.js */ "./src/components/campaign-select/index.js");








/**
 * WP dependencies.
 */

var __ = wp.i18n.__;
var Component = wp.element.Component;
var _wp$components = wp.components,
    Toolbar = _wp$components.Toolbar,
    ServerSideRender = _wp$components.ServerSideRender;
var BlockControls = wp.editor.BlockControls;
/**
 * The main donation form block UI.
 */

var CharitableDonationFormBlock =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(CharitableDonationFormBlock, _Component);

  function CharitableDonationFormBlock() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CharitableDonationFormBlock);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(CharitableDonationFormBlock).apply(this, arguments));
    _this.state = {
      edit_mode: !_this.props.attributes.campaign
    };
    _this.getInspectorControls = _this.getInspectorControls.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.getToolbarControls = _this.getToolbarControls.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.getSettingsEditor = _this.getSettingsEditor.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.getPreview = _this.getPreview.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }
  /**
   * Get the components for the sidebar settings area that is rendered while focused on a Donation Form block.
   *
   * @return Component
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CharitableDonationFormBlock, [{
    key: "getInspectorControls",
    value: function getInspectorControls() {
      return '';
    }
    /**
     * Get the components for the toolbar area that appears on top of the block when focused.
     *
     * @return Component
     */

  }, {
    key: "getToolbarControls",
    value: function getToolbarControls() {
      var _this2 = this;

      var edit_mode = this.state.edit_mode;
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var campaign = attributes.campaign;
      var editButton = [{
        icon: 'edit',
        title: __('Edit'),
        onClick: !campaign ? function () {} : function () {
          return _this2.setState({
            edit_mode: !edit_mode
          });
        },
        isActive: this.state.edit_mode
      }];
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(BlockControls, {
        key: "controls"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Toolbar, {
        controls: editButton
      }));
    }
    /**
     * Get the block settings editor UI.
     *
     * @return Component
     */

  }, {
    key: "getSettingsEditor",
    value: function getSettingsEditor() {
      var self = this;
      var _this$props2 = this.props,
          attributes = _this$props2.attributes,
          setAttributes = _this$props2.setAttributes;
      var campaign = attributes.campaign;
      var selected_campaigns = !!campaign ? [campaign] : [];
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        class: "charitable-block-donation-form charitable-block-settings"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components_campaign_select_index_js__WEBPACK_IMPORTED_MODULE_7__["CampaignSelect"], {
        attributes: attributes,
        selected_campaigns: selected_campaigns,
        update_campaign_setting_callback: function update_campaign_setting_callback(campaign) {
          setAttributes({
            campaign: campaign[0]
          });
          self.setState({
            edit_mode: !campaign.length
          });
        },
        multiple: false,
        campaign_active_status: "active"
      }));
    }
    /**
     * Get the block preview.
     *
     * @return Component
     */

  }, {
    key: "getPreview",
    value: function getPreview() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        class: "charitable-block-donation-form has-preview"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        class: "charitable-block-overlay"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(ServerSideRender, {
        block: "charitable/donation-form",
        attributes: this.props.attributes
      }));
    }
    /**
     * Render the block UI.
     */

  }, {
    key: "render",
    value: function render() {
      return [this.getInspectorControls(), this.getToolbarControls(), this.state.edit_mode ? this.getSettingsEditor() : this.getPreview()];
    }
  }]);

  return CharitableDonationFormBlock;
}(Component);



/***/ }),

/***/ "./src/blocks/donation-form/icon.js":
/*!******************************************!*\
  !*** ./src/blocks/donation-form/icon.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20px",
  height: "20px",
  viewBox: "0 0 20 20"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M17.69,2.31V5.69H2.31V2.31H17.69M20,0H0V8H20V0Z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M17.69,8.31v3.38H2.31V8.31H17.69M20,6H0v8H20V6Z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M17.69,14.31v3.38H2.31V14.31H17.69M20,12H0v8H20V12Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (icon);

/***/ }),

/***/ "./src/blocks/donation-form/index.js":
/*!*******************************************!*\
  !*** ./src/blocks/donation-form/index.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block */ "./src/blocks/donation-form/block.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ "./src/blocks/donation-form/icon.js");



var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
registerBlockType('charitable/donation-form', {
  /**
   * The block title.
   */
  title: __('Donation Form', 'charitable'),

  /**
   * Block description.
   */
  description: __('Display a campaign\'s donation form.', 'charitable'),

  /**
   * Type of block. This controls where it will be found in the block UI.
   */
  category: 'widgets',

  /**
   * Block icon.
   */
  icon: _icon__WEBPACK_IMPORTED_MODULE_2__["default"],

  /**
   * Keywords used to find the block.
   */
  keywords: [__('Donate', 'charitable'), __('Charitable')],

  /**
   * Block attributes.
   */
  attributes: {
    /**
     * The campaign for the donation form.
     */
    campaign: {
      type: 'number',
      default: 0
    }
  },

  /**
   * Transform between the block & a shortcode.
   */
  transforms: {
    from: [{
      type: 'shortcode',
      tag: 'charitable_donation_form',
      attributes: {
        // An attribute can be source from the shortcode attributes
        campaign: {
          type: 'string',
          shortcode: function shortcode(_ref) {
            var _ref$named$campaign_i = _ref.named.campaign_id,
                campaign_id = _ref$named$campaign_i === void 0 ? '' : _ref$named$campaign_i;

            if (!campaign_id) {
              return '';
            }

            return parseInt(campaign_id, 10);
          }
        }
      }
    }]
  },

  /**
   * Define the block UI.
   */
  edit: function edit(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block__WEBPACK_IMPORTED_MODULE_1__["default"], props);
  },

  /**
   * How the block is saved to the database.
   */
  save: function save(props) {
    return null;
  }
});

/***/ }),

/***/ "./src/blocks/donors/block.js":
/*!************************************!*\
  !*** ./src/blocks/donors/block.js ***!
  \************************************/
/*! exports provided: CharitableDonorsBlock, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharitableDonorsBlock", function() { return CharitableDonorsBlock; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_campaign_select_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../components/campaign-select/index.js */ "./src/components/campaign-select/index.js");








/**
 * Block dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var Component = wp.element.Component;
var InspectorControls = wp.editor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl,
    RangeControl = _wp$components.RangeControl;
var CharitableDonorsBlock =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(CharitableDonorsBlock, _Component);

  function CharitableDonorsBlock() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CharitableDonorsBlock);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(CharitableDonorsBlock).apply(this, arguments));
    _this.toggleDisplayDonorName = _this.toggleDisplayDonorName.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.toggleDisplayDonorAmount = _this.toggleDisplayDonorAmount.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.toggleDisplayDonorLocation = _this.toggleDisplayDonorLocation.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.toggleDisplayDonorAvatar = _this.toggleDisplayDonorAvatar.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.toggleDistinctDonors = _this.toggleDistinctDonors.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CharitableDonorsBlock, [{
    key: "toggleDisplayDonorName",
    value: function toggleDisplayDonorName() {
      var displayDonorName = this.props.attributes.displayDonorName;
      var setAttributes = this.props.setAttributes;
      setAttributes({
        displayDonorName: !displayDonorName
      });
    }
  }, {
    key: "toggleDisplayDonorLocation",
    value: function toggleDisplayDonorLocation() {
      var displayDonorLocation = this.props.attributes.displayDonorLocation;
      var setAttributes = this.props.setAttributes;
      setAttributes({
        displayDonorLocation: !displayDonorLocation
      });
    }
  }, {
    key: "toggleDisplayDonorAvatar",
    value: function toggleDisplayDonorAvatar() {
      var displayDonorAvatar = this.props.attributes.displayDonorAvatar;
      var setAttributes = this.props.setAttributes;
      setAttributes({
        displayDonorAvatar: !displayDonorAvatar
      });
    }
  }, {
    key: "toggleDisplayDonorAmount",
    value: function toggleDisplayDonorAmount() {
      var displayDonorAmount = this.props.attributes.displayDonorAmount;
      var setAttributes = this.props.setAttributes;
      setAttributes({
        displayDonorAmount: !displayDonorAmount
      });
    }
  }, {
    key: "toggleDistinctDonors",
    value: function toggleDistinctDonors() {
      var distinctDonors = this.props.attributes.distinctDonors;
      var setAttributes = this.props.setAttributes;
      setAttributes({
        distinctDonors: !distinctDonors
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          attributes = _this$props.attributes,
          isSelected = _this$props.isSelected,
          setAttributes = _this$props.setAttributes;
      var number = attributes.number,
          orderBy = attributes.orderBy,
          campaign = attributes.campaign,
          distinctDonors = attributes.distinctDonors,
          orientation = attributes.orientation,
          displayDonorAmount = attributes.displayDonorAmount,
          displayDonorName = attributes.displayDonorName,
          displayDonorLocation = attributes.displayDonorLocation,
          displayDonorAvatar = attributes.displayDonorAvatar;
      var inspectorControls = isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(InspectorControls, {
        key: "inspector",
        description: __('Configure')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RangeControl, {
        key: "number-control",
        label: __('Number of donors'),
        value: number,
        onChange: function onChange(value) {
          return setAttributes({
            number: value
          });
        },
        min: "-1",
        max: "999"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components_campaign_select_index_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        key: "campaign-select",
        label: __('Campaign'),
        withOptions: [{
          label: __('All Campaigns'),
          value: 'all'
        }],
        selectedOption: campaign,
        onChange: function onChange(value) {
          return _this2.props.setAttributes({
            campaign: value
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(SelectControl, {
        key: "orderby-select",
        label: __('Order by'),
        value: orderBy,
        options: [{
          label: __('Most recent'),
          value: 'recent'
        }, {
          label: __('Amount donated'),
          value: 'amount'
        }],
        onChange: function onChange(value) {
          return setAttributes({
            orderBy: value
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(ToggleControl, {
        key: "distinct-donors-toggle",
        label: __('Only show unique donors'),
        checked: distinctDonors,
        onChange: this.toggleDistinctDonors
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(PanelBody, {
        title: __('Display Settings')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(SelectControl, {
        key: "orientation-select",
        label: __('Orientation'),
        value: orientation,
        options: [{
          label: __('Vertical'),
          value: 'vertical'
        }, {
          label: __('Horizontal'),
          value: 'horizontal'
        }],
        onChange: function onChange(value) {
          return setAttributes({
            orientation: value
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(ToggleControl, {
        label: __('Display the name of the donor'),
        checked: displayDonorName,
        onChange: this.toggleDisplayDonorName
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(ToggleControl, {
        label: __('Display the amount donated by the donor'),
        checked: displayDonorAmount,
        onChange: this.toggleDisplayDonorAmount
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(ToggleControl, {
        label: __('Display the location of the donor'),
        checked: displayDonorLocation,
        onChange: this.toggleDisplayDonorLocation
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(ToggleControl, {
        label: __('Display the avatar of the donor'),
        checked: displayDonorAvatar,
        onChange: this.toggleDisplayDonorAvatar
      }))));
      return [inspectorControls, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("p", {
        key: "charitable-donors"
      }, __('DONORS'))];
    }
  }]);

  return CharitableDonorsBlock;
}(Component);
/* harmony default export */ __webpack_exports__["default"] = (CharitableDonorsBlock);

/***/ }),

/***/ "./src/blocks/donors/icon.js":
/*!***********************************!*\
  !*** ./src/blocks/donors/icon.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20px",
  height: "20px",
  viewBox: "0 0 20 20"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M0,0V20H20V0ZM10,3A3,3,0,1,1,7,6,3,3,0,0,1,10,3Zm5,14H5V12.89A2.89,2.89,0,0,1,7.89,10h4.22A2.89,2.89,0,0,1,15,12.89Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (icon);

/***/ }),

/***/ "./src/blocks/donors/index.js":
/*!************************************!*\
  !*** ./src/blocks/donors/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "./src/blocks/donors/icon.js");
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block */ "./src/blocks/donors/block.js");


/**
 * Block dependencies
 */


/**
 * Internal block libraries
 */

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
/**
 * Register block
 */

registerBlockType('charitable/donors', {
  title: __('Donors'),
  category: 'widgets',
  icon: _icon__WEBPACK_IMPORTED_MODULE_1__["default"],
  keywords: [__('Donations'), __('Charitable'), __('Backer')],
  edit: _block__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: function save() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, __('DONORS'));
  }
});

/***/ }),

/***/ "./src/charitable-blocks.js":
/*!**********************************!*\
  !*** ./src/charitable-blocks.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_campaign_progress_bar___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/campaign-progress-bar/ */ "./src/blocks/campaign-progress-bar/index.js");
/* harmony import */ var _blocks_campaign_summary___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/campaign-summary/ */ "./src/blocks/campaign-summary/index.js");
/* harmony import */ var _blocks_campaigns___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/campaigns/ */ "./src/blocks/campaigns/index.js");
/* harmony import */ var _blocks_donation_form___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/donation-form/ */ "./src/blocks/donation-form/index.js");
/* harmony import */ var _blocks_donors___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/donors/ */ "./src/blocks/donors/index.js");
/**
 * Import blocks.
 */






/***/ }),

/***/ "./src/components/campaign-select/campaign-data.js":
/*!*********************************************************!*\
  !*** ./src/components/campaign-select/campaign-data.js ***!
  \*********************************************************/
/*! exports provided: CAMPAIGN_DATA, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAMPAIGN_DATA", function() { return CAMPAIGN_DATA; });
/**
 * Campaign data cache.
 * Reduces the number of API calls and makes UI smoother and faster.
 */
var CAMPAIGN_DATA = {};
/* harmony default export */ __webpack_exports__["default"] = (CAMPAIGN_DATA);

/***/ }),

/***/ "./src/components/campaign-select/functions.js":
/*!*****************************************************!*\
  !*** ./src/components/campaign-select/functions.js ***!
  \*****************************************************/
/*! exports provided: hasCampaignThumbnail, getCampaignThumbnail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasCampaignThumbnail", function() { return hasCampaignThumbnail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCampaignThumbnail", function() { return getCampaignThumbnail; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Check whether a campaign has a thumbnail.
 *
 * @return boolean
 */
var hasCampaignThumbnail = function hasCampaignThumbnail(campaign) {
  return campaign.hasOwnProperty('_embedded') && campaign._embedded.hasOwnProperty('wp:featuredmedia');
};
/**
 * Get the thumbnail for a given campaign.
 *
 * @return string
 */

var getCampaignThumbnail = function getCampaignThumbnail(campaign) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'thumbnail';
  var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 30;
  var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 30;

  if (hasCampaignThumbnail(campaign)) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: campaign._embedded['wp:featuredmedia'][0].media_details.sizes[size].source_url,
      width: width,
      height: height
    });
  } else {
    return '';
  }
};

/***/ }),

/***/ "./src/components/campaign-select/index.js":
/*!*************************************************!*\
  !*** ./src/components/campaign-select/index.js ***!
  \*************************************************/
/*! exports provided: CampaignSelect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignSelect", function() { return CampaignSelect; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _search_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-field */ "./src/components/campaign-select/search-field.js");
/* harmony import */ var _selected_result__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./selected-result */ "./src/components/campaign-select/selected-result.js");








/**
 * Block dependencies
 */


/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var Component = wp.element.Component;
/**
 * Display a list of campaigns with checkboxes and a search filter.
 */

var CampaignSelect =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(CampaignSelect, _Component);

  /**
   * Constructor.
   */
  function CampaignSelect(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CampaignSelect);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(CampaignSelect).call(this, props));
    _this.state = {
      selected_campaigns: props.selected_campaigns || []
    };
    _this.addOrRemoveCampaign = _this.addOrRemoveCampaign.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }
  /**
   * Add or remove a campaign.
   *
   * @param id int Campaign ID.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CampaignSelect, [{
    key: "addOrRemoveCampaign",
    value: function addOrRemoveCampaign(id) {
      var selected_campaigns = this.state.selected_campaigns; // Add the campaign

      if (!selected_campaigns.includes(id)) {
        if (!!this.props.multiple) {
          selected_campaigns.push(id);
        } else {
          selected_campaigns = [id];
        }
      } else {
        selected_campaigns = selected_campaigns.filter(function (campaign) {
          return campaign !== id;
        });
      }

      this.setState({
        selected_campaigns: selected_campaigns
      });
      this.props.update_campaign_setting_callback(selected_campaigns);
    }
    /**
     * Render the list of campaigns and the search input.
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          label = _this$props.label,
          columns = _this$props.columns,
          campaign_active_status = _this$props.campaign_active_status;
      var fieldLabel = label ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("label", null, label) : null;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "charitable-campaigns-field"
      }, fieldLabel, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_search_field__WEBPACK_IMPORTED_MODULE_7__["CampaignSearchField"], {
        add_or_remove_campaign_callback: function add_or_remove_campaign_callback(campaign) {
          return _this2.addOrRemoveCampaign(campaign);
        },
        selected_campaigns: this.state.selected_campaigns,
        campaign_active_status: campaign_active_status
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_selected_result__WEBPACK_IMPORTED_MODULE_8__["CampaignSelectedResults"], {
        selected_campaigns: this.state.selected_campaigns,
        add_or_remove_campaign_callback: function add_or_remove_campaign_callback(campaign) {
          return _this2.addOrRemoveCampaign(campaign);
        },
        columns: columns,
        campaign_active_status: campaign_active_status
      }));
    }
  }]);

  return CampaignSelect;
}(Component);
/* harmony default export */ __webpack_exports__["default"] = (CampaignSelect);

/***/ }),

/***/ "./src/components/campaign-select/refs.js":
/*!************************************************!*\
  !*** ./src/components/campaign-select/refs.js ***!
  \************************************************/
/*! exports provided: REFS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REFS", function() { return REFS; });
/**
 * WordPress dependencies
 */
var createRef = wp.element.createRef;
/**
 * Refs.
 */

var REFS = {
  search_field: createRef(),
  search_results: createRef(),
  selected_results: createRef()
};
/* harmony default export */ __webpack_exports__["default"] = (REFS);

/***/ }),

/***/ "./src/components/campaign-select/search-field.js":
/*!********************************************************!*\
  !*** ./src/components/campaign-select/search-field.js ***!
  \********************************************************/
/*! exports provided: CampaignSearchField, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignSearchField", function() { return CampaignSearchField; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _search_results__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-results */ "./src/components/campaign-select/search-results.js");
/* harmony import */ var _refs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./refs */ "./src/components/campaign-select/refs.js");








/**
 * Block dependencies.
 */


/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    findDOMNode = _wp$element.findDOMNode,
    createRef = _wp$element.createRef;
var Dashicon = wp.components.Dashicon;
/**
 * Search for specific campaigns.
 */

var CampaignSearchField =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(CampaignSearchField, _Component);

  /**
   * Constructor.
   */
  function CampaignSearchField(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CampaignSearchField);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(CampaignSearchField).call(this, props));
    _this.state = {
      search_text: '',
      dropdown_open: false
    };
    _this.handleKeyDown = _this.handleKeyDown.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.updateSearchResults = _this.updateSearchResults.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.isDropdownOpen = _this.isDropdownOpen.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _refs__WEBPACK_IMPORTED_MODULE_8__["REFS"].search_results = createRef();
    return _this;
  }
  /**
   * Update state to reflect if dropdown is open.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CampaignSearchField, [{
    key: "isDropdownOpen",
    value: function isDropdownOpen(isOpen) {
      this.setState({
        dropdown_open: !!isOpen
      });
    }
    /**
     * Update search results.
     */

  }, {
    key: "updateSearchResults",
    value: function updateSearchResults(evt) {
      this.setState({
        search_text: evt.target.value
      });
    }
    /**
     * Handle key strokes.
     *
     * When a down arrow key is pressed, shift focus to first search result.
     */

  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(evt) {
      if ('ArrowDown' === evt.key) {
        evt.stopPropagation();
        var results = findDOMNode(_refs__WEBPACK_IMPORTED_MODULE_8__["REFS"].search_results.current);

        if (results) {
          results.firstElementChild.focus();
        }
      }
    }
    /**
     * Render the campaign search UI.
     */

  }, {
    key: "render",
    value: function render() {
      var divClass = 'charitable-campaigns-list-card__search-wrapper';
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: divClass + (this.state.dropdown_open ? ' ' + divClass + '--with-results' : '')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "charitable-campaigns-list-card__input-wrapper"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Dashicon, {
        icon: "search"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("input", {
        type: "search",
        className: "charitable-campaigns-list-card__search",
        value: this.state.search_text,
        placeholder: this.props.search_placeholder,
        tabIndex: "0",
        onKeyDown: this.handleKeyDown,
        onChange: this.updateSearchResults,
        ref: _refs__WEBPACK_IMPORTED_MODULE_8__["REFS"].search_field
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_search_results__WEBPACK_IMPORTED_MODULE_7__["CampaignSearchResults"], {
        search_string: this.state.search_text,
        add_or_remove_campaign_callback: this.props.add_or_remove_campaign_callback,
        selected_campaigns: this.props.selected_campaigns,
        is_dropdown_open_callback: this.isDropdownOpen,
        campaign_active_status: this.props.campaign_active_status
      }));
    }
  }]);

  return CampaignSearchField;
}(Component);
/* harmony default export */ __webpack_exports__["default"] = (CampaignSearchField);

/***/ }),

/***/ "./src/components/campaign-select/search-results-dropdown-element.js":
/*!***************************************************************************!*\
  !*** ./src/components/campaign-select/search-results-dropdown-element.js ***!
  \***************************************************************************/
/*! exports provided: CampaignSearchResultsDropdownElement, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignSearchResultsDropdownElement", function() { return CampaignSearchResultsDropdownElement; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./functions */ "./src/components/campaign-select/functions.js");








/**
 * Block dependencies
 */

/**
 * WordPress dependencies
 */

var Component = wp.element.Component;
var Dashicon = wp.components.Dashicon;
/**
 * Display an individual campaign search result.
 */

var CampaignSearchResultsDropdownElement =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(CampaignSearchResultsDropdownElement, _Component);

  /**
   * Constructor.
   */
  function CampaignSearchResultsDropdownElement(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CampaignSearchResultsDropdownElement);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(CampaignSearchResultsDropdownElement).call(this, props));
    _this.handleClick = _this.handleClick.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }
  /**
   * Add campaign to main list and change UI to show it was added.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CampaignSearchResultsDropdownElement, [{
    key: "handleClick",
    value: function handleClick() {
      this.props.add_or_remove_campaign_callback(this.props.campaign.id);
    }
    /**
     * Respond to keyboard events on dropdown elements.
     */

  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(evt) {
      if ('Enter' === evt.key) {
        this.props.add_or_remove_campaign_callback(this.props.campaign.id);
      }
    }
    /**
     * Render one result in the search results.
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var campaign = this.props.campaign;
      var icon = this.props.selected ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Dashicon, {
        icon: "yes"
      }) : null;

      var getCardClass = function getCardClass(campaign) {
        var cardClass = 'charitable-campaigns-list-card__content';

        if (_this2.props.selected) {
          cardClass += ' charitable-campaigns-list-card__content--added';
        }

        if (Object(_functions__WEBPACK_IMPORTED_MODULE_7__["hasCampaignThumbnail"])(campaign)) {
          cardClass += ' charitable-campaigns-list-card__content--has-thumbnail';
        }

        return cardClass;
      };

      var isDefault = this.props.index === 0 ? isDefault : '';
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: getCardClass(campaign),
        onClick: this.handleClick,
        onKeyDown: this.handleKeyDown,
        isDefault: true,
        tabIndex: this.props.index
      }, Object(_functions__WEBPACK_IMPORTED_MODULE_7__["getCampaignThumbnail"])(campaign), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("span", {
        className: "charitable-campaigns-list-card__content-item-name"
      }, campaign.title.rendered), icon);
    }
  }]);

  return CampaignSearchResultsDropdownElement;
}(Component);
/* harmony default export */ __webpack_exports__["default"] = (CampaignSearchResultsDropdownElement);

/***/ }),

/***/ "./src/components/campaign-select/search-results-dropdown.js":
/*!*******************************************************************!*\
  !*** ./src/components/campaign-select/search-results-dropdown.js ***!
  \*******************************************************************/
/*! exports provided: CampaignSearchResultsDropdown, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignSearchResultsDropdown", function() { return CampaignSearchResultsDropdown; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _search_results_dropdown_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-results-dropdown-element */ "./src/components/campaign-select/search-results-dropdown-element.js");
/* harmony import */ var _refs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./refs */ "./src/components/campaign-select/refs.js");







/**
 * Block dependencies.
 */


/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var Component = wp.element.Component;
var NavigableMenu = wp.components.NavigableMenu;
/**
 * Render the dropdown with campaign search results.
 */

var CampaignSearchResultsDropdown =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(CampaignSearchResultsDropdown, _Component);

  function CampaignSearchResultsDropdown() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CampaignSearchResultsDropdown);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(CampaignSearchResultsDropdown).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CampaignSearchResultsDropdown, [{
    key: "componentDidMount",

    /**
     * Set the state of the dropdown to open.
     */
    value: function componentDidMount() {
      this.props.is_dropdown_open_callback(true);
    }
    /**
     * Set the state of the dropdown to closed.
     */

  }, {
    key: "componentDidUnmount",
    value: function componentDidUnmount() {
      this.props.is_dropdown_open_callback(false);
    }
    /**
     * Render dropdown.
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          campaigns = _this$props.campaigns,
          add_or_remove_campaign_callback = _this$props.add_or_remove_campaign_callback,
          selected_campaigns = _this$props.selected_campaigns;
      var campaignElements = [];
      var index = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = campaigns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var campaign = _step.value;
          campaignElements.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_search_results_dropdown_element__WEBPACK_IMPORTED_MODULE_6__["CampaignSearchResultsDropdownElement"], {
            index: index,
            campaign: campaign,
            add_or_remove_campaign_callback: add_or_remove_campaign_callback,
            selected: selected_campaigns.includes(campaign.id)
          }));
          index += 1;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(NavigableMenu, {
        className: "charitable-campaigns-list-card__search-results",
        "aria-label": __('Campaign list', 'charitable'),
        ref: _refs__WEBPACK_IMPORTED_MODULE_7__["REFS"].search_results
      }, campaignElements);
    }
  }]);

  return CampaignSearchResultsDropdown;
}(Component);
/* harmony default export */ __webpack_exports__["default"] = (CampaignSearchResultsDropdown);

/***/ }),

/***/ "./src/components/campaign-select/search-results.js":
/*!**********************************************************!*\
  !*** ./src/components/campaign-select/search-results.js ***!
  \**********************************************************/
/*! exports provided: CampaignSearchResults, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignSearchResults", function() { return CampaignSearchResults; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _search_results_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-results-dropdown */ "./src/components/campaign-select/search-results-dropdown.js");
/* harmony import */ var _campaign_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./campaign-data */ "./src/components/campaign-select/campaign-data.js");








/**
 * Block dependencies.
 */


/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var Component = wp.element.Component;
var _wp = wp,
    apiFetch = _wp.apiFetch;
/**
 * Display campaign search results.
 */

var CampaignSearchResults =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(CampaignSearchResults, _Component);

  /**
   * Constructor.
   */
  function CampaignSearchResults(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CampaignSearchResults);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(CampaignSearchResults).call(this, props));
    _this.state = {
      filtered: [],
      campaign_count: null,
      campaigns: [],
      query: '',
      loaded: false,
      controllers: []
    };
    _this.getQuery = _this.getQuery.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.updateResults = _this.updateResults.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }
  /**
   * Fetch the first 100 campaigns into memory, for faster search.
   *
   * We also record how many campaigns there are, in case there are more than 100.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CampaignSearchResults, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var self = this;
      apiFetch({
        path: '/wp/v2/campaigns?_embed&per_page=100&active_status=' + this.props.campaign_active_status,
        parse: false
      }).then(function (response) {
        response.json().then(function (campaigns) {
          self.setState({
            campaigns: campaigns,
            loaded: true,
            campaign_count: response.headers.get('X-WP-Total')
          });
          self.updateResults();
        });
      });
    }
    /**
     * Update the preview when component is updated.
     */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.search_string !== this.state.query) {
        this.updateResults();
      }
    }
    /**
     * Get the endpoint to run the query.
     *
     * @return string
     */

  }, {
    key: "getQuery",
    value: function getQuery() {
      if (!this.props.search_string.length) {
        return '';
      }

      return '/wp/v2/campaigns?_embed&per_page=10&search=' + this.props.search_string;
    }
    /**
     * Update the search results.
     */

  }, {
    key: "updateResults",
    value: function updateResults() {
      var retry = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      // Campaigns haven't loaded yet, so retry in 500ms.
      if (!this.state.loaded) {
        // Avoid retrying forever.
        if (retry < 25) {
          retry += 1;
          return window.setTimeout(this.updateResults, 500, retry);
        }

        this.setState({
          loaded: true
        });
      }

      var query = this.props.search_string;
      var queryLowercase = query.toLowerCase();
      var filtered = this.state.campaigns.filter(function (campaign) {
        return campaign.title.rendered.toLowerCase().includes(queryLowercase);
      });
      this.setState({
        query: query,
        filtered: filtered
      });
    }
    /**
     * Render.
     */

  }, {
    key: "render",
    value: function render() {
      if (!this.state.loaded || !this.state.query.length) {
        return null;
      }

      if (0 === this.state.filtered.length) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("span", {
          className: "charitable-campaign-list-card__search-no-results"
        }, " ", __('No campaigns found'), " ");
      } // Populate the cache.


      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.state.filtered[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var campaign = _step.value;
          _campaign_data__WEBPACK_IMPORTED_MODULE_8__["CAMPAIGN_DATA"][campaign.id] = campaign;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_search_results_dropdown__WEBPACK_IMPORTED_MODULE_7__["CampaignSearchResultsDropdown"], {
        campaigns: this.state.filtered,
        add_or_remove_campaign_callback: this.props.add_or_remove_campaign_callback,
        selected_campaigns: this.props.selected_campaigns,
        is_dropdown_open_callback: this.props.is_dropdown_open_callback
      });
    }
  }]);

  return CampaignSearchResults;
}(Component);
/* harmony default export */ __webpack_exports__["default"] = (CampaignSearchResults);

/***/ }),

/***/ "./src/components/campaign-select/selected-result.js":
/*!***********************************************************!*\
  !*** ./src/components/campaign-select/selected-result.js ***!
  \***********************************************************/
/*! exports provided: CampaignSelectedResults, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignSelectedResults", function() { return CampaignSelectedResults; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./functions */ "./src/components/campaign-select/functions.js");
/* harmony import */ var _campaign_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./campaign-data */ "./src/components/campaign-select/campaign-data.js");








/**
 * Block dependencies
 */


/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var Component = wp.element.Component;
var _wp = wp,
    apiFetch = _wp.apiFetch;
var Dashicon = wp.components.Dashicon;
/**
 * Display selected campaigns.
 */

var CampaignSelectedResults =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(CampaignSelectedResults, _Component);

  /**
   * Constructor
   */
  function CampaignSelectedResults(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CampaignSelectedResults);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(CampaignSelectedResults).call(this, props));
    _this.state = {
      query: '',
      loaded: false
    };
    _this.getQuery = _this.getQuery.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.updateCampaignCache = _this.updateCampaignCache.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }
  /**
   * Get the preview when component is first loaded.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CampaignSelectedResults, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateCampaignCache();
    }
    /**
     * Update the preview when component is updated.
     */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.state.loaded && this.getQuery() !== this.state.query) {
        this.updateCampaignCache();
      }
    }
    /**
     * Get the endpoint for the current state of the component.
     */

  }, {
    key: "getQuery",
    value: function getQuery() {
      if (!this.props.selected_campaigns.length) {
        return '';
      } // Determine which campaigns are not already in the cache and only fetch uncached campaigns.


      var uncachedCampaigns = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.props.selected_campaigns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var campaignId = _step.value;

          if (!_campaign_data__WEBPACK_IMPORTED_MODULE_8__["CAMPAIGN_DATA"].hasOwnProperty(campaignId)) {
            uncachedCampaigns.push(campaignId);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return uncachedCampaigns.length ? '/wp/v2/campaigns?_embed&include=' + uncachedCampaigns.join(',') : '';
    }
    /**
     * Add newly fetched campaigns to the cache.
     */

  }, {
    key: "updateCampaignCache",
    value: function updateCampaignCache() {
      var self = this;
      var query = this.getQuery();
      self.setState({
        query: query,
        loaded: false
      }); // Add new campaigns to cache.

      if (query.length) {
        apiFetch({
          path: query
        }).then(function (campaigns) {
          if (campaigns.length) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = campaigns[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var campaign = _step2.value;
                _campaign_data__WEBPACK_IMPORTED_MODULE_8__["CAMPAIGN_DATA"][campaign.id] = campaign;
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          }

          console.log(campaigns);
          self.setState({
            loaded: true
          });
        });
      }
    }
    /**
     * Render.
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          selected_campaigns = _this$props.selected_campaigns,
          add_or_remove_campaign_callback = _this$props.add_or_remove_campaign_callback;
      var campaignElements = [];
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        var _loop = function _loop() {
          var campaignId = _step3.value;

          // Skip products that aren't in the cache yet or failed to fetch.
          if (!_campaign_data__WEBPACK_IMPORTED_MODULE_8__["CAMPAIGN_DATA"].hasOwnProperty(campaignId)) {
            return "continue";
          }

          var campaignData = _campaign_data__WEBPACK_IMPORTED_MODULE_8__["CAMPAIGN_DATA"][campaignId];
          campaignElements.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("li", {
            className: "charitable-campaigns-list-card__item campaign",
            key: campaignData.id + '-specific-select-edit'
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
            className: "charitable-campaigns-list-card__content"
          }, Object(_functions__WEBPACK_IMPORTED_MODULE_7__["getCampaignThumbnail"])(campaignData), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("span", {
            className: "charitable-campaigns-list-card__content-item-name"
          }, campaignData.title.rendered), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("button", {
            type: "button",
            id: 'campaign-' + campaignData.id,
            onClick: function onClick() {
              add_or_remove_campaign_callback(campaignData.id);
            }
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Dashicon, {
            icon: "no-alt"
          })))));
        };

        for (var _iterator3 = selected_campaigns[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _ret = _loop();

          if (_ret === "continue") continue;
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      var header = null;
      var campaigns = null;

      if (selected_campaigns.length > 0) {
        campaigns = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("ul", {
          className: "charitable-campaigns-list-card__selected-results-list"
        }, campaignElements.length ? campaignElements : __('Loading...', 'charitable'));

        if (1 === selected_campaigns.length) {
          header = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("h4", null, __('Selected campaign', 'charitable'));
        } else {
          header = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("h4", null, __('Selected campaigns', 'charitable'));
        }
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "charitable-campaigns-list-card__selected-results-wrapper"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        role: "menu",
        className: "charitable-campaigns-list-card__selected-results",
        "aria-orientation": "vertical",
        "aria-label": __('Selected campaigns', 'charitable')
      }, header, campaigns));
    }
  }]);

  return CampaignSelectedResults;
}(Component);
/* harmony default export */ __webpack_exports__["default"] = (CampaignSelectedResults);

/***/ }),

/***/ "./src/components/category-select/index.js":
/*!*************************************************!*\
  !*** ./src/components/category-select/index.js ***!
  \*************************************************/
/*! exports provided: CampaignCategorySelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignCategorySelect", function() { return CampaignCategorySelect; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);









/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var Component = wp.element.Component;
var _wp = wp,
    apiFetch = _wp.apiFetch;
/**
 * Display a list of campaign categories with checkboxes, counts and a search filter.
 */

var CampaignCategorySelect =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(CampaignCategorySelect, _Component);

  /**
   * Constructor.
   */
  function CampaignCategorySelect(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, CampaignCategorySelect);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(CampaignCategorySelect).call(this, props));
    _this.state = {
      selectedCategories: props.selected_categories,
      firstLoad: true
    };
    _this.checkboxChange = _this.checkboxChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)); //this.accordionToggle = this.accordionToggle.bind( this );
    //this.filterResults   = this.filterResults.bind( this );

    _this.setFirstLoad = _this.setFirstLoad.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    return _this;
  }
  /**
   * Handle checkbox toggle.
   *
   * @param Checked? boolean checked
   * @param Categories array categories
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(CampaignCategorySelect, [{
    key: "checkboxChange",
    value: function checkboxChange(checked, categories) {
      var selectedCategories = this.state.selectedCategories;
      selectedCategories = selectedCategories.filter(function (category) {
        return !categories.includes(category);
      });

      if (checked) {
        var _selectedCategories;

        (_selectedCategories = selectedCategories).push.apply(_selectedCategories, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(categories));
      }

      this.setState({
        selectedCategories: selectedCategories
      });
      this.props.update_category_setting_callback(selectedCategories);
    }
    /**
     * Update firstLoad state.
     *
     * @param Booolean loaded
     */

  }, {
    key: "setFirstLoad",
    value: function setFirstLoad(loaded) {
      this.setState({
        firstLoad: !!loaded
      });
    }
    /**
     * Render the list of categories and the search input.
     */

  }, {
    key: "render",
    value: function render() {
      var label = null;

      if (this.props.label.length) {
        label = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("label", null, this.props.label);
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: "charitable-campaign-categories-list"
      }, label, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(CampaignCategoryList, {
        selectedCategories: this.state.selectedCategories,
        checkboxChange: this.checkboxChange,
        firstLoad: this.state.firstLoad,
        setFirstLoad: this.setFirstLoad
      }));
    }
  }]);

  return CampaignCategorySelect;
}(Component);
/**
 * Fetch and build a tree of campaign categories.
 */

var CampaignCategoryList =
/*#__PURE__*/
function (_Component2) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(CampaignCategoryList, _Component2);

  /**
   * Constructor.
   */
  function CampaignCategoryList(props) {
    var _this2;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, CampaignCategoryList);

    _this2 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(CampaignCategoryList).call(this, props));
    _this2.state = {
      categories: [],
      loaded: false,
      query: ''
    };
    _this2.updatePreview = _this2.updatePreview.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this2));
    _this2.getQuery = _this2.getQuery.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this2));
    return _this2;
  }
  /**
   * Get the preview when component is first loaded.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(CampaignCategoryList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.getQuery() !== this.state.query) {
        this.updatePreview();
      }
    }
    /**
     * Update the preview when component is updated.
     */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.getQuery() !== this.state.query && this.state.loaded) {
        this.updatePreview();
      }
    }
    /**
     * Get the endpoint for the current state of the component.
     *
     * @return string
     */

  }, {
    key: "getQuery",
    value: function getQuery() {
      var endpoint = '/wp/v2/campaignCategories';
      return endpoint;
    }
    /**
     * Update the preview with the latest settings.
     */

  }, {
    key: "updatePreview",
    value: function updatePreview() {
      var self = this;
      var query = this.getQuery();
      self.setState({
        loaded: false
      });
      apiFetch({
        path: query
      }).then(function (categories) {
        self.setState({
          categories: categories,
          loaded: true,
          query: query
        });
      });
    }
    /**
     * Render.
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          selectedCategories = _this$props.selectedCategories,
          checkboxChange = _this$props.checkboxChange;

      if (!this.state.loaded) {
        return __('Loading categories', 'charitable');
      }

      if (0 === this.state.categories.length) {
        return __('No categories found', 'charitable');
      }

      var handleCategoriesToCheck = function handleCategoriesToCheck(evt, parent, categories) {
        var slugs = getCategoryChildren(parent, categories).map(function (category) {
          return category.slug;
        });
        slugs.push(parent.slug);
        checkboxChange(evt.target.checked, slugs);
      };

      var getCategoryChildren = function getCategoryChildren(parent, categories) {
        var children = [];
        categories.filter(function (category) {
          return category.parent === parent.id;
        }).forEach(function (category) {
          children.push(category);
          children.push.apply(children, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(getCategoryChildren(category, categories)));
        });
        return children;
      };

      var CategoryTree = function CategoryTree(_ref) {
        var categories = _ref.categories,
            parent = _ref.parent;
        var filteredCategories = categories;
        return filteredCategories.length > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("ul", null, filteredCategories.map(function (category) {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("li", {
            key: category.id,
            className: "charitable-category-list-card__item"
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("label", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("input", {
            type: "checkbox",
            id: 'campaign-category-' + category.slug,
            value: category.slug,
            checked: selectedCategories.includes(category.slug),
            onChange: function onChange(evt) {
              return handleCategoriesToCheck(evt, category, categories);
            }
          }), " ", category.name, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("span", {
            className: "charitable-category-list-card__taxonomy-count"
          }, category.count)));
        }));
      };

      var categoriesData = this.state.categories;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: "charitable-category-list-card__results"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(CategoryTree, {
        categories: categoriesData,
        parent: 0
      }));
    }
  }]);

  return CampaignCategoryList;
}(Component);

/***/ }),

/***/ "./src/components/filter/index.js":
/*!****************************************!*\
  !*** ./src/components/filter/index.js ***!
  \****************************************/
/*! exports provided: Filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return Filter; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);







/**
 * WordPress dependencies.
 */
var __ = wp.i18n.__;
var Component = wp.element.Component;
var Dashicon = wp.components.Dashicon;
/**
 * Display a filter section.
 *
 * The filter shows a checkbox along with the filter title, and when
 * checked, the filter shows the filter settings.
 */

var Filter =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Filter, _Component);

  /**
   * Constructor.
   */
  function Filter(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Filter);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Filter).call(this, props));
    _this.state = {
      enabled: props.enabled
    };
    return _this;
  }
  /**
   * Render the filter.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Filter, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      /**
       * Toggle filter.
       */
      var toggleFilter = function toggleFilter() {
        _this2.setState({
          enabled: !_this2.state.enabled
        });
      };

      var filterStyles = {};
      var icon = 'arrow-up-alt2';

      if (!this.state.enabled) {
        filterStyles.display = 'none';
        icon = 'arrow-down-alt2';
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: 'charitable-block-settings-filter' + (this.state.enabled ? ' is-opened' : '')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "charitable-block-settings-filter-toggle"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("h3", {
        className: "charitable-block-settings-filter-header"
      }, this.props.title, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("button", {
        onClick: toggleFilter,
        className: "charitable-block-settings-filter-toggle__accordion-button",
        type: "button"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Dashicon, {
        icon: icon
      })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "charitable-block-settings-filter-settings",
        style: filterStyles
      }, this.props.children));
    }
  }]);

  return Filter;
}(Component);

/***/ }),

/***/ "@wordpress/blockEditor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!***************************************!*\
  !*** external {"this":["wp","data"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=charitable-blocks.js.map