router.get("/list", function (req, res, next) {
    let page = parseInt(req.param("page"));
    let pageSize = parseInt(req.param("pageSize"));
    let priceLevel = req.param("priceLevel");
    let sort = req.param("sort");
    let skip = (page - 1) * pageSize;
    var priceGt = '', priceLte = '';
    let params = {};
    if (priceLevel != 'all') {
        switch (priceLevel) {
            case '0': priceGt = 0; priceLte = 100; break;
            case '1': priceGt = 100; priceLte = 500; break;
            case '2': priceGt = 500; priceLte = 1000; break;
            case '3': priceGt = 1000; priceLte = 5000; break;
        }
        params = {
            salePrice: {
                $gt: priceGt,
                $lte: priceLte
            }
        }
    }
    let goodsModel = Goods.find(params).skip(skip).limit(pageSize);
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
});