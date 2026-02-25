import './ExpenseItem.css';

function ExpenseItem(props) {
   let {title,day,month,year,expensesAmount}=props
  return (
    <div className='expense-item'>
      <div className='expense-item__date'>{`${day}-${month}-${year}`}</div>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{`${expensesAmount}$`}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;