import React from 'react'
import {useState} from "react"
const ExpenseDescription = (props) => {
  
 let {title,amount}=props
    
  return (
   <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{amount}$</div>
    </div>
  )
}


export default ExpenseDescription