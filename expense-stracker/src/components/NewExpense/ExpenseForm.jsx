import React from 'react'
import "./ExpenseForm.css"
import {useState} from "react"

const ExpenseForm = ({userData}) => {
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
    
    let NewExpense={id:Math.floor(Math.random()*10000000000),title:enteredTitle,date:new Date(enteredDate),amount:enteredAmount}
    
    SetEnteredTitle("")
    SetEnteredAmount("")
    SetEnteredDate("")
    userData(NewExpense)
   }


  
  return (
   
         <form onSubmit={formHandler}>
         <div className="new-expense__controls">
            <div className="new-expense__control">
             <label>Title</label>
             <input type="text"  onChange={titleChangeHandler} value={enteredTitle} required/>
            </div>
          

             <div className="new-expense__control">
             <label>Amount</label>
             <input type="number" min="0.01" step="0.01"  onChange={AmountChangeHandler} value={enteredAmount} required/>
            </div>
             <div className="new-expense__control">
             <label>Date</label>
             <input type="date" min="2023-06-26" max="2026-06-25" onChange={DateChangeHandler} value={enteredDate} required/>
            </div>
             <div className="new-expense__actions">
             <button type="submit">Add Expense</button>
             
            </div>

         </div>

         </form>
   
  )
}

export default ExpenseForm