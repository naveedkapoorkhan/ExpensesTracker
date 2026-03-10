import React from 'react'
import "./TotalExpenses.css"
const TotalExpenses = ({expenses}) => {
    //+expense.amount here + mean a value from input coming string we convert it into number or Number(expense.amount)
    let totalExpenses=expenses.reduce((sum,expense)=>sum + +expense.amount,0)
    return (
    <div className='totalExpense'>

      <div className='totalexpenses-text'>Total Expenses</div>
      <div className='totalexpenses-value'>{totalExpenses+"$"}</div>

    </div>
  )
}


export default TotalExpenses