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

 
   res.json({Expenses,message:"deleted sucessfully"})
}

// export const UpdateExpenses = (req, res) => {

//    const expenseID = Number(req.params.id)
//    const editExpense = req.body

//    // remove old expense
//    const filteredExpenses = Expenses.filter(
//       (expense) => expense.id !== expenseID
//    )

//    // add updated expense
//    const updatedExpense = {
//       id: expenseID,
//       ...editExpense
//    }

//    Expenses.length = 0
//    Expenses.push(...filteredExpenses, updatedExpense)

//    res.json({
//       message: "Expense updated successfully",
//       Expenses
//    })
// }

export const UpdateExpenses = (req,res)=>{
   const expenseID = Number(req.params.id)
   const editExpense = req.body

   const updatedExpenses = Expenses.map((expense)=>{
      if(expense.id === expenseID){
         return {...expense,...editExpense}
      }
      return expense
   })

   Expenses.length = 0
   Expenses.push(...updatedExpenses)

   res.json({
      message:"Expense updated successfully",
      Expenses
   })
}