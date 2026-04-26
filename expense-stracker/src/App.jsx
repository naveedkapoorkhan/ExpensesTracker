import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExpenseItem from './components/UI/ExpenseItem';
import Card from './components/UI/Card';
import NewExpense from "./Pages/NewExpense/NewExpense";
import Navbar from './components/Navbar/Navbar';
import { Expense_API_URL } from "./Api"; 
import Login from './Pages/Login/Login';  
import SignUp from './Pages/SignUp/SignUp';
const App = () => {
  const [expenses, setExpenses] = useState([]);

  // The central function to get data
  const getExpenses = () => {
    fetch(`${Expense_API_URL}/getExpenses`)
      .then(res => res.json())
      .then(data => {
        const newFirst = [...data].reverse();
        setExpenses(newFirst);
      })
      .catch(err => console.log(err));
  };

  // Initial load
  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <BrowserRouter>
      <div className='main-app'>
        <Navbar />
        <Routes>
          {/* Pass getExpenses as a prop so the form can refresh the list */}
          <Route path='/addExpense' element={<NewExpense onAddSuccess={getExpenses} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
       
        <Route path='/' element={
            <Card>      
              <ExpenseItem expenses={expenses} refreshData={getExpenses} />
            </Card>
          } />
        </Routes>

      
      </div>
    </BrowserRouter>
  );
};

export default App;