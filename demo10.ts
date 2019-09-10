let reg1:RegExp = new RegExp("jsjun")
console.log(reg1)

let reg2:RegExp = new RegExp('jsjun','gi')
console.log(reg2)



let reg3:RegExp = /jsjun/i
let reg4:RegExp = /jsjun/gi

let website:string = 'jsjun.com'
// let result1:boolean = reg3.test(website)
console.log(reg3.exec(website))



