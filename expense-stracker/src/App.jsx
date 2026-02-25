import React from 'react'
import ExpenseItem from './components/ExpenseItem'
const App = () => {
   const expenseDate=new Date()
    const expenseTitle="wine expenses"
    const month = expenseDate.toLocaleString('en-US', { month: 'long' });
  const day = expenseDate.toLocaleString('en-US', { day: '2-digit' });
  const year = expenseDate.getFullYear();
const expenseAmount=240000

const expenses=[
  {
    expenseTitle:"wine expenses",
   
    month:month,
    day:day,
    year:year,
    expenseAmount:200
  }
  , {
    expenseTitle:"HouseHold expenses",
   
    month:month,
    day:day,
    year:year,
    expenseAmount:20000
  },
   {
    expenseTitle:"Transportation expenses",
   
    month:month,
    day:day,
    year:year,
    expenseAmount:500
  }
]
  return (
    <div>
      <h2>Hello coder</h2>
      <ExpenseItem title={expenses[0].expenseTitle} month={expenses[0].month} day={expenses[0].day}  year={expenses[0].year} expensesAmount={expenses[0].expenseAmount}></ExpenseItem>
       <ExpenseItem title={expenses[1].expenseTitle} month={expenses[1].month} day={expenses[1].day}  year={expenses[1].year} expensesAmount={expenses[1].expenseAmount}></ExpenseItem>
      <ExpenseItem title={expenses[2].expenseTitle} month={expenses[2].month} day={expenses[2].day}  year={expenses[2].year} expensesAmount={expenses[2].expenseAmount}></ExpenseItem>
     
    </div>
  )
}

export default App