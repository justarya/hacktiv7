const moment = require('moment')

let expired = moment("2019-08-02")

// let a = moment().subtract('days',20)
let now = moment()
let b = expired.diff(now,'days',true)
// let c = moment().get('month')
// console.log(c)
// console.log(a)
console.log(b)