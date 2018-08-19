var express=require('express');
var router=express();
var mongoose=require('mongoose');
var goods=require('../models/goods.js');
//链接mongodb数据库
mongoose.connect('mongodb://127.0.0.1:27017/dumall');

mongoose.connection.on('connected',function(){
    console.log('mongodb connected');
})
mongoose.connection.on('error',function(){
    console.log('error');
})
mongoose.connection.on('disconnected',function(){
    console.log(' disconnected mongodb');
})

router.get('/list',function(req,res,next){
    // res.send('hello goods list');
    let page = parseInt(req.param("page"));
    let pageSize = parseInt(req.param("pageSize"));
    let priceLevel = req.param("priceLevel");
    let sort = req.param("sort");
    let skip = (page - 1) * pageSize;
    var priceGt = '', priceLte = '';
    let params = {};
    if(priceLevel!='all')
    {
        switch (priceLevel) {
            case '0': priceGt = 0; priceLte = 100; break;
            case '1': priceGt = 100; priceLte = 500; break;
            case '2': priceGt = 500; priceLte = 1000; break;
            case '3': priceGt = 1000; priceLte = 5000; break;
        }
    
        params={
            salePrice:{
                $gt: priceGt,
                $lte:priceLte
            }
    };
}
    let goodsModel = goods.find(params)
      .skip(skip)
      .limit(pageSize);
    // goodsModel.sort({'salePrice': sort });
    goodsModel.sort({ 'salePrice': sort });
    goodsModel.exec(function (err, doc) {
        if (err) {
            res.json({
                status: '1',
                msg: err.message,
                result: ''
            });
        } else {
            console.log(doc)
            res.json({
                status: '0',
                msg: '',
                result: {
                    count: doc.length,
                    list: doc
                }
            });
        }
    })
   
    // res.end(console.log(req));
})
router.post('/addCart',function(req,res,next){
    var  productId=req.body.productId;
    var  userId=req.cookies.userId;
    console.log(userId);
    console.log(productId);
    // console.log(1111111111111);
    var user=require('../models/users.js');
    user.findOne({userId:userId},function(err,userdoc){
        if(err)
        {
            res.json({
                status:'1',
                msg:err.message,
                result:''
            })
        }
        else{
            if(userdoc)
            {
                var  productItem='';
                userdoc.cartList.forEach(function (item) {
                    if(item.productId==productId)
                    {
                        productItem=item;
                        item.productNum++;
                    }
                    
                });
                if(productItem)
                {
                    userdoc.save(function(err2,doc){
                        if(err)
                        {
                            res.json({
                                status:'1',
                                msg:err2.message,
                                result:''
                            })
                        }
                        else{
                            res.json({
                                status:'0',
                                msg:'成功加入购物车',
                                result:'suc'
                            })
                        }
                    })
                }
                else
                {
                    goods.findOne({productId:productId},function(err3,doc3){
                        if(err3)
                        {
                            res.json({
                                status:'1',
                                msg:err3.message,
                                result:''
                            })
                        }
                        else
                        {
                            if(doc3)
                            {   
                                doc3.productNum=1;
                                doc3.checked=1;
                                userdoc.cartList.push(doc3);
                                userdoc.save(function(err4,doc4){
                                    if(err4)
                                    {
                                        res.json({
                                            status:'1',
                                            msg:err4.message,
                                            result:''
                                        })
                                    }
                                    else{
                                        res.json({
                                            status:'0',
                                            msg:'',
                                            result:'suc'
                                        })
                                    }
                                })
                            }
                            
                        }
                    })
                }

                
            }
        }
    })
})








module.exports=router;