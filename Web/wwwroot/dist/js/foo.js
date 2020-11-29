/******/ (function() { // webpackBootstrap
/*!***************************************!*\
  !*** ./ClientSrc/Scripts/Home/foo.ts ***!
  \***************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Value = /*#__PURE__*/function () {
  function Value() {
    _classCallCheck(this, Value);

    _defineProperty(this, "value", 10);

    _defineProperty(this, "props", {
      x: 0,
      y: 0
    });
  }

  _createClass(Value, [{
    key: "getValue",
    value: function getValue() {
      return this.value;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.value = value;
    }
  }, {
    key: "setProps",
    value: function setProps(props) {
      this.props = props;
    }
  }, {
    key: "getProps",
    value: function getProps() {
      return this.props;
    }
  }]);

  return Value;
}();

var value = new Value();
value.setValue(1008);
value.getValue();
var value1 = new Value();
value1.setProps({
  x: 1000,
  y: 1000
});
value1.getProps();
var a = "Its string!"; //a = 6;

console.log(a);
var t = 123;
console.log(value.getValue() + '   ' + t);
/******/ })()
;
//# sourceMappingURL=foo.js.map