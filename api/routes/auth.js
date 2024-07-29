const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
// Register
router.post("/register", async (req,res)=>{
   

   try{

    // New password
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(req.body.password, salt);
    
    // Create user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPass,
     });

     // Save user and return
    const user = await newUser.save();
    res.status(200).json(user);
   } catch(error){
    console.log(error);
   }
   
});

// Login
router.post("/login", async(req,res)=>{
   try{
      const user = await User.findOne({email:req.body.email});
      !user && res.status(404).send("User not found");
      const validPass = await bcrypt.compare(req.body.password, user.password);
      !validPass && res.status(400).json("Incorrect password");

      res.status(200).json(user);
   } catch(error){
      console.log(error);
   }
   
});

module.exports = router;