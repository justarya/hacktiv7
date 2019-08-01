const nodemailer = require('nodemailer')
const moment = require('moment')
const cron = require('node-cron');

let expired = moment("2019-08-07")
let now = moment()
let b = expired.diff(now,'days',true)
let transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    secure: false,
    auth: {
        user: 'adilpr93@gmail.com',
        pass: 'adilpratama1'
    }
});


let task =  cron.schedule('06 15 * * *', () => {
   let now = moment()
   let b = expired.diff(now,'days',true)
   if (b < 2) {
    let helperOption = {
        from: '"Adiel Pratama" <adilpr93@gmail.com>',
        to: `'fauzi.nurfadillahh@gmail.com'`,
        subject: "TEST NODEMAILER",
        text: 'MASUK'
    }
    transporter.sendMail(helperOption, (err, info) => {
        if (err) {
            throw err;
        }
        else {
            console.log("SENT")
            console.log(info)
        }
    })
   }
 }, {
   scheduled: true,
   timezone: "Asia/Jakarta"
 });

 task.start()






