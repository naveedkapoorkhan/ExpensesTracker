import React from 'react'
import {useState} from "react"
const ExpenseDescription = (props) => {
 
    let [title,setTitle]=useState(props.title)
   
  
    const changeTitleHandler=function (){  
    if(props.index==0){
        setTitle("Kabeer Khan Kapoor")
    }
      if(props.index==1){
        setTitle("ishraq Khan Kapoor")
    }
     if(props.index==2){
        setTitle("Naveed Khan Kapoor")
    }
     if(props.index==3){
        setTitle("mubeen Khan Kapoor")
    }
     if(props.index==4){
        setTitle("Arsh Khan Kapoor")
    }
    }
    function undo(){
      if(title!=props.title){
        setTitle(props.title)
      }
    }
    
  return (
   <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{`${props.amount}$`}</div>
        <button onClick={changeTitleHandler}>Change the title</button>
          <button onClick={undo}>Undo</button>
      </div>
  )
}

export default ExpenseDescription