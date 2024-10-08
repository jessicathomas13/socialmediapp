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
router.get("/", async(req, res)=>{
    const userId = req.query.userId;
    const username = req.query.username;
    
    try{
        const user = userId ? await User.findById(userId) : await User.findOne({username: username});
        const {password,updatedAt, ...other} = user._doc
        res.status(200).json(other);
    }
    catch(error){
        return res.status(500).json(error);

    }
    
    
});

// Get friends
router.get("/following/:userId", async(req,res)=>{
    try{
        const user = await User.findById(req.params.userId);
        const following = await Promise.all(
            user.following.map((followingId)=>{
                return User.findById(followingId)
            })
        )
        let followingList = [];
        following.map((friend)=>{
            const{_id,username,profileImg} = friend;
            followingList.push({_id,username,profileImg});
        });
        res.status(200).json(followingList)

    }catch(error){
        res.status(500).json(error)
    }
})

// Follow a user
router.put("/:id/follow", async (req,res)=>{
    if(req.body.userId !== req.params.id){
        try{
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({$push:{followers: req.body.userId}});
                await currentUser.updateOne({$push:{following: req.params.id}});
                res.status(200).json("Followed!");

            }else{
                res.status(403).json("You already follow this account")
            }

        }catch(error){
            res.status(500).json(error)
        }
    }else{
        res.status(403).json("You cannot follow yourself")
    }
})

// Unfollow a user
router.put("/:id/unfollow", async (req,res)=>{
    if(req.body.userId !== req.params.id){
        try{
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if(user.followers.includes(req.body.userId)){
                await user.updateOne({$pull:{followers: req.body.userId}});
                await currentUser.updateOne({$pull:{following: req.params.id}});
                res.status(200).json("Unfollowed!");

            }else{
                res.status(403).json("You are not following this account this account")
            }

        }catch(error){
            res.status(500).json(error)
        }
    }else{
        res.status(403).json("You cannot unfollow yourself")
    }
})


module.exports = router