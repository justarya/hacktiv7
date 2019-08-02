const User = require('../models').User
const UserCourse = require('../models').UserCourse
const Course = require('../models').Course
const EXCLUDE = ['createdAt','updatedAt','password','salt']; //FOR EXCLUDE PROPERTY
const bcrypt = require('bcryptjs');
const Voucher = require('../models').Voucher
const moment = require('moment')

class UserController {
    static loadLogin(req,res){
        res.render('login',{
            error: req.query.error,
            success: req.query.success
        })
    }
    static loadRegister(req,res){
        res.render('register',{
            error: req.query.error,
            success: req.query.success
        })
    }
    static register(req,res){
        User.create({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
        })
        .then(data => {
            res.redirect('/login?success=Successfully Register! Please Login');
        })
        .catch(err => res.redirect('/register?error='+err.message))
    }
    // LOGIN
    static login(req,res){
        User.findOne({
            where: {
                username: req.body.username
            }
        })
        .then(data => {
            if(data){
                if(bcrypt.compareSync(req.body.password, data.password)){
                    req.session.username = req.body.username;
                    req.session.idUser = data.id;
                    req.session.isLogin = true;
                    res.redirect('/course');
                }else{
                    throw new Error('Login Failed!')
                }
            }else{
                throw new Error('Login Failed!')
            }
        })
        .catch(err => res.redirect('/login?error='+err.message))
    }

    static logout(req,res){
        req.session.destroy(function(err) {
            if(err){
                res.send(err);
            }
        });
        res.redirect('/');
        
    }

    static loadUser(req,res){
        User.findOne({
            where: {
                id: req.session.idUser,
            },
            include: [{
                model:UserCourse,
                include: [{
                    model: Course
                }]
            }]
        })
        .then(data => {
            res.render('./user',{
                user:data,
                moment,
                error: req.query.error,
                success: req.query.success
            })
        })
        .catch(err => res.send(err.message))
    }
    static editUser(req,res){
        let obj = {
            email: req.body.email
        }
        if(req.body.password){
            let salt = bcrypt.genSaltSync(10);
            let hash = bcrypt.hashSync(req.body.password, salt);
            obj.password = hash;
        }
        User.update(obj,{
            where: {
                id: req.session.idUser
            }
        })
        .then((data) => {
            if(data) res.redirect('/user?success='+'Successfully Update Profile');
            else throw new Error('Something wrong happen')
        })
        .catch(err => res.redirect('/user?error='+err.message))
    }

}


module.exports = UserController