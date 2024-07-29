const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// Update user
router.put("/:id", async(req, res)=>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            }
            catch(error){
                return res.status(500).json(error)
            }
        }
        try{
            const user = await User.findByIdAndUpdate(req.params.id, {$set: req.body});
            res.status(200).json("Account updated");
        }
        catch(error){
            return res.status(500).json(error);

        }
    
    }
    else{
        return res.status(403).json("You can only update your own account.");
    }
});

// Delete user
router.delete("/:id", async(req, res)=>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
        
        try{
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Account deleted");
        }
        catch(error){
            return res.status(500).json(error);

        }
    
    }
    else{
        return res.status(403).json("You can only delete your own account.");
    }
});

// Get a user
router.get("/:id", async(req, res)=>{
    
    try{
        const user = await User.findById(req.params.id);
        const {password,updatedAt, ...other} = user._doc
        res.status(200).json(other);
    }
    catch(error){
        return res.status(500).json(error);

    }
    
    
});



module.exports = router