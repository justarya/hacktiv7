'use strict';
module.exports = (sequelize, DataTypes) => {
    const generateHASH = require('../helper/HASH')
    const Model = sequelize.Sequelize.Model
    class User extends Model {
    }
    User.init({
        username: {
            type: DataTypes.STRING,
            validate: {
                isUnique: function(value) {
                    return User.findOne({
                        where: {
                            username: value
                        }
                    })
                    .then(result => {
                        if (result){
                            throw new Error("Username has been used")
                        }
                    })
                    .catch(err => {
                        throw err;
                    })
                } 
            } 
        },
        password: DataTypes.STRING,
        balance: DataTypes.INTEGER,
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: {
                    args: true,
                    msg: "Email format is WRONG"
                },
                isUnique: function(value) {
                    return User.findOne({
                        where: {
                            email: value
                        }
                    })
                    .then(result => {
                        if (result){
                            throw new Error("Email has been used")
                        }
                    })
                    .catch(err => {
                        throw err;
                    })
                }
            }
        },
        salt: DataTypes.STRING
    },{
        sequelize
    })
    User.addHook('beforeCreate', 'hashPassword', (user, options) => {
        let generate = generateHASH(user.password);
        user.salt = generate.salt;
        user.password = generate.password;
    })
    User.addHook('beforeCreate', 'generateBalance' , (user, options) => {
        user.balance = 10000
    })
  User.associate = function(models) {
    // associations can be defined here
        User.hasMany(models.UserCourse)
  };
  return User;
};