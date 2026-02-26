import './ExpenseItem.css';

function ExpenseItem({expenses}) {
  //props is always an object even if you send it array still will be object 

  return (
    <>
   
  {
    expenses.map((expense,index)=>(

        <div className='expense-item' key={index}>
      <div className='expense-item__date'>
        <div className="month">{expense.month}</div>
        <div className="year">{expense.year}</div>
        <div className="day">{expense.day}</div>
      </div>
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
