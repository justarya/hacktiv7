const moment = require('moment')

let expired = moment("2019-08-10")

// let a = moment().subtract('days',20)
let x = moment(expired).fromNow();
let c = moment().get('month')
console.log(c)
// console.log(a)
console.log(x)