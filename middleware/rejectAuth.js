module.exports = function(req,res,next){
  if(req.session.isLogin){
    res.redirect('/course');
  }else{
    next();
  }
}