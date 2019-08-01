const User = require('../models').User
const EXCLUDE = ['createdAt','updatedAt','password','salt']; //FOR EXCLUDE PROPERTY
const bcrypt = require('bcryptjs');

class UserController {
    static register(req,res){
        User.create({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
        })
        .then(data => {
            res.redirect('/login?success=Successfully Register! Please Login');
        })
        .catch(err => res.send(err.message))
    }
    // LOGIN
    static login(req,res){
        User.findOne({
            where: {
                username: req.body.username
            }
        })
        .then(data => {
            if(bcrypt.compareSync(req.body.password, data.password)){
                req.session.username = req.body.username;
                req.session.isLogin = true;
                res.redirect('/course');
            }else{
                throw new Error('Login Failed!')
            }
        })
        .catch(err => res.send(err.message))
    }

    static logout(req,res){
        req.session.destroy(function(err) {
            // cannot access session here
            if(err){
                res.send(err);
            }
        });
        res.redirect('/');
        
    }
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