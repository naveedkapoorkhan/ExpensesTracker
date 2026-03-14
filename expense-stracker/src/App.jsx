import React, { useState } from 'react'
import "./App.css"
import ExpenseItem from './components/UI/ExpenseItem'
import Card from './components/UI/Card'
import NewExpense from "./Pages/NewExpense/NewExpense"
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp'
const App = () => {
   


  return (
   <BrowserRouter BrowserRouter>
    <div className='main-app'>
     
     <Navbar/>
     <Routes>
      <Route path='/addExpense' element={<NewExpense/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      
     </Routes>
      {/* <NewExpense/>     */}
      <Card>      
        <ExpenseItem ></ExpenseItem>
      </Card>
        
    </div>
    </BrowserRouter>
  )
}

export default App