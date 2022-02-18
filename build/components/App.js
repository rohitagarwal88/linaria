"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Index;

var _react = _interopRequireDefault(require("react"));

var _atomic = require("@linaria/atomic");

var _Header = _interopRequireDefault(require("./Header"));

var _Hero = _interopRequireDefault(require("./Hero"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Page = {
  "background": "atm_k1dxsr",
  "height": "atm_128ffr2"
};

function Index() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _atomic.cx)(Page)
  }, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement(_Hero.default, null));
}