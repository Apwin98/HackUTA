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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/Boat_Door.png":
/*!*******************************!*\
  !*** ./src/img/Boat_Door.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "79b47e11331b8fc4b7efa0d274eea5fd.png");

/***/ }),

/***/ "./src/img/Floor_Background.png":
/*!**************************************!*\
  !*** ./src/img/Floor_Background.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "42315be03468dead7b21122fa15d39ae.png");

/***/ }),

/***/ "./src/img/Jake_Standing.png":
/*!***********************************!*\
  !*** ./src/img/Jake_Standing.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "727e1a02761c8d788e5af4c7639e7f26.png");

/***/ }),

/***/ "./src/img/Pet_Door.png":
/*!******************************!*\
  !*** ./src/img/Pet_Door.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e14709610b068ff5926d8ab030653386.png");

/***/ }),

/***/ "./src/img/Single_Cloud.png":
/*!**********************************!*\
  !*** ./src/img/Single_Cloud.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "07166c0ee4fab004998668cf5bc420af.png");

/***/ }),

/***/ "./src/img/Sky2.png":
/*!**************************!*\
  !*** ./src/img/Sky2.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f3012e50cc22d7117dd3f6d81c0ef355.png");

/***/ }),

/***/ "./src/img/Sky_Background.png":
/*!************************************!*\
  !*** ./src/img/Sky_Background.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0a1ff426d53b1c7ed9148ab858987298.png");

/***/ }),

/***/ "./src/img/State_Farm.png":
/*!********************************!*\
  !*** ./src/img/State_Farm.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1917d39f0b32039701c6543ad58a2855.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_Single_Cloud_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/Single_Cloud.png */ "./src/img/Single_Cloud.png");
/* harmony import */ var _img_Floor_Background_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/Floor_Background.png */ "./src/img/Floor_Background.png");
/* harmony import */ var _img_Sky_Background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/Sky_Background.png */ "./src/img/Sky_Background.png");
/* harmony import */ var _img_Sky2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/Sky2.png */ "./src/img/Sky2.png");
/* harmony import */ var _img_State_Farm_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/State_Farm.png */ "./src/img/State_Farm.png");
/* harmony import */ var _img_Pet_Door_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/Pet_Door.png */ "./src/img/Pet_Door.png");
/* harmony import */ var _img_Boat_Door_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/Boat_Door.png */ "./src/img/Boat_Door.png");
/* harmony import */ var _img_Jake_Standing_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/Jake_Standing.png */ "./src/img/Jake_Standing.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }









var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;
var gravity = 0.5;

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.position = {
      x: 50,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 1
    };
    this.width = 250;
    this.height = 200;
    this.image = createImage(_img_Jake_Standing_png__WEBPACK_IMPORTED_MODULE_7__["default"]);
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity;else this.velocity.y = 0;
    }
  }]);

  return Player;
}(); //ORIGINAL


var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}(); // COPY


var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}();

var Doors = /*#__PURE__*/function () {
  function Doors(_ref3) {
    var x = _ref3.x,
        y = _ref3.y,
        image = _ref3.image;

    _classCallCheck(this, Doors);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Doors, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Doors;
}(); // ORIGINAL


function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

var platformImage = createImage(_img_Floor_Background_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
var player = new Player(); //const platform = new Platform()

var platforms = [new Platform({
  x: -1,
  y: 700,
  image: platformImage
}), new Platform({
  x: platformImage.width - 1,
  y: 700,
  image: platformImage
}), new Platform({
  x: 0,
  y: 700,
  image: platformImage
}), new Platform({
  x: 700,
  y: -900,
  image: createImage(_img_State_Farm_png__WEBPACK_IMPORTED_MODULE_4__["default"])
})];
var dogDoor = [new Doors({
  x: -800,
  y: -785,
  image: createImage(_img_Pet_Door_png__WEBPACK_IMPORTED_MODULE_5__["default"])
}), new Doors({
  x: -200,
  y: -785,
  image: createImage(_img_Boat_Door_png__WEBPACK_IMPORTED_MODULE_6__["default"])
})];
var genericObjects = [new GenericObject({
  x: 0,
  y: 0,
  image: createImage(_img_Sky_Background_png__WEBPACK_IMPORTED_MODULE_2__["default"])
}), new GenericObject({
  x: createImage(_img_Sky_Background_png__WEBPACK_IMPORTED_MODULE_2__["default"]).width - 1,
  y: 0,
  image: createImage(_img_Sky_Background_png__WEBPACK_IMPORTED_MODULE_2__["default"])
}), new GenericObject({
  x: 0,
  y: -500,
  image: createImage(_img_Single_Cloud_png__WEBPACK_IMPORTED_MODULE_0__["default"])
}), new GenericObject({
  x: -800,
  y: -500,
  image: createImage(_img_Single_Cloud_png__WEBPACK_IMPORTED_MODULE_0__["default"])
}), new GenericObject({
  x: -1200,
  y: -450,
  image: createImage(_img_Sky2_png__WEBPACK_IMPORTED_MODULE_3__["default"])
}), new GenericObject({
  x: -500,
  y: -400,
  image: createImage(_img_Sky2_png__WEBPACK_IMPORTED_MODULE_3__["default"])
}) // new GenericObject({
//   x:-800,
//   y:-785,
//   image: createImage(dog_door)
// }),
// new GenericObject({
//   x:-200,
//   y:-785,
//   image: createImage(boat_door)
// }),
];
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
var scrollOffset = 0;

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.clearRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach(function (genericObject) {
    genericObject.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  dogDoor.forEach(function (Doors) {
    Doors.draw();
  });
  player.update();

  if (keys.right.pressed && player.position.x < 1100) {
    player.velocity.x = 5;
  } else if (keys.left.pressed && player.position.x > 100 || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollOffset += 5;
      platforms.forEach(function (platform) {
        platform.position.x -= 5;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x -= 3;
      });
      dogDoor.forEach(function (Doors) {
        Doors.position.x -= 5;
      });
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= 5;
      platforms.forEach(function (platform) {
        platform.position.x += 5;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x += 3;
      });
      dogDoor.forEach(function (Doors) {
        Doors.position.x += 5;
      });
    }
  } //Detect collusion with cloud (blue rectangle)


  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  });
}

animate();
addEventListener('keydown', function (_ref4) {
  var keyCode = _ref4.keyCode;

  switch (keyCode) {
    case 65:
      console.log('left');
      keys.left.pressed = true;
      break;

    case 83:
      console.log('down');
      break;

    case 68:
      console.log('right');
      keys.right.pressed = true;
      break;

    case 87:
      console.log('up');
      player.velocity.y -= 10;

      if (player.position.x > 520 && player.position.x < 670) {
        window.location.href = "https://statefarm-insurance.web.app/";
      }

      if (player.position.x > 970 && player.position.x < 1100) {
        window.location.href = "https://statefarm-insurance-93b6e.web.app/";
      }

      break;
  }
});
addEventListener('keyup', function (_ref5) {
  var keyCode = _ref5.keyCode;

  switch (keyCode) {
    case 65:
      console.log('left');
      keys.left.pressed = false;
      break;

    case 83:
      console.log('down');
      break;

    case 68:
      console.log('right');
      keys.right.pressed = false;
      break;

    case 87:
      console.log('up');
      keys.right.pressed = false;
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map