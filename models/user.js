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
        const bcrypt = require('bcryptjs');
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(user.password, salt);
        user.password = hash;
    })
    User.addHook('beforeCreate', 'generateBalance' , (user, options) => {
        user.balance = 10000
    })
  User.associate = function(models) {
    // associations can be defined here
        User.hasMany(models.UserCourse)
        User.belongsToMany(models.Course, { through: models.UserCourse})
  };
  return User;
};