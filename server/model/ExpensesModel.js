// import mongoose from "mongoose"
// const {model,Schema}=mongoose

// const ExpensesSchema=new Schema({
//     title:{
//         type:String,
//         required:true

//     },
//     amount:{
//         type:Number,
//         required:true
//     },
//     date:{
//         type:Date,
//         default:Date.now
//     }

// },{timestamps:true})

// const Expenses=model("Expense",ExpensesSchema)
// export default Expenses



import mongoose from "mongoose"
const { model, Schema } = mongoose

const ExpensesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    /* OLD CODE: (No user field was present here) */

    // NEW CODE: This links every expense to the specific user who created it
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Must match your User model name exactly
        required: true
    }
}, { timestamps: true })

const Expenses = model("Expense", ExpensesSchema)
export default Expenses