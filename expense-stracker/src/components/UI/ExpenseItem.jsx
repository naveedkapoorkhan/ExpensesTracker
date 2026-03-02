import ExpenseDate from './ExpenseDate';

import './ExpenseItem.css';

import ExpenseDescription from "./ExpenseDescription"
function ExpenseItem({expenses}) {
  //props is always an object even if you send it array still will be object 

  return (
    <div className='main-expenseItem'>
   
  {
    expenses.map((expense,index)=>(
        
        <div className='expense-item' key={index}>
        <ExpenseDate day={expense.day} month={expense.month} year={expense.year}></ExpenseDate>
        <ExpenseDescription title={expense.expenseTitle} amount={expense.expenseAmount} index={index}></ExpenseDescription>
        
    </div>
    ))
  }
  
  </div>
  );
}

export default ExpenseItem;
