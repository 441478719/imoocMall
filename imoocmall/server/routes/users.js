var express = require('express');
var router = express.Router();
var users=require('./../models/users.js')

/* GET users listing. */
// router.get('/login',function(req,res,next){
//   // res.send('111111111')
//   var param={
//     userName:'admin',
//     userPwd:'123456'
//   }
//   users.findOne(param,function(err,doc,next){
//     res.send(doc);
//   })
// })
router.post('/login', function(req, res, next) {
  // res.send('respond with a resource');
  // return;
  var param={
    userName:req.body.userName,
    userPwd:req.body.userPwd
  }
  users.findOne(param,function(err,doc){
    // console.log(doc);
    // console.log(222222222222)
    if(err)
    {
      // console.log(111111111111)
      res.json({
        status:'1',
        msg:err.message,
      })
    }
    else
    {
      // res.send('11111111111111');
      if(doc){
        res.cookie("userId",doc.userId,{
          path:'/',
          maxAge:1000*60*60
        });
        res.cookie("userName", doc.userName,{
          path: '/',
          maxAge: 1000 * 60 * 60
        });
        res.json({
          status:'0',
          msg:'',
          result:
          {
            userName:doc.userName,

          }
        })
      }
      else{
        res.json({
          status:'1',
          msg:'',
        })
      }
      
    }
  })


});
router.post('/logout',function(req,res,next){
    res.cookie('username','',{
      path:'/',
      maxAge:-1
    })
  res.cookie('userid', '', {
    path: '/',
    maxAge: -1
  })
    res.json({
      status:0,
      msg:'',
      result:''
    })
})
router.get('/cartList',function(req,res,next){
  var userId=req.cookies.userId;
  users.findOne({userId:userId},function(err,doc){
    if(err)
    {
      res.json({
        status:'1',
        msg:err.message,
        result:''
      })
    }
    else{
      if(doc)
      {
        res.json({
          status:'0',
          msg:'',
          result:doc.cartList
        })
      }
    }
  })
})

module.exports = router;
