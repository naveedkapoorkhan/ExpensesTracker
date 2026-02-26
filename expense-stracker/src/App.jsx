import React from 'react'
import ExpenseItem from './components/ExpenseItem'
import expenses from './components/Expenses'
import Card from './components/Card'

const App = () => {
   


  return (
    <div >
      <h2>Hello coder</h2>
      {/* <ExpenseItem title={expenses[0].expenseTitle} month={expenses[0].month} day={expenses[0].day}  year={expenses[0].year} expensesAmount={expenses[0].expenseAmount}></ExpenseItem>
       <ExpenseItem title={expenses[1].expenseTitle} month={expenses[1].month} day={expenses[1].day}  year={expenses[1].year} expensesAmount={expenses[1].expenseAmount}></ExpenseItem>
      <ExpenseItem title={expenses[2].expenseTitle} month={expenses[2].month} day={expenses[2].day}  year={expenses[2].year} expensesAmount={expenses[2].expenseAmount}></ExpenseItem>
      */}
      {/* <ExpenseItem expenses={expenses}></ExpenseItem> */}
      <Card>
      
        <ExpenseItem expenses={expenses}></ExpenseItem>

      </Card>
      
      
    </div>
    
  )
}

export default App