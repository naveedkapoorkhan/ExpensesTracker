import React from 'react'
import "./ExpenseDate.css"
const ExpenseDate = ({date}) => {
      const month = date.toLocaleString('en-US', { month: 'long' });
      const day = date.toLocaleString('en-US', { day: '2-digit' });
      const year = date.getFullYear();
    
  return (
   <div className='expense-item__date'>
        <div className="month">{month}</div>
        <div className="year">{year}</div>
        <div className="day">{day}</div>
      </div>
  )
}

export default ExpenseDate