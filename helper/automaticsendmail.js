module.exports = () => {
    const cron = require('node-cron')
    const moment = require('moment')
    const nodemailer = require('nodemailer')
    const UserCourse = require('../models').UserCourse
    const User = require('../models').User
    const Course = require('../models').Course
    const EXCLUDE = ['createdAt', 'updatedAt']
    const now = moment()
    
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 587,
        secure: false,
        auth: {
            user: 'adilpr93@gmail.com',
            pass: 'adilpratama1'
        }
    });
    
    let sendEmail = cron.schedule('54 09 * * *', () => {
        User.findAll({
            include:[
                {
                    model: UserCourse,
                    include: [{model: Course, attributes: {exclude: EXCLUDE}}],
                    attributes: {exclude: EXCLUDE}
                }
            ],
            attributes: {
                exclude: EXCLUDE
            }
        })
        .then(results => {
            let arrayOfUser = results.map((el) => { return el.dataValues})
            arrayOfUser.forEach((el) => {
                el.UserCourses = el.UserCourses.map((el) => { return el.dataValues})
                el.UserCourses.forEach((el) => {
                    el.Course = el.Course.courseName
                })
            })
            arrayOfUser.forEach((el) => {
                let arrayOfExpired = [];
                el.UserCourses.forEach((el) => {
                    let expired = moment(el.expiredTime);
                    let diff = expired.diff(now,'days',true)
                    if (diff < 2) {
                        arrayOfExpired.push({
                            courseName: el.Course,
                            startTime: el.startTime,
                            expiredTime: el.expiredTime
                        })
                    }
                })
                if(arrayOfExpired.length !== 0) {
                    let course = ``;
                    arrayOfExpired.forEach((el) => {
                        course += el.courseName + '\n' ;
                    }) 
                    let setupEmail = {
                        from: '"Adiel Pratama" adilpr93@gmail.com',
                        to: `${el.email}`,
                        subject: 'EXPIRED COURSE ANNOUNCEMENT',
                        text: `${course}`
                    }
                    transporter.sendMail(setupEmail, (err, info) => {
                        if (err) {
                            throw err;
                        }
                        else {
                            console.log('SENT')
                        }
                    })
                }
            })
        })
        .catch(err => {
            console.log(err)
        })
    }, {
        scheduled:true,
        timezone: "Asia/Jakarta"
    })
    
    sendEmail.start()
}


