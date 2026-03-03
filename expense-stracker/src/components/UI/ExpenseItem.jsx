import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDescription from "./ExpenseDescription"
function ExpenseItem({expenses}) {
  //props is always an object even if you send it array still will be object 
 
  return (
    <div className='main-expenseItem'>
   
  {
    expenses.map((expense)=>(
        
        <div className='expense-item' key={expense.id}>
        <ExpenseDate date={expense.date}></ExpenseDate>
        <ExpenseDescription title={expense.title} amount={expense.amount}></ExpenseDescription>
     
    </div>
    ))
  }
  
  </div>
  );
}


export default ExpenseItem;