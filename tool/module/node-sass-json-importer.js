"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
exports.isJSONfile = isJSONfile;
exports.transformJSONtoSass = transformJSONtoSass;
exports.isValidKey = isValidKey;
exports.toKebabCase = toKebabCase;
exports.parseValue = parseValue;
exports.parseList = parseList;
exports.parseMap = parseMap;

var _lodash = _interopRequireDefault(require("lodash"));

var _isThere = _interopRequireDefault(require("is-there"));

var _path = _interopRequireWildcard(require("path"));

require("json5/lib/register");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Enable JSON5 support
function _default() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (url, prev) {
    if (!isJSONfile(url)) {
      return null;
    }

    var includePaths = this.options.includePaths ? this.options.includePaths.split(_path["default"].delimiter) : [];
    var paths = [].concat((0, _path.dirname)(prev)).concat(includePaths);
    var resolver = options.resolver || _path.resolve;
    var fileName = paths.map(function (path) {
      return resolver(path, url);
    }).filter(_isThere["default"]).pop();

    if (!fileName) {
      return new Error("Unable to find \"".concat(url, "\" from the following path(s): ").concat(paths.join(', '), ". Check includePaths."));
    } // Prevent file from being cached by Node's `require` on continuous builds.
    // https://github.com/Updater/node-sass-json-importer/issues/21


    delete require.cache[require.resolve(fileName)];

    try {
      var fileContents = require(fileName);

      var extensionlessFilename = (0, _path.basename)(fileName, (0, _path.extname)(fileName));
      var json = Array.isArray(fileContents) ? _defineProperty({}, extensionlessFilename, fileContents) : fileContents;
      return {
        contents: transformJSONtoSass(json, options)
      };
    } catch (error) {
      return new Error("node-sass-json-importer: Error transforming JSON/JSON5 to SASS. Check if your JSON/JSON5 parses correctly. ".concat(error));
    }
  };
}

function isJSONfile(url) {
  return /\.js(on5?)?$/.test(url);
}

function transformJSONtoSass(json) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object.keys(json).filter(function (key) {
    return isValidKey(key);
  }).filter(function (key) {
    return json[key] !== '#';
  }).map(function (key) {
    return "$".concat(opts.convertCase ? toKebabCase(key) : key, ": ").concat(parseValue(json[key], opts), ";");
  }).join('\n');
}

function isValidKey(key) {
  return /^[^$@:].*/.test(key);
}

function toKebabCase(key) {
  return key.replace(/([a-z0-9])([A-Z])/g, '$1-$2').replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1-$2').toLowerCase();
}

function parseValue(value) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (_lodash["default"].isArray(value)) {
    return parseList(value, opts);
  } else if (_lodash["default"].isPlainObject(value)) {
    return parseMap(value, opts);
  } else if (value === '') {
    return '""'; // Return explicitly an empty string (Sass would otherwise throw an error as the variable is set to nothing)
  } else {
    return `"${value}"`;
  }
}

function parseList(list) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return "(".concat(list.map(function (value) {
    return parseValue(value);
  }).join(','), ")");
}

function parseMap(map) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return "(".concat(Object.keys(map).filter(function (key) {
    return isValidKey(key);
  }).map(function (key) {
    return "".concat(opts.convertCase ? toKebabCase(key) : key, ": ").concat(parseValue(map[key], opts));
  }).join(','), ")");
} // Super-hacky: Override Babel's transpiled export to provide both
// a default CommonJS export and named exports.
// Fixes: https://github.com/Updater/node-sass-json-importer/issues/32
// TODO: Remove in 3.0.0. Upgrade to Babel6.


module.exports = exports["default"];
Object.keys(exports).forEach(function (key) {
  return module.exports[key] = exports[key];
});
