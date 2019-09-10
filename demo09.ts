let d:Date = new Date()
let localTime = d.getTime()
let localOffset = d.getTimezoneOffset()*60*1000
let utc = localTime + localOffset
console.log(localOffset)
console.log(localTime)
console.log(new Date(utc + 3600000*8))


var timezone = 8; //目标时区时间，东八区
var offset_GMT = new Date().getTimezoneOffset(); // 本地时间和格林威治的时间差，单位为分钟
var nowDate = new Date().getTime(); // 本地时间距 1970 年 1 月 1 日午夜（GMT 时间）之间的毫秒数
var targetDate = new Date(nowDate + offset_GMT * 60 * 1000 + timezone * 60 * 60 * 1000);
console.log("东8区现在是：" + targetDate);


// let d:Date = new Date(1000)
// let d2:Date = new Date(2000)

// console.log(d)
// console.log(d2)


// let d1:Date = new Date('2019/09/08 11:00:00')
// let d2:Date = new Date('2019-09-08 11:00:00')


// console.log(d1)
// console.log(d2)
