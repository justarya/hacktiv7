const Voucher = require('../models').Voucher;
const User = require('../models').User;
const Model = require('../models');
class VoucherController {
  static validateVoucher(req,res){
    Voucher.update({
      status: false
    },{
      where: {
        status: true,
        code: req.body.code.toUpperCase()
      }
    })
    .then((data) => {
      if(!data){
        throw new Error('Voucher code is not valid')
      }else{
        return Voucher.findOne({where: {code:req.body.code.toUpperCase()}})
      }
    })
    .then((data) => {
      console.log(data.voucherValue);
      return User.update({
        balance: Model.sequelize.literal('balance +'+data.voucherValue)
      },{
        where: {
          id: req.session.idUser
        }
      })
    })
    .then((data) => {
      res.redirect('/user?success='+'voucher berhasil ditambahkan')
    })
    .catch(err => res.send(err));
  }
}

module.exports = VoucherController;