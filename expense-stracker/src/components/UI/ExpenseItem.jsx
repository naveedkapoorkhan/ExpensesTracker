import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import TotalExpenses from "../TotalExpenses/TotalExpenses"
import ExpenseDescription from "./ExpenseDescription"
import { useState ,useEffect} from 'react';
function ExpenseItem() {
const [expenses,setExpenses]=useState([])
  //props is always an object even if you send it array still will be object 
 const getExpenses=()=>{
  fetch("http://localhost:5000/expense/getExpenses")
  .then(res=>res.json())
  .then(data=>setExpenses(data))
  .catch(err=>console.log(err))
 }
useEffect(()=>{
   getExpenses()
 
})
  return (
    <div className='main-expenseItem'>
       {
        expenses.map((expense)=>(
          <div className='expense-item' key={expense.id}>
            <ExpenseDate date={expense.date}></ExpenseDate>
            <ExpenseDescription title={expense.title} amount={expense.amount}></ExpenseDescription>
            <div className="button-expenseItem">
              <button className="deleteButton"  onClick={()=>{deleteItem(expense.id)}}>Delete</button>
              <button className="updateButton" onClick={()=>{setEditItem(expense)}} >Update</button>
       </div>
    </div>
    ))
  }
   {expenses.length === 0 && <h2>Sorry No Item Exist</h2>} 
   <TotalExpenses expenses={expenses}/>
  </div>
  );
}


export default ExpenseItem;