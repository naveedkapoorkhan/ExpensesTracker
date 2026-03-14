import mongoose from "mongoose"
import { DB_URL } from "../configuration/config.js"
const dbConnection=()=>{
    
    mongoose.connect(DB_URL)
    .then(()=>console.log("DataBase Connected successfully"))
    .catch(err=>console.log(err.stack))
}
export default dbConnection