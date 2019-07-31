const Course = require('../models').Course
const EXCLUDE = ['createdAt','updatedAt'];
class CourseController {

    // CREATE COURSE
    static create(obj) {
        Course.create({
            courseName: obj.name,
            description: obj.description,
            price: obj.price,
            urlVideo: obj.video,
            durationExpired: obj.exp
        })
        .then(created => {
            console.log(created)
        })
        .catch(err => {
            throw err.message;
        })
    }

    // READ ALL COURSE
    static findAll(){
        Course.findAll({
            attributes: {
                exclude: EXCLUDE
            }
        })
        .then(courses => {
            courses.forEach((el) => {
                el.dataValues.price = el.priceFormat;
            })
            const arrayOfCourses = courses.map((el) => { return el.dataValues}) //OUTPUT
        })
        .catch(err => {
            throw err.message;
        })
    }

    // FIND ONE OF COURSE BY "ID"
    static findOne(id) {
        Course.findOne({
            where: {
                id: id
            },
            attributes: {
                exclude: EXCLUDE
            }
        })
        .then(course => {
            course.dataValues.price = course.priceFormat;
            const useData = course.dataValues; //OUTPUT
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

    //UPDATE COURSE BY ID
    static update(obj) {
        Course.update({
            [obj.field]: obj.value
        }, {
            where: {
                id: obj.id
            }
        })
        .then(updated => {
            console.log(updated)
        })
        .catch(err => {
            console.log(err)
        })
    }
}

// CourseController.create({
//     name: 'Ternak Ayam Kampung',
//     description: 'Animal',
//     price: 14000000,
//     video: 'https://www.youtube.com/watch?v=d8b4PrCK3Kg',
//     exp: 30
// })

// CourseController.update({
//     field: "description",
//     value: "Programming",
//     id: 2
// })

// CourseController.delete(3)
// CourseController.findAll()

// CourseController.findOne(1)