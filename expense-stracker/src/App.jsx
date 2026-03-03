import React, { useState } from 'react'
import ExpenseItem from './components/UI/ExpenseItem'
import expenses from './components/Expenses/Expenses'
import Card from './components/UI/Card'
import NewExpense from "./components/NewExpense/NewExpense"
const App = () => {
   let [userExpenses,setUserExpenses]=useState(expenses)

 function newExpenseDataUser(data){
 
 setUserExpenses(previous=>[data,...previous])

 }
 

  return (
    <div >
     
      {/* <ExpenseItem title={expenses[0].expenseTitle} month={expenses[0].month} day={expenses[0].day}  year={expenses[0].year} expensesAmount={expenses[0].expenseAmount}></ExpenseItem>
       <ExpenseItem title={expenses[1].expenseTitle} month={expenses[1].month} day={expenses[1].day}  year={expenses[1].year} expensesAmount={expenses[1].expenseAmount}></ExpenseItem>
      <ExpenseItem title={expenses[2].expenseTitle} month={expenses[2].month} day={expenses[2].day}  year={expenses[2].year} expensesAmount={expenses[2].expenseAmount}></ExpenseItem>
      */}
      {/* <ExpenseItem expenses={expenses}></ExpenseItem> */}
      <NewExpense userDataExpense={newExpenseDataUser} ></NewExpense>
      <Card>
      
        <ExpenseItem expenses={userExpenses}></ExpenseItem>

      </Card>
      
    </div>
    
  )
}

export default App