// const User = require('../model/User');
const Admin = require('../model/Admin');
const Product = require('../model/Product');
const Productacademic = require('../model/Productacademic');
const Productbuy = require('../model/Productbuy')
const Requsting = require('../model/Requsting');
const Order = require('../model/Order');
const Commint = require('../model/commint');
const Cardlib = require('../model/cardlib');
const CardAca = require('../model/cardaca');
const CardBuy = require('../model/cardbuy');
require('dotenv').config()
// const CardPrice = require('../model/cardprice');
// const accountSid = "AC3a33f665338b9663ab6453bee39891db"
// const authToken = "89db9236455ecf3cc9edcb9a76d69d9c"
// const verifySid = "VAb05b8ec5799751bdab11878886c5843b"
// const twilio = require('twilio');
// const client = twilio(accountSid, authToken)

// Register a new admin
const registerAdmin = async (req, res, next) => {
    const { permissions, definthome, username, phoneadmin, governorate, city, address, email, password ,deliveryservice} = req.body;
    const avatar = req.file.originalname
    const currentDate = new Date();
    const dateregister =currentDate.toISOString().split('T')[0]
    let subdata
    let subenddate
    if (definthome === "مكتبة") {
        subdata=30
        currentDate.setDate(currentDate.getDate() + 30);
        subenddate =currentDate.toISOString().split('T')[0]
    }else{
        subdata=21
        currentDate.setDate(currentDate.getDate() + 21);
        subenddate =currentDate.toISOString().split('T')[0]
    }
    try {
        const admin = new Admin({ permissions, definthome, username, phoneadmin, governorate, city, address, avatar, email, password ,dateregister,subdata,subenddate,deliveryservice});
        await admin.save();
        // res.render('finshlogin');
        res.render('finsh')
        // console.log(req);
    } catch (error) {
        next(error);
    }
};
// create a new Product
const createProduct = async (req, res, next) => {
    const { name, price } = req.body;
    const idname = req.body.idadmin.toString()
    const avatar = req.file.originalname

    try {
        const p = new Product({ idname, avatar, name, price });
        await p.save();
        res.render('finsh')
        console.log(req);
    } catch (error) {
        next(error);
    }
};
// create a Productacademic
const createProductacademic = async (req, res, next) => {
    const { name ,
        typecourse ,
        descritioncourse ,
        beforprice ,
        afterprice ,
        desecribationcotach ,
        notdescriation} = req.body;
    const idname = req.body.idadmin.toString()
    const avatar = req.file.originalname

    try {
        const p = new Productacademic({ 
            idname, 
            avatar, 
            name,
            typecourse ,
            descritioncourse ,
            beforprice ,
            afterprice ,
            desecribationcotach ,
            notdescriation});
        await p.save();
        res.render('finsh')
        console.log(req);
    } catch (error) {
        next(error);
    }
};
// create a Productacademic
const createProductbuy = async (req, res, next) => {
    const { name ,
        beforprice ,
        afterprice ,
        desecribationcotach ,
        notdescriation} = req.body;
    const idname = req.body.idadmin.toString()
    const avatar = req.file.originalname

    try {
        const p = new Productbuy({ 
            idname, 
            avatar, 
            name,
            beforprice ,
            afterprice ,
            desecribationcotach ,
            notdescriation});
        await p.save();
        res.render('finsh')
        console.log(req);
    } catch (error) {
        next(error);
    }
};
// create a new order print
const createRequsting = async (req, res, next) => {
    const { name, phone, massage } = req.body;
    const idname = req.params.id
    const filepdf = req.file.originalname
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const day = currentDate.getDate();
    const dateregister =`${year}-${month + 1}-${day}`

    try {
        const R = new Requsting({ idname, name, phone, filepdf, massage,dateregister });
        await R.save();
        // // Send OTP
        // let digits = "0123456789"
        // OTP = "";
        // for (let i = 0; i < 4; i++) {
        //     OTP += digits[Math.floor(Math.random() * 10)];
        // }
        // const responsephone = await client.messages
        //     .create({
        //         body: `Your otp verification for user `,
        //         from: '+201122656639', // Replace with your Messaging Service SID
        //         to: `+2${phone}`,
        //     })
        // console.log(responsephone);
        req.render('finsh');
    } catch (error) {
        next(error);
    }
};
// create a new order other
const createRequsting_2 = async (req, res, next) => {
    const { nameOrder, phoneOrder, massageOrder } = req.body;
    const idname = req.params.id
    console.log(req);
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const day = currentDate.getDate();
    const dateregister =`${year}-${month + 1}-${day}`
    try {
        const order = new Order({ idname, nameOrder, phoneOrder, massageOrder , dateregister});
        await order.save();
        res.render('finsh')
    } catch (error) {
        next(error);
    }
};
// create a new commint
const createRequsting_3 = async (req, res, next) => {
    const { namecommint, massagecommint } = req.body;
    const idname = req.params.id
    console.log(req);

    try {
        const commint = new Commint({ idname, namecommint, massagecommint });
        await commint.save();
        res.render('finsh')
    } catch (error) {
        next(error);
    }
};
// create a search bar
const searchbar = async (req, res, next) => {
    const { searchname } = req.body;
    const admin = await Admin.find({ username: searchname });
    console.log(searchname);

    if (admin.length > 0) {
        res.render("search", { admin: admin });
        console.log('1');
    } else {
        res.render("nosearch", { searchname });
        console.log('0');

    }
};
const nopermissions = async (req, res, next) => {
    const ID = req.body.permissions;
    try {
        await Admin.updateOne({ _id: ID }, { $set: { permissions: 0 } });
        res.render('finsh')
    } catch (err) {
        console.log(err);
    }
};
const permissions = async (req, res, next) => {
    const ID = req.body.permissions;
    try {
        await Admin.updateOne({ _id: ID }, { $set: { permissions: 1 } });
        res.render('finsh')
    } catch (err) {
        console.log(err);
    }
};
const deleteproduct = async (req, res, next) => {
    const ID = req.body.idproduct;
    try {
        await Product.deleteOne({ _id: ID })
        res.render('finsh');
        console.log(req);
    } catch (error) {
        next(error);
    }

};
const deleteproductacademy =async (req, res, next) => {
    const ID = req.body.idproduct;
    try {
        await Productacademic.deleteOne({ _id: ID })
        res.render('finsh');
        console.log(req);
    } catch (error) {
        next(error);
    }

};
const deleteproductbuy = async (req, res, next) => {
    const ID = req.body.idproduct;
    try {
        await Productbuy.deleteOne({ _id: ID })
        res.render('finsh');
        console.log(req);
    } catch (error) {
        next(error);
    }

};

//create edite card price lib
const editeCardlib = async (req, res, next) => {
    const {oneMontlib,twoMontlib,threeMontlib} = req.body;
    try {
        const cardlib = new Cardlib({oneMontlib,twoMontlib,threeMontlib});
        await cardlib.save();
        res.render('finsh');
    } catch (error) {
        next(error);
    }
};

//create edite card price Acdemac
const editeCardacd = async (req, res, next) => {
    const {oneMontAcd,twoMontAcd,threeMontAcd} = req.body;
    try {
        const cardaca = new CardAca({oneMontAcd,twoMontAcd,threeMontAcd});
        await cardaca.save();
        res.render('finsh');
    } catch (error) {
        next(error);
    }
};

//create edite card price buy book
const editeCardbuy = async (req, res, next) => {
    const {oneMontlibBuy,twoMontlibBuy,threeMontlibBuy} = req.body;
    try {
        const cardbuy = new CardBuy({oneMontlibBuy,twoMontlibBuy,threeMontlibBuy});
        await cardbuy.save();
        res.render('finsh');
    } catch (error) {
        next(error);
    }
};
//create edite card price buy book
const editeCardPrice = async (req, res, next) => {
    const {idOfDay,numberOfDays} = req.body;
    try {
        console.log(typeof (numberOfDays));
        const currentDate = new Date();
        console.log(currentDate);
        const dateregister =currentDate.toISOString().split('T')[0]
        console.log(dateregister);
        await Admin.updateOne({ _id: idOfDay }, { $set: { dateregister: dateregister } });
        currentDate.setDate(currentDate.getDate() + parseInt(numberOfDays));
        console.log(currentDate);
        const subenddate =currentDate.toISOString().split('T')[0]
        console.log(subenddate);
        await Admin.updateOne({ _id: idOfDay }, { $set: { subenddate: subenddate } });
        await Admin.updateOne({ _id: idOfDay }, { $set: { subdata: numberOfDays } });
        res.render('finsh');
    } catch (error) {
        next(error);
    }
};
// Send OTP
// verify OTP
// Login with an existing user
const login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const admin = await Admin.findOne({ email });
        if (admin) {
            const passwordMatch = admin.password;
            if (passwordMatch != password) {
                return res.render("login");
            } else {
                
                if (admin.permissions === 0) {
                    res.render("permissions")
                } else {
                    const product = await Product.find({ idname: admin.id })
                    const productacademic = await Productacademic.find({ idname: admin.id })
                    const productbuy = await Productbuy.find({ idname: admin.id })
                    const requsting = await Requsting.find({ idname: admin.id })
                    const order = await Order.find({ idname: admin.id })
                    if (admin.definthome === "مكتبة") {
                        res.render("admindeshbord", { adminuser: admin.username, imgadmin: admin.avatar, idadmin: admin.id, product: product, requsting: requsting, order: order });
                    }else if(admin.definthome === "أكاديمية") {
                        res.render("admindeshbord_2", { adminuser: admin.username, imgadmin: admin.avatar, idadmin: admin.id, product: productacademic, order: order });
                    }
                    else {
                        res.render("admindeshbord_3", { adminuser: admin.username, imgadmin: admin.avatar, idadmin: admin.id, product: productbuy, order: order });
                    }
                }
            }
        } else if (email === process.env.EMAIL_COMPANY && password === process.env.PASSWORD_COMPANY) {
            const allAdmin = await Admin.find()
            allAdmin.forEach(admin => {
                if (admin.dateregister === admin.subenddate) 
                admin.permissions = 0
            });
            // console.log(allAdmin);
            res.render("maktabtokodeshbord", { allAdmin: allAdmin });

        }
        else {
            res.render("error");
        }
    } catch (error) {
        next(error);
    }
};


module.exports = { registerAdmin, login, createProduct, createRequsting, createRequsting_2, createRequsting_3, searchbar, nopermissions, permissions, deleteproduct,editeCardlib ,editeCardacd,editeCardbuy,editeCardPrice,createProductacademic,deleteproductacademy,createProductbuy,deleteproductbuy};