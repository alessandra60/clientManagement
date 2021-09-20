var express = require('express');
var router = express.Router();
let User=require('../models/user.model');

//******ENDPOINTS*****

//****GET ROUTE******
router.get('/', function(req, res){
    User.find()
    .then(users=>res.status(200).json(users))
    .catch(err=>res.status(400).json('Error'+ err));
}); 

//******POST ROUTE*****
router.post('/add', function(req, res) {
    const { name, phone, email, company, role, description} = req.body.client;
    if (isNaN(parseInt(phone))){
        res.json({
            isPhoneNumber: false,
            msg: "Please verify phone number, wrong input"
        });
    }else{
        const newUser = new User({
            name,
            phone : parseInt(phone),
            email, 
            company,
            role,
            description
        });
        newUser.save()
            .then(()=>res.json({
                isPhoneNumber: true,
                msg: "New User Registred"
            })
        )
        .catch(err=>res.status(400).json("Invalid input")); 
    }
    
});

//******DELETE ROUTE*******
 router.delete('/delete/:id', function(req, res){
    User.findByIdAndDelete(req.params.id)
    .then(()=>res.json("User deleted"))
    .catch(err=>res.status(400).json('Error:'+ err));
}); 

//***ROUTE GET TO UPDATE BY ID****
router.get('/update/:id', function(req, res) {
    const newUser ={};
    User.findById(req.params.id, (err, user)=> {
        newUser._id = user._id;
        newUser.name = user.name;
        newUser.phone = user.phone;
        newUser.email = user.email;
        newUser.company = user.company;
        newUser.role = user.role;
        newUser.description = user.description;
        res.status(200).json(newUser);
    })
    
});

//******ROUTE POST TO UPDATE BY ID*****
router.post('/update/:id', function(req, res) {
    if(isNaN(parseInt(req.body.phone))){
        res.json({
            isPhoneNumber: false,
            msg: "Please verify phone number, wrong input"
        })
    }else{
        User.findById(req.params.id)
        .then(user=>{
            user.name=req.body.name;
            user.phone=req.body.phone;
            user.email=req.body.email;
            user.company=req.body.company;
            user.role=req.body.role;
            user.description=req.body.description;
    
            user.save()
            .then(()=>res.json({
                isPhoneNumber: true,
                msg: "User updated"})
            )
            .catch(err=>res.status(400).json('Error'+err));
        })
        .catch(err=>res.status(400).json('Error:'+ err)); 
    }
    
});

module.exports=router;