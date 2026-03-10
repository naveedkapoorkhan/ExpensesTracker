import React, { useState } from 'react'
import "./App.css"
import ExpenseItem from './components/UI/ExpenseItem'
import expenses from './components/Expenses/Expenses'
import Card from './components/UI/Card'
import NewExpense from "./components/NewExpense/NewExpense"
const App = () => {
   


  return (
    <div className='main-app'>
     
     
      <NewExpense  ></NewExpense>
     
      
      <Card>
      
        <ExpenseItem ></ExpenseItem>
        
       
      </Card>
        
    </div>
    
  )
}

export default App