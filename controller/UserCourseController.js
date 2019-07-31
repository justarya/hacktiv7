const UserCourse = require('../models').UserCourse
const Course = require('../models').Course
const User = require('../models').User
const EXCLUDE = ['createdAt','updatedAt']
class UserCourseController {
    
    static findOne() {
        //find by USER
        UserCourse.findAll({
            where: {
                UserId: 2
            },
            attributes: {
                exclude: EXCLUDE
            },
            include: [
                {model: User, attributes: {exclude: ['createdAt','updatedAt','password','salt']}},
                {model: Course, attributes: {exclude: ['createdAt','updatedAt','durationExpired']}}
            ]
        })
        .then(result => {
            result.forEach((el) => {
                el.setDataValue("Waktu_berakhir", el.timeExpired);
                el.setDataValue("Expired", el.expired);
            })
            console.log(result)
        })
        .catch(err => {
            console.log(err)
        })
    }
}

// UserCourseController.findOne()
module.exports = UserCourseController