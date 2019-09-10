"use strict";
var XiaoJieJie1 = /** @class */ (function () {
    function XiaoJieJie1(sex, age, name) {
        this.sex = sex;
        this.name = name;
        this.age = age;
    }
    XiaoJieJie1.prototype.sayHello = function () {
        console.log('小哥哥');
    };
    XiaoJieJie1.prototype.sayLove = function () {
        console.log('我爱你');
    };
    return XiaoJieJie1;
}());
var jiejie1 = new XiaoJieJie1('女', 16, '迪丽热巴');
console.log(jiejie1.sex);
console.log(jiejie1.name);
console.log(jiejie1.age);
jiejie1.sayHello();
jiejie1.sayLove();
var Man = /** @class */ (function () {
    function Man() {
        this.sex = '男';
    }
    return Man;
}());
var man = new Man();
man.sex = '女';
