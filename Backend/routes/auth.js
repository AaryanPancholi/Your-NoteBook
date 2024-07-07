const express=require('express');
const router=express.Router();
const fetchUser=require('../middleware/Fetchuser');
const bcrypt=require('bcrypt')
var jwt = require('jsonwebtoken');
const JWT_SECRET='AaryanCode'
const { body, validationResult } = require('express-validator');
//Create a user using Post"/api/auth/".Dosent require Auth
const User=require('../models/User')
router.post('/createuser',[ body('name','Enter a vailid name').isLength({min:3}),
    body('password').isLength({min:5}),
    body('email','enter a valid email').isEmail()],           
    async(req,res)=>{
      let success=false
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.status(400).json({ success,errors: result.array() })
      }
      const salt = await bcrypt.genSalt(10)
    secPass= await bcrypt.hash(req.body.password,salt)
      try{
      const user =await  User.create({
        name:req.body.name,
        email:req.body.email,
        password:secPass
      });
      const data={
        id:user.id
      }
      const jwt_Data=jwt.sign(data,JWT_SECRET)
      success=true
      res.json({success,user,jwt_Data})}
      catch(error){res.status(500).json({success,error:'server error'})
    };
  
    })
    
//   res.send({ errors: result.array() });


//autheticate a user
router.post('/login',[ 
  body('password','password canot be blank').isLength({min:5}),
  body('email','enter a valid email').isEmail()],           
  async(req,res)=>{
    let success=false
    const result= validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() })
    }
    const {email,password}=req.body
    try{
      let user=await User.findOne({email})
      if(!user){return res.status(400).json({success, error:'please try login with correct creditanls'})
    }
    const passMatch=await bcrypt.compare(password,
      user.password)
  if(!passMatch)
  
  {
    return res.status(400).json({success,error:'please try login with correct credentials'})
  }
  const data={
  user:{
    id:user.id
  }
}
  success=true
 const jwt_Data=jwt.sign(data,JWT_SECRET)
res.json({success,jwt_Data})

    

  }
  catch(error){
    console.log(error)
    res.status(500).send('some derror occured')
  }
    }
)
//Get Loggoed in User Deatils user
router.post('/getUser',fetchUser,
  async(req,res)=>{ 

try {
  const userId=req.user.id
  const user=await User.findById(userId).select("-password")
  res.json(user)
} catch (error) {
  console.log(error)
    res.status(500).json('some error occured')
}})
module.exports=router