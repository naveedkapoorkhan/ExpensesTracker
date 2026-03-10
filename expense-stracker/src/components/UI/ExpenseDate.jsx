import React from 'react'
import "./ExpenseDate.css"
const ExpenseDate = ({date}) => {
   const expenseDate = new Date(date)
      const month = expenseDate.toLocaleString('en-US', { month: 'long' });
      const day = expenseDate.toLocaleString('en-US', { day: '2-digit' });
      const year = expenseDate.getFullYear();
    
  return (
   <div className='expense-item__date'>
        <div className="month">{month}</div>
        <div className="year">{year}</div>
        <div className="day">{day}</div>
      </div>
  )
}

export default ExpenseDate