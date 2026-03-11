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

export const DeleteExpenses=(req,res)=>{
   const expenseID =Number(req.params.id)
  const newExpenses = Expenses.filter((expense)=>expense.id !== expenseID)
  Expenses.length = 0
   Expenses.push(...newExpenses)

 
  res.json({newExpenses,message:"deleted sucessfully"})
}
