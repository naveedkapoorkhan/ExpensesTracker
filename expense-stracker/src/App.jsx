import React, { useState } from 'react'
import ExpenseItem from './components/UI/ExpenseItem'
import expenses from './components/Expenses/Expenses'
import Card from './components/UI/Card'
import NewExpense from "./components/NewExpense/NewExpense"
import TotalExpenses from './components/TotalExpenses/TotalExpenses'
const App = () => {
   let [userExpenses,setUserExpenses]=useState(expenses)

 function newExpenseDataUser(data){
 
 setUserExpenses(previous=>[data,...previous])

 }
 

  return (
    <div >
     
     
      <NewExpense userDataExpense={newExpenseDataUser} ></NewExpense>
      <Card>
      
        <ExpenseItem expenses={userExpenses}></ExpenseItem>
        <TotalExpenses expenses={userExpenses}/>
      </Card>
  
      
    </div>
    
  )
}

export default App