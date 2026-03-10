import { Expenses } from "../db.js"
export const AddExpenses=(req,res)=>{
      const expenseItem=req.body
      Expenses.unshift(expenseItem)
      return res.json({
        message:"expense added successfully"
      })
}
export const GetExpenses=(req,res)=>{
 res.json(Expenses)
}