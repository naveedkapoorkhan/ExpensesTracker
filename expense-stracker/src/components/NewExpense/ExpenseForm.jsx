import React from 'react'
import "./ExpenseForm.css"
import {useState} from "react"

const ExpenseForm = () => {
const [enteredTitle,SetEnteredTitle]=useState("")
const [enteredAmount,SetEnteredAmount]=useState("")
const [enteredDate,SetEnteredDate]=useState("")

   function titleChangeHandler(event){

     SetEnteredTitle(event.target.value)

   }
  
   function AmountChangeHandler(event){
    SetEnteredAmount(event.target.value)

   }

     function DateChangeHandler(event){
    SetEnteredDate(event.target.value)
    
   }
   function formHandler(event){
    event.preventDefault()
    let NewExpense={title:enteredTitle,date:new Date(enteredDate),amount:enteredAmount}
    console.log(NewExpense)
    SetEnteredTitle("")
    SetEnteredAmount("")
    SetEnteredDate("")

   }


  
  return (
   
         <form onSubmit={formHandler}>
         <div className="new-expense__controls">
            <div className="new-expense__control">
             <label>Title</label>
             <input type="text"  onChange={titleChangeHandler} value={enteredTitle}/>
            </div>
          

             <div className="new-expense__control">
             <label>Amount</label>
             <input type="number" min="0.01" step="0.01"  onChange={AmountChangeHandler} value={enteredAmount}/>
            </div>
             <div className="new-expense__control">
             <label>Date</label>
             <input type="date" min="2023-06-26" max="2026-06-25" onChange={DateChangeHandler} value={enteredDate}/>
            </div>
             <div className="new-expense__actions">
             <button type="submit">Add Expense</button>
             
            </div>

         </div>

         </form>
   
  )
}

export default ExpenseForm