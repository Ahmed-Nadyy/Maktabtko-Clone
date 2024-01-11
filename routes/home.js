var express = require('express');
var router = express.Router();
const Admin = require('../model/Admin');
const Product = require('../model/Product');
const Commint= require('../model/commint')
const {createRequsting,createRequsting_2,createRequsting_3,searchbar} = require('../controllers/auth');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,'public/images/pdf');
    },
    filename: (req, file, cb) => {
        cb(null,file.originalname);
    }
});
const upload = multer({ storage });

/* GET home page. */
router.get('/', async(req, res, next) => {
  const admin_1 = await Admin.find({ definthome:'مكتبة' })
  const admin_2 = await Admin.find({ definthome:'أكاديمية' })
  const admin_3 = await Admin.find({ definthome:'مكتبة كتب وروايات' })
  res.render('home',{admin_1:admin_1,admin_2:admin_2,admin_3:admin_3});
  // res.send('Data updated, reload the page');
});
router.post('/', searchbar);

router.get('/:id', async(req, res, next) => {
  console.log(req.params.id);
  const admin=await Admin.find({ _id:req.params.id })
  const product=await Product.find({ idname:req.params.id })
  const commint=await Commint.find({ idname:req.params.id })
  
  if(admin[0].definthome=='مكتبة')
  {
    res.render('homelib',{id:req.params.id,username:admin[0].username,governorate:admin[0].governorate,city:admin[0].city,address:admin[0].address,avatar:admin[0].avatar,deliveryservice:admin[0].deliveryservice,chunk:product,commint:commint});
  }
  else{
    res.render('homelib2',{id:req.params.id,username:admin[0].username,governorate:admin[0].governorate,city:admin[0].city,address:admin[0].address,avatar:admin[0].avatar,deliveryservice:admin[0].deliveryservice,chunk:product,commint:commint});
  }
  

});
// 1
router.get('/:id/upload',async(req, res, next) => {
  console.log(req.params.id);
  res.render('upload')
})
router.post('/:id/upload',createRequsting_2)
//2
router.get('/:id/upload1',async(req, res, next) => {
  console.log(req.params.id);
  res.render('upload1')
})
router.post('/:id/upload1',upload.single('filepdf'),createRequsting)
// 3
router.get('/:id/upload2',async(req, res, next) => {
  console.log(req.params.id);
  res.render('upload2')
})
router.post('/:id/upload2',createRequsting_3)

module.exports = router;
