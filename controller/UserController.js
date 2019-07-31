const User = require('../models').User
const EXCLUDE = ['createdAt','updatedAt','password','salt']; //FOR EXCLUDE PROPERTY
class UserController {

    //CREATE USER
    static create(obj) {
        User.create({
            username: obj.name,
            password: obj.password,
            email: obj.email
        })
        .then(created => {
            console.log(created)
        })
        .catch(err => {
            console.log(err)
        })
    }

    static update() {
        User.update({
            balance: 100000
        },{
            where: {
                id: 2
            }
        })
        .then(updated => {
            console.log(updated)
        })
        .catch(err => {
            throw err;
        })
    }

    static findAll() {
        User.findAll({
            attributes: {
                exclude: EXCLUDE
            }
        })
        .then(users => {
            let arrayOfUsers = users.map((el) => { return el.dataValues}); //OUTPUT
        })
        .catch(err => {
            throw err;
        })
    }

    static findOne() {
        User.findOne({
            where: {
                id: 1
            },
            attributes: {
                exclude: EXCLUDE
            }
        })
        .then(found => {
            let userFound = found.dataValues;
        })
        .catch(err => {
            throw err;
        })
    }

}

// UserController.create({
//     name: 'Arya',
//     password: 'arya123',
//     email: 'arya1@gmail.com'
// })

// UserController.findOne()

module.exports = UserController