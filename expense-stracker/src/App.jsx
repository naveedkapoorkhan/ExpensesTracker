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
    /* OLD CODE:
    fetch(`${Expense_API_URL}/getExpenses`)
      .then(res => res.json())
      .then(data => {
        const newFirst = [...data].reverse();
        setExpenses(newFirst);
      })
      .catch(err => console.log(err));
    */

    // NEW CODE: Get token from localStorage and send it in headers
    const token = localStorage.getItem("token");

    if (!token) {
      console.log("User is not logged in");
      setExpenses([]);
      return;
    }

    fetch(`${Expense_API_URL}/getExpenses`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) throw new Error("Unauthorized access or token expired");
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          const newFirst = [...data].reverse();
          setExpenses(newFirst);
        } else {
          setExpenses([]);
        }
      })
      .catch(err => {
        console.log(err);
        setExpenses([]);
      });
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