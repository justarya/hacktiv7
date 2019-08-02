const Voucher = require('../models').Voucher;
const User = require('../models').User;
const Model = require('../models');
class VoucherController {
  static validateVoucher(req,res){
    let dataVoucher;
    Voucher.findOne({where: {code:req.body.code.toUpperCase()}})
    .then((data) => {
      dataVoucher = data;
      if(!data){
        throw new Error('Voucher code is not valid')
      }else{
        return Voucher.update({
          status: false
        },{
          where: {
            status: true,
            code: req.body.code.toUpperCase()
          }
        })
      }
    })
    .then((data) => {
      console.log(dataVoucher.voucherValue);
      return User.update({
        balance: Model.sequelize.literal('balance +'+dataVoucher.voucherValue)
      },{
        where: {
          id: req.session.idUser
        }
      })
    })
    .then((data) => {
      res.redirect('/user?success='+'voucher berhasil ditambahkan')
    })
    .catch(err => {
      res.redirect('/user?error='+'Voucher tidak valid')
    });
  }
}

module.exports = VoucherController;