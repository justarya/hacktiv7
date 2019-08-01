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
            include: [
                {
                    model: Video, 
                    attributes: {
                        exclude: EXCLUDE
                    }
                }
            ],
            attributes: {
                exclude: EXCLUDE
            },
            order: [[{model: Video},'order', 'ASC']]
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
            attributes: {
                exclude: EXCLUDE
            },
            order: [[{model: Video},'order', 'ASC']]
        })
        .then(result => {
            let course = result.dataValues
            let video = result.Videos.find((el) => { return el.id == req.params.idv})
            course.Videos = course.Videos.map((el) => { return el.dataValues})
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

        })
        .catch(err => {
            throw err.message;
        })
    }

    static cutBalance(req, res) {
        let obj = {}
        Course.findOne({
            where: {
                id: req.params.id//COURSE ID
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
                    id: req.session.idUser//USER ID
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
                        id: req.session.idUser //id USER
                    }
                })
                .then(updated => {
                    return UserCourse.create({
                        UserId: req.session.idUser,
                        CourseId: req.params.id,
                        startTime: moment().format(),
                        expiredTime: moment().add(obj.courseLength,'days').format()
                    })
                })
                .then(updated => {
                    console.log("HERE")
                    res.send('updated')
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

module.exports = CourseController