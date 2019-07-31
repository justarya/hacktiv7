const moment = require('moment')

let a = moment().add(30, 'days').format()
let now = moment().format()
console.log(a)
console.log(now)