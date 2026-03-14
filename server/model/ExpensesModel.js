import mongoose from "mongoose"
const {model,Schema}=mongoose

const ExpensesSchema=new Schema({
    title:{
        type:String,
        required:true

    },
    amount:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }

},{timestamps:true})

const Expenses=model("Expense",ExpensesSchema)
export default Expenses