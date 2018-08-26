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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/addUser.js":
/*!************************!*\
  !*** ./app/addUser.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./app/constants.js\");\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ \"./app/user.js\");\n\n\n\n\nclass AddUser {\n\n  \tfieldsBasicAddUserInfo() {\n  \t\tlet open = '<div class=\"main-info-holder\">';\n  \t\tlet addPhoto = `\n        \t<div class=\"edit-foto\">\n          \t\t<button class=\"add-foto-btn\"><span class=\"glyphicon glyphicon-plus-sign\" aria-hidden=\"true\"></span>\n            \t<span>add foto</span></button>\n        \t</div>\n  \t\t`;\n  \t\tlet editBasicField = _constants__WEBPACK_IMPORTED_MODULE_0__[\"basicUserInfo\"].reduce((start, elem) => {\n          start +=`\n            <div class=\"edit-field add-btn\">\n            \t\t\t<span class=\"glyphicon glyphicon-plus-sign\" aria-hidden=\"true\"></span>\n            \t\t\t<input type=\"text\" class=\"glyphicon-plus-sign ${elem.fieldName}\" placeholder=\"${elem.placeholder}\"/>\n\t\t\t\t\t\t\t\t\n            </div>\n          `;\n  \t\t\treturn start;\n  \t\t},'');\n  \t\tlet resEditBasicField = `${addPhoto} ${open} ${editBasicField}</div>`;\n  \t\treturn resEditBasicField;\n  \t};\n\n  \tfieldAdditionalAddUserInfo() {\n  \t\tlet open = `\n        \t<div class=\"scroll-holder\">\n          \t\t<div class=\"edit-info\">\n  \t\t`;\n  \t\tlet editAdditionalField = _constants__WEBPACK_IMPORTED_MODULE_0__[\"additionalUserInfo\"].reduce((start, elem) => {\n       /* let addClass =  elem.replace(/\\s/g, '_');*/\n  \t\t\tstart += `\n            \t<div class=\"edit-field add-btn\">\n              \t<span class=\"glyphicon glyphicon-plus-sign\" aria-hidden=\"true\"></span>\n                \t<input type=\"text\" class=\"glyphicon-plus-sign ${elem.fieldName}\" placeholder=\"${elem.placeholder}\"/>\n            \t</div>\n  \t\t\t`;\n  \t\t\treturn start;\n  \t\t}, '');\n  \t\tlet buttonDelContacts = `\n            <div class=\"edit-field\">\n              \t<button href=\"#\" class=\"delete-contact\">delete contact</button>\n            </div>\n  \t\t`;\n  \t\tlet resEditAdditionalField = `${open} ${editAdditionalField}${buttonDelContacts}</div>`;\n  \t\treturn resEditAdditionalField;\n  \t};\n\n    addEvents() {\n      let delEnteredData = document.querySelector('button.delete-contact');\n      delEnteredData.addEventListener('click', function() {\n        let input = document.querySelectorAll('input[placeholder]');\n        [...input].forEach(elem => {\n          elem.value = '';\n        })\n      });\n      let addUser = document.querySelector('button.done-btn');\n      addUser.addEventListener('click', function() {\n        let input = document.querySelectorAll('input[placeholder]');\n      \tlet objUser = [...input].reduce((done, elem) => {\n      \t\tif(elem.className === 'glyphicon-plus-sign email') {\n      \t\t\tdone.email = elem.value;\n\t\t\t\t\t} else if(elem.className === 'glyphicon-plus-sign firstName') {\n      \t\t  done.fullName = `${elem.value} `;\n          } else if(elem.className === 'glyphicon-plus-sign lastName') {\n            done.fullName += elem.value;\n          } else if(elem.className === 'glyphicon-plus-sign phone') {\n            done.phone = elem.value;\n          };\n      \t\treturn done;\n\t\t\t\t}, {});\n\n        fetch(_constants__WEBPACK_IMPORTED_MODULE_0__[\"API_URL\"], {\n          method: 'POST',\n          headers: {\n            'Content-Type': 'application/json'\n          },\n          body: JSON.stringify(objUser)\n        })\n          .then(response => response.json())\n          .then(data => {\n            let user = new _user__WEBPACK_IMPORTED_MODULE_1__[\"default\"](data);\n            user.renderUser();\n          })\n\t\t\t});\n    }\n\n  \trenderAddUser() {\n  \t\tlet captionAddUser = document.querySelector('.container.top-radius');\n  \t\tcaptionAddUser.innerHTML = `\n   \t\t\t<nav class=\"user-top-line\">\n          \t\t<a href=\"user.html\">Cancel</a>\n          \t\t<button class = \"done-btn\">Done</button>\n        \t\t</nav>\n  \t\t`;\n  \t\tlet mainContainer = document.querySelector('main .container');\n  \t\tmainContainer.innerHTML = `\n        \t\t<div class=\"edit-main-info\">\n        \t\t${this.fieldsBasicAddUserInfo()}\n        \t\t</div>\n        \t\t${this.fieldAdditionalAddUserInfo()}\n  \t\t`;\n      this.addEvents();\n  \t};\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddUser);\n\n\n//# sourceURL=webpack:///./app/addUser.js?");

/***/ }),

/***/ "./app/constants.js":
/*!**************************!*\
  !*** ./app/constants.js ***!
  \**************************/
/*! exports provided: API_URL, data, additionalOptions, buttonsContent, options, basicUserInfo, additionalUserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_URL\", function() { return API_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"data\", function() { return data; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"additionalOptions\", function() { return additionalOptions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buttonsContent\", function() { return buttonsContent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"options\", function() { return options; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"basicUserInfo\", function() { return basicUserInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"additionalUserInfo\", function() { return additionalUserInfo; });\nconst API_URL = 'http://easycode-js.herokuapp.com/Butenko_N/users';\nlet data = {users: []};\nconst additionalOptions = [\n  'Notes', 'Send message', 'Share contact', 'Add to favorites', 'Share my location', 'Block this caller'\n];\nconst buttonsContent = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];\nconst options = [\n  {option: 'message', class: 'glyphicon-comment'},\n\t{option: 'call', class: 'glyphicon-earphone'},\n\t{option: 'video', class: 'glyphicon-facetime-video'},\n\t{option: 'mail', class: 'glyphicon-envelope'}\n];\nconst basicUserInfo = [\n  {placeholder: 'First Name', fieldName: 'firstName'},\n  {placeholder: 'Last Name', fieldName: 'lastName'},\n  {placeholder: 'Mobile phone', fieldName: 'phone'},\n  {placeholder: 'Email', fieldName: 'email'}\n];\nconst additionalUserInfo = [\n  {placeholder: 'add home phone', fieldName: 'addHomePhone'},\n  {placeholder: 'company', fieldName: 'company'},\n  {placeholder: 'add address', fieldName: 'addAddres'},\n  {placeholder: 'add birthday', fieldName: 'addBirthday'},\n  {placeholder: 'add social profile', fieldName: 'addSocialProfile'},\n  {placeholder: 'add field', fieldName: 'addField'}\n];\n\n\n//# sourceURL=webpack:///./app/constants.js?");

/***/ }),

/***/ "./app/editContact.js":
/*!****************************!*\
  !*** ./app/editContact.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./app/constants.js\");\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ \"./app/user.js\");\n\n\n\nclass EditContact {\n\tconstructor(user) {\n\t\tthis.user = user;\n\t};\n\n\tfieldsBasicUserInfo() {\n\t\tlet open = '<div class=\"main-info-holder\">';\n\t\tlet editBasicField = _constants__WEBPACK_IMPORTED_MODULE_0__[\"basicUserInfo\"].reduce((start, elem) => {\n\t\t\tstart += `\n          \t\t<div class=\"edit-field add-btn\">\n            \t\t<span class=\"glyphicon glyphicon-plus-sign\" aria-hidden=\"true\"></span>\n            \t\t<input type=\"text\" class=\"glyphicon-plus-sign ${elem.fieldName}\" placeholder=\"${elem.placeholder}\"/>\n          \t\t</div>\n\t\t\t`;\n\t\t\treturn start;\n\t\t}, '');\n\t\tlet resEditBasicField = `${open} ${editBasicField} </div>`;\n\t\treturn resEditBasicField;\n\t};\n\n\tfieldAdditionalUserInfo() {\n\t\tlet open = `\n\t\t<div class=\"scroll-holder\">\n        \t<div class=\"edit-info\">\n        `;\n        let editAdditionalField = _constants__WEBPACK_IMPORTED_MODULE_0__[\"additionalUserInfo\"].reduce((start, elem) => {\n        \tstart += `\n        \t\t<div class=\"edit-field add-btn\">\n        \t\t\t<span class=\"glyphicon glyphicon-plus-sign\" aria-hidden=\"true\"></span>\n            \t<input type=\"text\" class=\"glyphicon-plus-sign ${elem.fieldName}\" placeholder=\"${elem.placeholder}\"/>\n        \t\t</div>\n        \t`;\n        \treturn start;\n        },'');\n        let buttonDelContacts = `\n            <div class=\"edit-field\">\n              <button href=\"#\" class=\"delete-contact\">delete contact</button>\n            </div>\n        `;\n        let resEditAdditionalField = `${open} ${editAdditionalField} ${buttonDelContacts} </div></div>`;\n        return resEditAdditionalField;\n\t};\n\n\taddEvents() {\n\t\tlet self = this;\n\t\tlet saveChanges = document.querySelector('button.editContacts');\n\t\tsaveChanges.addEventListener('click', function() {\n      let input = document.querySelectorAll('input[placeholder]');\n      let objUserForFetch = [...input].reduce((done, elem) => {\n        if(elem.className === 'glyphicon-plus-sign email') {\n          done.email = elem.value;\n        } else if(elem.className === 'glyphicon-plus-sign firstName') {\n          done.fullName = `${elem.value} `;\n        } else if(elem.className === 'glyphicon-plus-sign lastName') {\n          done.fullName += elem.value;\n        } else if(elem.className === 'glyphicon-plus-sign phone') {\n          done.phone = elem.value;\n        };\n        return done;\n      }, {});\n\n      let url = `${_constants__WEBPACK_IMPORTED_MODULE_0__[\"API_URL\"]}/${self.user.id}`;\n      fetch(url, {\n        method: 'PATCH',\n        headers: {\n          'Content-Type': 'application/json'\n        },\n\t\t\t\tbody: JSON.stringify(objUserForFetch)\n      })\n\t\t\t\t.then((user) => {\n\t\t\t\t\treturn user.json();\n\t\t\t\t})\n        .then(userJson => {\n          let userChenges = new _user__WEBPACK_IMPORTED_MODULE_1__[\"default\"](userJson);\n          userChenges.renderUser()\n\t\t\t\t})\n\t\t});\n\t};\n\n\trenderEditContact() {\n\t\tlet captionEditContact = document.querySelector('.container.top-radius');\n\t\tcaptionEditContact.innerHTML = `\n\t      \t<nav class=\"user-top-line\">\n\t        \t<a href=\"user.html\">Cancel</a>\n\t        \t<button  type = \"submit\" form = \"edit-contact\" formaction=\"#\" formmethod=\"get\" class = \"done-btn editContacts\">Done</button>\n\t      \t</nav>\n\t\t`;\n\t\tlet mainContainer = document.querySelector('main .container');\n\t\tmainContainer.innerHTML = `\n\t\t\t<div class=\"edit-main-info\">\n \t\t\t\t<div class=\"edit-foto\"><img src=\"user_img.png\" alt=\"#\" class=\" user-img img-circle center-block\"></div>\n\t\t\t\t\t${this.fieldsBasicUserInfo()}\n\t\t\t\t\t</div>\n\t\t\t\t\t${this.fieldAdditionalUserInfo()}\n\t\t`;\n    let input = document.querySelectorAll('input.glyphicon-plus-sign');\n    [...input].forEach((elem) => {\n    \tif(elem.placeholder == \"First Name\") {\n    \t\telem.value = this.user.name;\n\t\t\t} else if(elem.placeholder == \"Last Name\") {\n        elem.value = this.user.lastName;\n\t\t\t} else if(elem.placeholder == \"Mobile phone\") {\n        elem.value = this.user.phone;\n\t\t\t} else if(elem.placeholder == \"Email\") {\n        elem.value = this.user.email;\n\t\t\t};\n\t\t});\n    this.addEvents();\n\t};\n\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditContact);\n\n\n//# sourceURL=webpack:///./app/editContact.js?");

/***/ }),

/***/ "./app/headerAndFooter.js":
/*!********************************!*\
  !*** ./app/headerAndFooter.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass HeaderAndFooter {\n\tconstructor(caption) {\n\t\tthis.caption = caption;\n\t};\n\n\tcreateHeader() {\n\t\tlet header = `\n\t\t  \t<header class=\"header\">\n    \t\t\t<div class=\"container top-radius\">\n      \t\t\t\t<h2>${this.caption}</h2>\n    \t\t\t</div>\n  \t\t\t</header>\n  \t\t`;\n  \t\treturn header;\n\t};\n\n  renderLink({href, icon}) {\n    return `\n\t\t\t\t<a href=\"${href}\" class=\"tab ${href}\">\n\t\t\t\t\t\t <span class=\"glyphicon glyphicon-${icon}\" aria-hidden=\"true\"></span>\n\t\t\t\t\t\t\t<span class = \"tab-text\">${href}</span>\n\t\t\t\t</a>\n\t\t\t`;\n  };\n\n  createFooter() {\n    return `\n\t\t\t<footer class=\"footer\">\n\t\t\t\t\t<div class=\"container bottom-radius\">\n\t\t\t\t\t\t\t<nav class=\"main-nav\">\n\t\t\t\t\t\t\t${ this.renderLink({ href:'Contacts', icon: 'search' }) }\n\t\t\t\t\t\t\t${ this.renderLink({ href:'Keypad', icon: 'th' }) }\n\t\t\t\t\t\t\t${ this.renderLink({ href:'Edit contact',  icon: 'pencil' }) }\n\t\t\t\t\t\t\t${ this.renderLink({ href:'User',  icon: 'user' }) }\n\t\t\t\t\t\t\t${ this.renderLink({ href:'Add user',  icon: 'plus' }) }\n\t\t\t\t\t\t\t</nav>\n\t\t\t\t <div>\n\t\t\t</footer> \n\t\t\t`;\n  };\n\n\tcreateMain() {\n\t\treturn `\n\t\t  \t<main class=\"main\">\n    \t\t\t<div class=\"container\">\n    \t\t\t</div>\n  \t\t\t</main>\n    \t`;\n\t};\n\n\trenderTemplate() {\n\t\tdocument.body.innerHTML = this.createHeader() + this.createMain() + this.createFooter();\n\t};\n\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeaderAndFooter);\n\n\n//# sourceURL=webpack:///./app/headerAndFooter.js?");

/***/ }),

/***/ "./app/keypad.js":
/*!***********************!*\
  !*** ./app/keypad.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./app/constants.js\");\n/* harmony import */ var _addUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addUser */ \"./app/addUser.js\");\n\n\n\nclass Keypad {\n  constructor() {\n    this.monitorInput = this.monitorInput.bind(this);\n    this.keyboardInput = this.keyboardInput.bind(this);\n  }\n\n\tcreateNumberField() {\n\t\treturn `\n      \t\t<div class=\"number\">\n        \t\t<span class=\"glyphicon glyphicon-plus-sign\" aria-hidden=\"true\"></span>\n        \t\t<input type =\"text\" class=\"numbers\">\n        \t\t<span class=\"glyphicon glyphicon-circle-arrow-left\" aria-hidden=\"true\"></span>\n      \t\t</div>\n\t\t`;\n\t};\n\n\tcreateKeypadHolder() {\n\t\tlet open = '<div class=\"keypad-holder\">';\n\t\tlet createButtons = _constants__WEBPACK_IMPORTED_MODULE_0__[\"buttonsContent\"].reduce((start, elem) => {\n\t\t\tstart += `<button class=\"key\">${elem}</button>`;\n\t\t\treturn start;\n\t\t}, '');\n\t\tlet createButtonCall = \n\t\t\t'<button class=\"key\"> <span class=\"glyphicon glyphicon-earphone\" aria-hidden=\"true\"></span></button>';\n\t\tlet resKeypadHolder = `${open}${createButtons}${createButtonCall}</div>`;\n\t\treturn resKeypadHolder;\n\t};\n\n\trenderKeypad() {\n\t\tlet captionUser = document.querySelector('.container.top-radius');\n\t\tcaptionUser.innerHTML = `<h2>Keypad</h2>`;\n\t\tlet contentKeypad = this.createNumberField() + this.createKeypadHolder();\n\t\tlet mainContainer = document.querySelector('main .container');\n\t\tmainContainer.innerHTML = contentKeypad;\n\t\tthis.addEvents();\n\t};\n\n  convertNumber(str) {\n    let input =  document.querySelector('input.numbers');\n    if(input.value.length === 0) {\n      input.value += `(${str}`;\n    } else if(input.value.length === 4) {\n      input.value += `)-${str}`;\n    } else if(input.value.length === 8) {\n      input.value += `-${str}`;\n    } else if(input.value.length === 11) {\n      input.value += `-${str}`;\n    } else if(input.value.length > 14) {\n      return;\n    } else {\n      input.value += str;\n    };\n  };\n\n  monitorInput(e) {\n    if(e.target.tagName === 'BUTTON') {\n      this.convertNumber(e.target.textContent);\n    };\n  };\n\n  keyboardInput(event) {\n    event.preventDefault();\n    if(event.keyCode >= 48 && event.keyCode <=57) {\n      this.convertNumber(event.key);\n    };\n  };\n\n\taddEvents() {\n\t\tlet keypadHolder = document.querySelector('div.keypad-holder');\n  \t\tkeypadHolder.addEventListener('click', this.monitorInput);\n  \t\tlet deletNum = document.querySelector('.glyphicon-circle-arrow-left');\n  \t\tdeletNum.addEventListener('click', function(e) {\n  \t\t\tlet input =  document.querySelector('input.numbers');\n  \t\t\tinput.value = input.value.slice(0, -1);\n  \t\t});\n  \t\tlet input = document.querySelector('input.numbers');\n  \t\tinput.addEventListener('keypress', this.keyboardInput);\n\t\tlet addNum = document.querySelector('.glyphicon-plus-sign');\n\t\taddNum.addEventListener('click', function(e) {\n\t\t\tlet addUser = new _addUser__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\t\t\taddUser.renderAddUser();\n\t\t\tlet placeNum = document.querySelector('.Mobile_phone');\n\t\t\tplaceNum.value = `+38 ${input.value}`;\n\t\t});\n\t};\n\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Keypad);\n\n\n//# sourceURL=webpack:///./app/keypad.js?");

/***/ }),

/***/ "./app/main.js":
/*!*********************!*\
  !*** ./app/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _headerAndFooter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./headerAndFooter */ \"./app/headerAndFooter.js\");\n/* harmony import */ var _userContacts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userContacts */ \"./app/userContacts.js\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./app/router.js\");\n\n\n\n\nlet headerAndFooter = new _headerAndFooter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Contacts');\nheaderAndFooter.renderTemplate();\n\nlet usersContacts = new _userContacts__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nusersContacts.loadData();\n\nlet router = new _router__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nrouter.run();\n\n\n//# sourceURL=webpack:///./app/main.js?");

/***/ }),

/***/ "./app/router.js":
/*!***********************!*\
  !*** ./app/router.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _userContacts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userContacts */ \"./app/userContacts.js\");\n/* harmony import */ var _keypad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keypad */ \"./app/keypad.js\");\n/* harmony import */ var _addUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addUser */ \"./app/addUser.js\");\n\n\n\n\nclass Router {\n  constructor() {\n    this.buttonKeypad = document.querySelector('a.Keypad');\n    this.buttonEditContact = document.querySelector('a.Edit');\n    this.buttonUser = document.querySelector('a.User');\n    this.buttonAddUser = document.querySelector('a.Add');\n    this.buttonContacts = document.querySelector('a.Contacts');\n  };\n\n  run() {\n     this.buttonKeypad.addEventListener('click', function(event) {\n       event.preventDefault();\n       let keypad = new _keypad__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n       keypad.renderKeypad();\n     });\n\n     this.buttonEditContact.addEventListener('click', function(event) {\n       event.preventDefault();\n       /*  let editContact = new EditContact();\n         editContact.renderEditContact();*/\n     });\n\n     this.buttonUser.addEventListener('click', function(event) {\n       event.preventDefault();\n       /*  let user = new User();\n         user.renderUser();*/\n     });\n\n     this.buttonAddUser.addEventListener('click', function(event) {\n       event.preventDefault();\n       let addUser = new _addUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n       addUser.renderAddUser();\n     });\n\n     this.buttonContacts.addEventListener('click', function(event) {\n       event.preventDefault();\n       let contacts = new _userContacts__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n       contacts.loadData();\n     });\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Router);\n\n\n//# sourceURL=webpack:///./app/router.js?");

/***/ }),

/***/ "./app/user.js":
/*!*********************!*\
  !*** ./app/user.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./app/constants.js\");\n/* harmony import */ var _editContact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editContact */ \"./app/editContact.js\");\n/* harmony import */ var _userContacts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userContacts */ \"./app/userContacts.js\");\n\n\n\n\n\nclass User {\n\tconstructor(user) {\n\t  Object.keys(user).forEach(key => {\n\t    if(key === '_id') {\n\t      this['id'] = user[key];\n      } else {\n        this[key] = user[key];\n      }\n    });\n\t\tthis.createEditContacts = this.createEditContacts.bind(this);\n\t\tthis.deleteContact = this.deleteContact.bind(this);\n\t};\n\n\tget name() {\n\t  return this.fullName.split(' ')[0];\n  }\n\n  get lastName() {\n    return this.fullName.split(' ')[1];\n  }\n\n\tshowUser() {\n\t\treturn `\n\t        <img src=\"user_img.png\" alt=\"#\" class=\" user-img img-circle center-block\">\n\t        <div class=\"user-name ${this.id}\">${this.name} ${this.lastName}</div>\n\t\t`;\n\t};\n\n\tlineOptions() {\n\t\tlet open = '<div class=\"options-line\">';\n\t\tlet optionsLine = _constants__WEBPACK_IMPORTED_MODULE_0__[\"options\"].reduce((start, elem) => {\n\t\t\tstart += `\n\t          \t<div class=\"${elem.option}\">\n\t            \t<div class= \"options-icon\"><span class=\"icon glyphicon ${elem.class}\" aria-hidden=\"true\"></span></div>\n\t            \t<span class = \"options-text\">${elem.option}</span>\n\t          \t</div>\n\t\t\t`;\n\t\t\treturn start;\n\t\t}, '');\n\t\tlet resOption = `${open} ${optionsLine}</div>`;\n\t\treturn resOption;\n\t};\n\n\ttelNumber() {\n\t\treturn `\n\t       \t<div class=\"tel-number\">\n\t          <h4>Mobile phone</h4>\n\t          <div>${this.phone}</div>\n\t        </div>\n\t        <div class=\"tel-number\">\n\t          <h4>Email</h4>\n\t          <div>${this.email}</div>\n\t        </div>\n\t\t`;\n\t};\n\n\ttableOption() {\n\t\tlet open = '<div class=\"options-table\">';\n\t\tlet optionsTable = _constants__WEBPACK_IMPORTED_MODULE_0__[\"additionalOptions\"].reduce((start, elem) => {\n\t\t\tstart += `<div class =\"options-item\"><a href=\"#\">${elem}</a></div>`;\n\t\t\treturn start;\n\t\t}, '');\n\t\tlet buttonEdit = `<button class=\"buttonEdit\"> edit contact user </button>`\n\t\tlet resOptionTable = `${open} ${optionsTable}</div> ${buttonEdit}`;\n\t\treturn resOptionTable;\n\t};\n\n\tcreateEditContacts() {\n    let editContacts = new _editContact__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this);\n    editContacts.renderEditContact();\n  };\n\n\tdeleteContact() {\n    alert('Are you sure you want to delete this user?');\n    let url = `${_constants__WEBPACK_IMPORTED_MODULE_0__[\"API_URL\"]}/${this.id}`;\n    fetch(url, {\n      method: 'DELETE',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n    })\n      .then(() => {\n        let contacts = new _userContacts__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n        contacts.loadData();\n      })\n  };\n\n\taddEvents() {\n\t\tlet buttonEdit = document.querySelector('button.buttonEdit');\n\t\tbuttonEdit.addEventListener('click', this.createEditContacts);\n\t\tlet buttonDel = document.querySelector('button.remove-btn-user');\n\t\tbuttonDel.addEventListener('click', this.deleteContact);\n\t};\n\n\trenderUser() {\n\t\tlet captionUser = document.querySelector('.container.top-radius');\n\t\tcaptionUser.innerHTML = `\n\t      \t<nav class=\"user-top-line\">\n\t        \t<a href=\"user.html\">Cancel</a>\n\t        \t<button  type = \"submit\" form = \"edit-contact\" formaction=\"#\" formmethod=\"get\" class = \"remove-btn-user\">Remove</button>\n\t      \t</nav>\n\t\t`;\n\t\tlet mainContainer = document.querySelector('main .container');\n\t\tmainContainer.innerHTML = `${this.showUser()}${this.lineOptions()}${this.telNumber()}${this.tableOption()}`;\n\t\tthis.addEvents();\n\t};\n\t\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\n\n\n//# sourceURL=webpack:///./app/user.js?");

/***/ }),

/***/ "./app/userContacts.js":
/*!*****************************!*\
  !*** ./app/userContacts.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./app/constants.js\");\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ \"./app/user.js\");\n\n\n\nclass UsersContacts {\n\n\tcreateForm() {\n\t\treturn `\n\t\t    <form class=\"form-inline search-form\">\n\t\t        <div class=\"form-group\">\n\t\t          \t<label class=\"sr-only\" for=\"search\">Search</label>\n\t\t          \t<input type=\"text\" class=\"form-control\" id= \"search\" placeholder=\"Search\">\n\t\t        </div>\n\t\t    </form>\n\t\t`;\n\t};\n\n\tcreateTable() {\n\t\tlet thead = function() {\n\t\t  return `\n\t\t  <thead>\n\t\t    <tr>\n\t\t        <th>Name</th>\n\t\t        <th>Last name</th>\n\t\t        <th>Email</th>\n\t\t    </tr>\n\t\t  </thead>\n\t\t  `;\n\t\t};\n\t\tlet tbody = function() {\n\t\t\tlet openTbody = `\n\t\t\t\t<tbody>\n\t\t\t`;\n\t\t\tlet createTbody = _constants__WEBPACK_IMPORTED_MODULE_0__[\"data\"].users.reduce((start, elem) => {\n\t\t\t\tstart += `\n\t\t\t\t\t<tr data-uid=\"${elem.id}\">\n           \t\t\t\t<td>${elem.name}</td>\n            \t\t\t<td>${elem.lastName}</td>\n            \t\t\t<td>${elem.email}</td>\n          \t\t\t</tr>\n\t\t\t\t`;\n\t\t\t\treturn start;\n\t\t\t}, '');\n\t\t\tlet resultTbody = `${openTbody} ${createTbody}</tbody>`;\n\t\t\treturn resultTbody;\n\t\t};\n\t\tlet resultTable = `\n\t\t\t<table class=\"table table-hover contacts\">\n\t\t\t\t${thead()}\n\t\t\t\t${tbody()}\n\t\t\t</table>\n\t\t`;\n\t\treturn resultTable;\n\t};\n\n\tsort() {\n\t\tlet table = document.querySelector('.table');\n\n\t\ttable.addEventListener('click', function(e) {\n\t\t\tif(e.target.tagName === 'TH') {\n        sortTable(e.target.cellIndex, e.target.textContent);\n\t\t\t} else if(e.target.tagName === 'TD') {\n\t\t\t\tlet id = e.target.parentNode.dataset.uid;\n\t\t\t\tlet obj;\n\t\t\t\tfor(let i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_0__[\"data\"].users.length; i++) {\n\t\t\t\t\tif(_constants__WEBPACK_IMPORTED_MODULE_0__[\"data\"].users[i].id === id) {\n\t\t\t\t\t\tobj = _constants__WEBPACK_IMPORTED_MODULE_0__[\"data\"].users[i];\n\t\t\t\t\t};\n\t\t\t  };\n        let user = new _user__WEBPACK_IMPORTED_MODULE_1__[\"default\"](obj);\n        user.renderUser()\n\t\t\t} else {\n\t\t\t\treturn;\n\t\t\t};\n\t\t});\n\n\t\tfunction sortTable(colNum, caption) {\n\t\t  \tlet tbody = table.getElementsByTagName('tbody')[0];\n\t\t  \tlet rowsArray = [].slice.call(tbody.rows);\n\t\t  \tlet compare;\n\n\t\t  \tswitch (caption) {\n\t\t   \t \tcase 'Name':\n\t\t      \tcompare = function(rowA, rowB) {\n\t\t\t\t\tif(rowA.cells[colNum].textContent < rowB.cells[colNum].textContent) {\n\t\t\t\t\t\treturn -1;\n\t\t\t\t\t};\n\t\t    \t\tif(rowA.cells[colNum].textContent > rowB.cells[colNum].textContent) { \n\t\t    \t\t\treturn 1;\n\t\t    \t\t};\n\t\t    \t\treturn 0;\n\t\t      \t};\n\t\t      \tbreak;\n\t\t    case 'Last name':\n\t\t      \tcompare = function(rowA, rowB) {\n\t\t\t\t\tif(rowA.cells[colNum].textContent < rowB.cells[colNum].textContent) {\n\t\t\t\t\t\treturn -1;\n\t\t\t\t\t};\n\t\t    \t\tif(rowA.cells[colNum].textContent > rowB.cells[colNum].textContent) { \n\t\t    \t\t\treturn 1;\n\t\t    \t\t};\n\t\t    \t\treturn 0;\n\t\t      \t};\n\t\t      \tbreak;\n\t\t    case 'Email':\n\t\t      \tcompare = function(rowA, rowB) {\n\t\t\t\t\tif(rowA.cells[colNum].textContent < rowB.cells[colNum].textContent) {\n\t\t\t\t\t\treturn -1;\n\t\t\t\t\t};\n\t\t    \t\tif(rowA.cells[colNum].textContent > rowB.cells[colNum].textContent) { \n\t\t    \t\t\treturn 1;\n\t\t    \t\t};\n\t\t    \t\treturn 0;\n\t\t      \t};\n\t\t      \tbreak;\n\t\t  \t};\n\n\t\t\trowsArray.sort(compare);\n\t\t  \ttable.removeChild(tbody);\n\t\t  \tfor (let i = 0; i < rowsArray.length; i++) {\n\t\t   \t \ttbody.appendChild(rowsArray[i]);\n\t\t  \t};\n\t\t  \ttable.appendChild(tbody);\n\t\t};\t\t\n\t};\n\n\trenderForm() {\n\t\tlet mainContainer = document.querySelector('main .container');\n\t\tmainContainer.innerHTML = `${this.createForm()}${this.createTable()}`;\n\t\tthis.sort();\n\t};\n\n\tloadData() {\n    fetch(_constants__WEBPACK_IMPORTED_MODULE_0__[\"API_URL\"])\n      .then(user => {\n        return user.json();\n      })\n      .then(userJson => {\n      \t/*let newUsers = userJson.map((elem) => {\n      \t  const [name, lastName] = elem.fullName.split(' ');\n      \t\treturn {\n      \t\t\temail: elem.email,\n            name: name,\n            lastName: lastName,\n\t\t\t\t\t\tid: elem._id,\n\t\t\t\t\t\tphone: elem.phone,\n\t\t\t\t\t}\n\t\t\t\t});*/\n        _constants__WEBPACK_IMPORTED_MODULE_0__[\"data\"].users = userJson.map(item => new _user__WEBPACK_IMPORTED_MODULE_1__[\"default\"](item)); //newUsers;\n        this.renderForm();\n      });\n\t};\n\t\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UsersContacts);\n\n\n//# sourceURL=webpack:///./app/userContacts.js?");

/***/ })

/******/ });