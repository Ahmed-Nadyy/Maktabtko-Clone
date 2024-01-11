var express = require('express');
var router = express.Router();
const { login , createProduct,nopermissions,permissions,deleteproduct,editeCardlib,editeCardacd,editeCardbuy,editeCardPrice,createProductacademic,deleteproductacademy,createProductbuy,deleteproductbuy} = require('../controllers/auth');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,'public/images/product');
    },
    filename: (req, file, cb) => {
        cb(null,file.originalname);
    }
});

const upload = multer({ storage });

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('login');
});

router.post('/', login);

router.post('/requsting', upload.single('avatar'),createProduct);
router.post('/requsting_1', upload.single('avatar'),createProductacademic);
router.post('/requsting_2', upload.single('avatar'),createProductbuy);
router.post('/deleting',deleteproduct);
router.post('/deleting_1',deleteproductacademy);
router.post('/deleting_2',deleteproductbuy);

router.post('/nopermissions',nopermissions);
router.post('/permissions',permissions);
// edite date cardPrice
router.post('/cardprice',editeCardPrice);
router.post('/cardlib',editeCardlib);
router.post('/cardacd',editeCardacd);
router.post('/cardbuy',editeCardbuy);


module.exports = router;
