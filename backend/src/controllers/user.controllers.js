import {User} from "../models/user.models.js"
export const registerUsers= async(req,res)=>{
    try {
        const {username,email,password}=req.body;
        if(!username || !email || !password) {
            return res.status(400).json({message:"All of the fields are important"});
        }

        const existing = await User.findOne({email})
        if(existing) {
            return res.status(400).json({
                message:"Email is already registered with us!",
                user:{id:user._id,email:user.email,username:user.username}
            });
        }
        const user=await User.create({
            username,
            email:email.toLowerCase(),
            password,
            loggedIn:false,
        });

        res.status(201).json({message:"User is registered"});
    
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"})
    }
}
