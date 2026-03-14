import Expenses from "../model/ExpensesModel.js"
export const AddExpenses=async(req,res)=>{
     try{
       const expenseItem=req.body
    await  Expenses.create(expenseItem)
      return res.status(201).json({
        message:"expense added successfully"
      })
     }
     catch(err){
      console.error(err)
      return res.status(500).json({
         error:err.message,
         message:"error to add Expenses"
      })
     }
}
// export const GetExpenses=(req,res)=>{
//   const ListOfExpenses= Expenses.find()
//  res.json(ListOfExpenses)
// }
export const GetExpenses = async (req, res) => {
  try {
    
    const allExpenses = await Expenses.find(); 
    
    // Send the actual data back
    res.json(allExpenses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const DeleteExpenses=async(req,res)=>{
 try{
   const expenseId= req.params.id
   if(!expenseId) return res.status(404).json({message:"ID IS Necessary"})
   const deleteExpense=await Expenses.findByIdAndDelete(expenseId)
 if (!deleteExpense) {
      return res.status(404).json({ message: "Expense not found" });
    }
 return res.status(201).json({
   message:"Expense deleted successfully",
   deleteExpense:deleteExpense.title
})
 }
 catch(err){
   console.log(err)
   return res.status(500).json(
      {
         message:"server error"
      }
   )
 }
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

// export const UpdateExpenses = (req,res)=>{
//    const expenseID = Number(req.params.id)
//    const editExpense = req.body

//    const updatedExpenses = Expenses.map((expense)=>{
//       if(expense.id === expenseID){
//          return {...expense,...editExpense}
//       }
//       return expense
//    })

//    Expenses.length = 0
//    Expenses.push(...updatedExpenses)

//    res.json({
//       message:"Expense updated successfully",
//       Expenses
//    })
// }

export const UpdateExpenses = async(req,res)=>{
  try{
    const ExpenseId=req.params.id
  const updateData= req.body
   if(!ExpenseId) return res.status(400).json({message:"expense id Is Must"})
    const UpdateExpense=await Expenses.findByIdAndUpdate(ExpenseId,updateData)
  if(!UpdateExpense) return res.status(404).json({message:"Expense not found"})
   return res.status(200).json({message:"updated successfully"})
  }catch(err){
   console.error(error)
   return res.status(500).json({message:"server error during update"})

  }
}

