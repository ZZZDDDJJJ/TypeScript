"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var JsJUn = /** @class */ (function () {
    function JsJUn(name, age, skill) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
    JsJUn.prototype.interest = function () {
        console.log('找小姐姐');
    };
    return JsJUn;
}());
var jsjunobj = new JsJUn('技术君', 18, 'coding');
jsjunobj.interest();
var JsShuai = /** @class */ (function (_super) {
    __extends(JsShuai, _super);
    function JsShuai() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xingxiang = '帅气';
        return _this;
    }
    JsShuai.prototype.zhuangqing = function () {
        console.log('一日赚了一个亿');
    };
    JsShuai.prototype.interest = function () {
        _super.prototype.interest.call(this);
        console.log('建立电商平台');
    };
    return JsShuai;
}(JsJUn));
var shuai = new JsShuai('技术帅', 5, '演讲');
shuai.interest();
shuai.zhuangqing();
console.log(shuai.name);
