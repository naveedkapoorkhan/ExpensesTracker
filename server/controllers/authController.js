import User from "../model/userModel.js"
import bcrypt from "bcrypt"
const {hash,compare}=bcrypt
export const userRegister=async(req,res)=>{
try{
const {email,password}=req.body
if(!email || !password) return res.status(401).json({message:"email and password is  required"})
 
    const hashPassword= await hash(password,10)
const matchEmail=await User.findOne({email:email})
if(matchEmail) return res.json({message:"Email already exist"})

 await  User.create({email:email,password:hashPassword})
 return res.json({message:"user Created Successfully"})

}
catch(error){
console.log(error)
res.status(500).json({message:"internal server error"})
}



}
export const userLogin=async(req,res)=>{
    
    try{
    const {email,password}=req.body
    const user=await User.findOne({email})
    if(!user) return res.status(404).json({message:"User not found!"})
        const matchPassword = await compare(password,user.password)
    if(!matchPassword) return res.status(401).json({message:" Not Valid Password"})
     
        return res.json({message:"login sucessfull"})

        
}
catch(error)
{
    console.log(error)
    res.json({message:"internal server error"})
}
}
