import React from 'react'

const ExpenseDescription = (props) => {
    let {title,amount}=props
    const cli=function (){console.log("clicked!")}
  return (
   <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{`${amount}$`}</div>
        <button onClick={cli}>Change the title</button>
      </div>
  )
}

export default ExpenseDescription