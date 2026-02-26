import './ExpenseItem.css';

function ExpenseItem({expenses}) {
  
  return (
    <>
  {
    expenses.map((expense,index)=>(

        <div className='expense-item' key={index}>
      <div className='expense-item__date'>{`${expense.day}-${expense.month}-${expense.year}`}</div>
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
