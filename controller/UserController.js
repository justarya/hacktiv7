const User = require('../models').User

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
            console.log(err)
        })
    }

    // static delete() {
    //     User.destroy({
    //         where: {
    //             id: 1
    //         }
    //     })
    // }
}

// UserController.create({
//     name: 'Arya',
//     password: 'arya123',
//     email: 'arya1@gmail.com'
// })

UserController.update()