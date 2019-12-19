
        (function(modules) {
            function require(id) {
                const [fn, mapping] = modules[id]
                function localRequire(name) {
                    return require(mapping[name])
                }
                const module = {exports: {}}
                fn(localRequire, module, module.exports)
                return module.exports
            }
            require(0)
        })({0: [
            function(require, module, exports) {
                "use strict";

var _message = _interopRequireDefault(require("./message.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _message["default"])();
            },
            {"./message.js":1},
        ],1: [
            function(require, module, exports) {
                "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = hello;

var _name = require("./name.js");

function hello() {
  console.log("hello ".concat(_name.name, "!"));
}
            },
            {"./name.js":2},
        ],2: [
            function(require, module, exports) {
                "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = void 0;
var name = 'bottle';
exports.name = name;
            },
            {},
        ],})
    