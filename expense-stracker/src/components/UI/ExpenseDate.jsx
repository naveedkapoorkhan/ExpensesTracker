import React from 'react'
import "./ExpenseDate.css"
const ExpenseDate = (expense) => {
   
  return (
   <div className='expense-item__date'>
        <div className="month">{expense.month}</div>
        <div className="year">{expense.year}</div>
        <div className="day">{expense.day}</div>
      </div>
  )
}

export default ExpenseDate