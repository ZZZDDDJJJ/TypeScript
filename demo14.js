"use strict";
var myhusband = { sex: '男', interest: '看书,做家务', maiBaoBao: true };
console.log(myhusband);
var mySearch;
mySearch = function (source, subString) {
    console.log(source);
    console.log(subString);
    var flag = source.search(subString);
    console.log(flag);
    return (flag != -1);
};
console.log(mySearch('高、富、帅、德', '胖'));
