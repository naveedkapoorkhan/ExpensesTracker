import React from 'react'
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"
const NewExpense = ({userDataExpense}) => {
  function userEnterData(data){
      userDataExpense(data)
     
  }
  return (
    <div className="new-expense">
   <ExpenseForm userData={userEnterData}></ExpenseForm>

    </div>
  )
}

export default NewExpense