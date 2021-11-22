// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomNumber = randomNumber;
exports.randomValueInRange = randomValueInRange;

function randomNumber(_ref) {
  var _ref$min = _ref.min,
      min = _ref$min === void 0 ? 0 : _ref$min,
      max = _ref.max;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomValueInRange(options) {
  var ranges = validRanges(options);
  var range = ranges[randomNumber({
    max: ranges.length - 1
  })];
  return randomNumber(range);
}

function validRanges(_ref2) {
  var startingValue = _ref2.startingValue,
      maxCutoff = _ref2.maxCutoff,
      withinTolerance = _ref2.withinTolerance,
      outsideTolerance = _ref2.outsideTolerance;
  var withinToleranceIncrementor = Math.floor(withinTolerance * maxCutoff);
  var outsideToleranceIncrementor = Math.ceil(outsideTolerance * maxCutoff);
  var aboveRangeMin = startingValue + outsideToleranceIncrementor;
  var aboveRangeMax = Math.min(startingValue + withinToleranceIncrementor, maxCutoff);
  var belowRangeMin = Math.max(startingValue - withinToleranceIncrementor, 0);
  var belowRangeMax = startingValue - outsideToleranceIncrementor;
  var ranges = [];

  if (aboveRangeMax > aboveRangeMin) {
    ranges.push({
      min: aboveRangeMin,
      max: aboveRangeMax
    });
  }

  if (belowRangeMax > belowRangeMin) {
    ranges.push({
      min: belowRangeMin,
      max: belowRangeMax
    });
  }

  return ranges;
}
},{}],"Rgb.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("./utils.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MAX_RGB_VALUE = 255;

var Rgb = /*#__PURE__*/function () {
  function Rgb(r, g, b) {
    _classCallCheck(this, Rgb);

    this.r = r;
    this.g = g;
    this.b = b;
  }

  _createClass(Rgb, [{
    key: "generateSimilar",
    value: function generateSimilar(options) {
      return new this.constructor((0, _utils.randomValueInRange)(_objectSpread({
        startingValue: this.r,
        maxCutoff: MAX_RGB_VALUE
      }, options)), (0, _utils.randomValueInRange)(_objectSpread({
        startingValue: this.g,
        maxCutoff: MAX_RGB_VALUE
      }, options)), (0, _utils.randomValueInRange)(_objectSpread({
        startingValue: this.b,
        maxCutoff: MAX_RGB_VALUE
      }, options)));
    }
  }, {
    key: "toCss",
    value: function toCss() {
      return "rgb(".concat(this.r, ", ").concat(this.g, ", ").concat(this.b, ")");
    }
  }], [{
    key: "generate",
    value: function generate() {
      return new this((0, _utils.randomNumber)({
        max: MAX_RGB_VALUE
      }), (0, _utils.randomNumber)({
        max: MAX_RGB_VALUE
      }), (0, _utils.randomNumber)({
        max: MAX_RGB_VALUE
      }));
    }
  }]);

  return Rgb;
}();

exports.default = Rgb;
},{"./utils.js":"utils.js"}],"Hex.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Rgb2 = _interopRequireDefault(require("./Rgb.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Hex = /*#__PURE__*/function (_Rgb) {
  _inherits(Hex, _Rgb);

  var _super = _createSuper(Hex);

  function Hex() {
    _classCallCheck(this, Hex);

    return _super.apply(this, arguments);
  }

  _createClass(Hex, [{
    key: "toCss",
    value: function toCss() {
      var rHex = decimalToHex(this.r);
      var gHex = decimalToHex(this.g);
      var bHex = decimalToHex(this.b);
      return "#".concat(rHex).concat(gHex).concat(bHex);
    }
  }]);

  return Hex;
}(_Rgb2.default);

exports.default = Hex;

function decimalToHex(decimal) {
  return decimal.toString(16);
}
},{"./Rgb.js":"Rgb.js"}],"Hsl.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("./utils.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MAX_HUE_VALUE = 360;
var MAX_SATURATION_VALUE = 100;
var MAX_LIGHTNESS_VALUE = 100;

var Hsl = /*#__PURE__*/function () {
  function Hsl(h, s, l) {
    _classCallCheck(this, Hsl);

    this.h = h;
    this.s = s;
    this.l = l;
  }

  _createClass(Hsl, [{
    key: "generateSimilar",
    value: function generateSimilar(options) {
      return new this.constructor((0, _utils.randomValueInRange)(_objectSpread({
        startingValue: this.h,
        maxCutoff: MAX_HUE_VALUE
      }, options)), (0, _utils.randomValueInRange)(_objectSpread({
        startingValue: this.s,
        maxCutoff: MAX_SATURATION_VALUE
      }, options)), (0, _utils.randomValueInRange)(_objectSpread({
        startingValue: this.l,
        maxCutoff: MAX_LIGHTNESS_VALUE
      }, options)));
    }
  }, {
    key: "toCss",
    value: function toCss() {
      return "hsl(".concat(this.h, ", ").concat(this.s, "%, ").concat(this.l, "%)");
    }
  }], [{
    key: "generate",
    value: function generate() {
      return new this((0, _utils.randomNumber)({
        max: MAX_HUE_VALUE
      }), (0, _utils.randomNumber)({
        max: MAX_SATURATION_VALUE
      }), (0, _utils.randomNumber)({
        max: MAX_LIGHTNESS_VALUE
      }));
    }
  }]);

  return Hsl;
}();

exports.default = Hsl;
},{"./utils.js":"utils.js"}],"script.js":[function(require,module,exports) {
"use strict";

var _Rgb = _interopRequireDefault(require("./Rgb.js"));

var _Hex = _interopRequireDefault(require("./Hex.js"));

var _Hsl = _interopRequireDefault(require("./Hsl.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COLOR_MAP = {
  rgb: _Rgb.default,
  hex: _Hex.default,
  hsl: _Hsl.default
};
var DIFFICULTY_MAP = {
  easy: {
    withinTolerance: 1,
    outsideTolerance: 0.2
  },
  medium: {
    withinTolerance: 0.5,
    outsideTolerance: 0.2
  },
  hard: {
    withinTolerance: 0.3,
    outsideTolerance: 0.2
  }
};
var nextButton = document.querySelector("[data-next-btn]");
nextButton.addEventListener("click", render);
document.addEventListener("change", function (e) {
  if (e.target.matches('input[type="radio"]')) render();
}); // Formatter
// Difficulty - Config for the formatter
// Render - every time page loads, on change of format, on change of difficulty
// 1. Get a formatter
// 2. Configure formatter based on difficulty
// 3. Generate colors
// 4. Render colors
// 5. Handle clicking a color
// Generate correct color
// Generate similar colors based on difficulty

var colorGrid = document.querySelector("[data-color-grid]");
var colorStringElement = document.querySelector("[data-color-string]");
var resultsElement = document.querySelector("[data-results]");
var resultsText = document.querySelector("[data-results-text]");

function render() {
  var format = document.querySelector('[name="format"]:checked').value;
  var difficulty = document.querySelector('[name="difficulty"]:checked').value;

  var _generateColors = generateColors({
    format: format,
    difficulty: difficulty
  }),
      colors = _generateColors.colors,
      correctColor = _generateColors.correctColor;

  colorGrid.innerHTML = "";
  colorStringElement.textContent = correctColor.toCss();
  resultsElement.classList.add("hide");
  var colorElements = colors.sort(function () {
    return Math.random() - 0.5;
  }).map(function (color) {
    var element = document.createElement("button");
    element.style.backgroundColor = color.toCss();
    return {
      color: color,
      element: element
    };
  });
  colorElements.forEach(function (_ref) {
    var color = _ref.color,
        element = _ref.element;
    element.addEventListener("click", function () {
      resultsElement.classList.remove("hide");
      resultsText.textContent = color === correctColor ? "Correct" : "Wrong";
      colorElements.forEach(function (_ref2) {
        var c = _ref2.color,
            e = _ref2.element;
        e.disabled = true;
        e.classList.toggle("wrong", c !== correctColor);
      });
    });
    colorGrid.append(element);
  });
}

render();

function generateColors(_ref3) {
  var format = _ref3.format,
      difficulty = _ref3.difficulty;
  var colorClass = COLOR_MAP[format];
  var difficultyRules = DIFFICULTY_MAP[difficulty];
  var correctColor = colorClass.generate();
  var colors = [correctColor];

  for (var i = 0; i < 5; i++) {
    colors.push(correctColor.generateSimilar(difficultyRules));
  }

  return {
    colors: colors,
    correctColor: correctColor
  };
}

var rgb = _Rgb.default.generate();

console.log(rgb, rgb.generateSimilar({
  withinTolerance: 0.3,
  outsideTolerance: 0.2
}));
},{"./Rgb.js":"Rgb.js","./Hex.js":"Hex.js","./Hsl.js":"Hsl.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63173" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map