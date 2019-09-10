"use strict";
var reg1 = new RegExp("jsjun");
console.log(reg1);
var reg2 = new RegExp('jsjun', 'gi');
console.log(reg2);
var reg3 = /jsjun/i;
var reg4 = /jsjun/gi;
var website = 'jsjun.com';
// let result1:boolean = reg3.test(website)
console.log(reg3.exec(website));
