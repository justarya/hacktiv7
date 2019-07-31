const Course = require('../models').Course
const User = require('../models').User
const EXCLUDE = ['createdAt','updatedAt'];
const UserCourse = require('../models').UserCourse
const moment = require('moment')
const Video = require('../models').Video
const formatUang = require('../helper/formatUang')
class CourseController {

    //VIEW ALL COURSE// TECHNOLOGY
    static loadIndex(req, res){
        Course.findAll({
            include:[
                {model: Video, attributes: {exclude: EXCLUDE}}
            ]
        })
        .then((data) => {
            let arrayOfcourse = data.map((el) => { return el.dataValues});
            console.log(arrayOfcourse)
            res.render('./course',{courses:arrayOfcourse,formatUang});
        })
    }

    //VIEW ONE OF COURSE// TECHNOLOGYJS
    static loadCourse(req, res){
        Course.findOne({
            where:{
                id: req.params.id
            },
            include: [{model: Video, attributes: {exclude: EXCLUDE,order: ['order', 'ASC']}}],
            attributes: {
                exclude: EXCLUDE
            }
        })
        .then(data => {
            let course = data.dataValues;
            course.Videos = course.Videos.map((el) => { return el.dataValues})
            res.render('./course/item', {course,formatUang})
        })
    }



    static loadVideo(req, res) {
        Course.findOne({
            where: {
                id: req.params.idc
            },
            include: [
                {model: Video,attributes:{exclude: EXCLUDE}}
            ],
            exclude: EXCLUDE
        })
        .then(result => {
            let course = result.dataValues
            let video = result.Videos.find((el) => { return el.id == req.params.idv})
            course.Videos = course.Videos.map((el) => { return el.dataValues})
            console.log(video.urlVideo)
            res.render('./course/video', {course,video})
        })
    }



    // CREATE COURSE
    static create(obj) {
        Course.create({
            courseName: obj.name,
            description: obj.description,
            price: obj.price,
            urlEmbed: obj.video,
            durationExpired: obj.exp
        })
        .then(created => {
            console.log(created)
        })
        .catch(err => {
            throw err.message;
        })
    }

    // DELETE COURSE BY ID
    static delete(id) {
        Course.destroy({
            where: {
                id: id
            }
        })
        .then(deleted => {
            console.log(deleted)
        })
        .catch(err => {
            throw err.message;
        })
    }

    static cutBalance() {
        let obj = {}
        Course.findOne({
            where: {
                id: 3 //COURSE ID
            },
            attributes: {
                exclude: EXCLUDE
            }
        })
        .then(result => {
            obj.coursePrice = result.dataValues.price
            obj.courseLength = result.dataValues.durationExpired
            return User.findOne({
                where:{
                    id: 2 //USER ID
                },
                attributes: {
                    exclude: EXCLUDE
                }
            })
        })
        .then(findUser => {
            let userBalance = findUser.dataValues.balance;
            if (obj.coursePrice <= userBalance) {
                User.update({
                    balance: userBalance - obj.coursePrice
                }, {
                    where: {
                        id: 2 //id USER
                    }
                })
                .then(updated => {
                    return UserCourse.create({
                        UserId: 2,
                        CourseId: 3,
                        startTime: moment().format(),
                        expiredTime: moment().add(obj.courseLength,'days').format()
                    })
                })
                .then(updated => {
                    console.log(updated)
                })
                .catch(err => {
                    console.log(err)
                })
            }
            else {
                console.log("KURANG")
            }
        })
        .catch(err => {
            throw err;
        })
    }
}

// CourseController.create({
//     name: 'Ruby Course',
//     description: 'Ruby',
//     price: 20000,
//     video: 'https://www.youtube.com/watch?v=d8b4PrCK3Kg',
//     exp: 30
// })

// CourseController.update({
//     field: "description",
//     value: "Programming",
//     id: 2
// })

// CourseController.loadCourse()
// CourseController.loadIndex()

// CourseController.cutBalance()

module.exports = CourseController