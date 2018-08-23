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
      console.log(doc);
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
router.post('/editCart',function(req,res,next){
  var productId=req.body.productId;
  var productNum=req.body.productNum;
  var checked=req.body.checked;
  var userId=req.cookies.userId;
  users.findOne({userId:userId},function(err,doc){
    if(err)
    {
      res.json({
        status:'1',
        msg:res.message,
        result:''
      })
    }
    else
    {
      if(doc)
      {
        doc.cartList.forEach((item)=>{
          if(item.productId==productId)
          {
            item.productNum=productNum;
            item.checked=checked;
          }
        })
        doc.save(function(err,doc2){
          if(err)
          {
            res.json({
              status: '1',
              msg: res.message,
              result: ''
            })
          }
          else{
            res.json({
              status: '0',
              msg: '',
              result: 'suc'
            })
          }
        })
      }
    }
  })
})

router.post('/deleteProduct',function(req,res,next){
  let productId=req.body.productId;
  let userId=req.cookies.userId;
  users.update({userId:userId},{
    $pull:{
      'cartList':{
        'productId':productId
      }
    }
  },function(err,doc){
    if(err)
    {
      res.json({
        status:'1',
        msg:err.message,
        result:''
      })
    }
    else
    {
      res.json({
        status: '0',
        msg: '',
        result: 'delete success'
      })
    }
  })
})
router.get('/checkLogin',function(req,res,next){
  var userId=req.cookies.userId;  
  
    if(userId)
    {
      res.json({
        status:'0',
        msg:'',
        result:req.cookies.userName || ''
      })
    }
    else
    {
      res.json({
        status: '1',
        msg: '当前用户未登录',
        result: ''
      })
    }
  
})
router.get('/addressList',function(req,res,next){
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
          result:doc.addressList
        })
      }
      else{
        res.json({
          status:'1',
          msg:'没有数据',
          result:''
        })
      }
    }
  })
  router.post("/delAddress", function(req, res, next) {
    var userId = req.cookies.userId;
    var addressId = req.body.addressId;
    users.update(
      { userId: userId },
      {
        $pull: {
          'addressList': {
            'addressId': addressId
          }
        }
      },
      function(err, doc) {
        if (err) {
          res.json({
            status: "1",
            msg: err.message,
            result: ""
          });
        } 
        else {
          res.json({
            status: "0",
            msg: "",
            result: "suc delAddress",
          });
        }
      }
    );
  });
})
router.post("/setDefalutAddr",function(req,res,next){
  var userId=req.cookies.userId;
  var addressId=req.body.addressId;
  users.findOne({userId:userId},function(err,doc){
    if(err)
    {
      res.json({
        status:'1',
        msg:err.message,
        result:''
      })
    }
    else
    {
      doc.addressList.forEach((item)=>{
        if(item.addressId==addressId)
        {
          item.isDefault=true;
        }
        else
        {
          item.isDefault=false;
        }
      })
      doc.save(function(err1,doc1)
    {
      if(err1)
      {
        res.json({
          status: '1',
          msg: err.message,
          result: ''
        })
      }
      else
      {
        res.json({
          status:'0',
          msg:'',
          result:'suc setDefault'
        })
      }
    })
      
    }
  })
});
module.exports = router;
