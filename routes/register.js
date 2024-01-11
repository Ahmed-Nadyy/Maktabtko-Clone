var express = require('express');
var router = express.Router();
const { registerAdmin} = require('../controllers/auth');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,'public/images/admin');
    },
    filename: (req, file, cb) => {
        cb(null,file.originalname);
    }
});

const upload = multer({ storage });
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('register');
});
router.get('/admin', function(req, res, next) {
    res.render('admin');
});
router.post('/admin',upload.single('avatar'),registerAdmin);

router.get('/login', function(req, res, next) {
    res.render('login');
});
// router.post('/user', registerUser);

// router.post('/login', login);
module.exports = router;
