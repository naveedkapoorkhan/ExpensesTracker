import Expenses from "../model/ExpensesModel.js"
export const AddExpenses=async(req,res)=>{
     try {
    const { title, amount, date } = req.body;
    const userId = req.user.id; // Get user ID from the middleware

    const newExpense = new Expenses({ title, amount, date });
    
    // Dynamically attach the user ID bypassing strict schema settings
    newExpense.set('user', userId, { strict: false });
    
    await newExpense.save();

    res.status(201).json({ message: "Expense added successfully", newExpense });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
}
// export const GetExpenses=(req,res)=>{
//   const ListOfExpenses= Expenses.find()
//  res.json(ListOfExpenses)
// }
// export const GetExpenses = async (req, res) => {
//   try {
//     // req.user.id matches the property name you included when you generated the JWT
//     const userId = req.user.id;
//     // Find expenses that belong ONLY to this logged-in user
//     const userExpenses = await Expenses.find({ user: userId });
//     //const allExpenses = await Expenses.find(); 
    
//     // Send the actual data back
//     res.json(userExpenses);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// };
export const GetExpenses = async (req, res) => {
  try {
    // req.user.id comes directly from the decoded token in your middleware
    const userId = req.user.id; 

    // Find ONLY expenses where the user field matches the logged-in user's ID
    const userExpenses = await Expenses.find({ user: userId }, null, { strict: false }); 
    
    res.json(userExpenses);
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

