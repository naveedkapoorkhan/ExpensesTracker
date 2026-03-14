import mongoose from "mongoose"
const {Schema,model}=mongoose

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true,
       },
    password: {
        type: String,
        required: [true, 'Password is required'],
      //  minlength: [8, 'Password must be at least 8 characters long'],
      //  select: false // This prevents the password from being returned in queries by default
    }
});
const User=model("user",userSchema)
export default User