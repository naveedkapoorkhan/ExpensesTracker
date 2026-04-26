import React from 'react'
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"

const NewExpense = ({ onAddSuccess }) => {
  return (
    <div className="new-expense">
      <ExpenseForm onAddSuccess={onAddSuccess} />
    </div>
  );
};

export default NewExpense