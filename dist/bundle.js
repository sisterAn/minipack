
    (function(modules) {
      function require(moduleId) {
        const [fn, mapping] = modules[moduleId]
        function localRequire(name) {
          return require(mapping[name])
        }
        const module = {exports: {}}
        fn(localRequire, module, module.exports)
        return module.exports
      }
      require('src/entry.js')
    })({'src/entry.js': [
      function(require, module, exports) {
        "use strict";

var _message = _interopRequireDefault(require("./message.js"));

var _hello = require("./hello.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _message["default"])();
console.log('----hello-----: ', _hello.hello);
      },
      {"./message.js":"src/message.js","./hello.js":"src/hello.js"},
    ],'src/message.js': [
      function(require, module, exports) {
        "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = message;

var _hello = require("./hello.js");

var _name = require("./name.js");

function message() {
  console.log("".concat(_hello.hello, " ").concat(_name.name, "!"));
}
      },
      {"./hello.js":"src/hello.js","./name.js":"src/name.js"},
    ],'src/hello.js': [
      function(require, module, exports) {
        "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hello = void 0;
var hello = 'hello';
exports.hello = hello;
      },
      undefined,
    ],'src/name.js': [
      function(require, module, exports) {
        "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = void 0;
var name = 'bottle';
exports.name = name;
      },
      undefined,
    ],})
  