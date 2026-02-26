import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem({expenses}) {
  //props is always an object even if you send it array still will be object 

  return (
    <>
   
  {
    expenses.map((expense,index)=>(

        <div className='expense-item' key={index}>
       <ExpenseDate day={expense.day} month={expense.month} year={expense.year}></ExpenseDate>
      <div className='expense-item__description'>
        <h2>{expense.expenseTitle}</h2>
        <div className='expense-item__price'>{`${expense.expenseAmount}$`}</div>
      </div>
    </div>
    ))
  }</>
  );
}

export default ExpenseItem;
