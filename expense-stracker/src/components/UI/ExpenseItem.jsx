import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import TotalExpenses from "../TotalExpenses/TotalExpenses"
import ExpenseDescription from "./ExpenseDescription"
import { useState ,useEffect} from 'react';
function ExpenseItem() {
const [expenses,setExpenses]=useState([])
const [edit,setEdit]=useState(null)
  //props is always an object even if you send it array still will be object 
 const getExpenses=()=>{
  fetch("http://localhost:5000/expense/getExpenses")
  .then(res=>res.json())
  .then(data=>setExpenses(data))
  .catch(err=>console.log(err))
 }
useEffect(()=>{
   getExpenses()
 
},[])
const handleDeleteExpense=(id)=>{
  fetch(`http://localhost:5000/expense/delete/${id}`,{
    method:"DELETE"
  })
  .then(res=>res.json())
  .then(data=>{setExpenses(data.Expenses)
    alert(data.message)
  })
  .catch(err=>console.log(err))
 
}

const handleEdit=(expense)=>{
   setEdit(expense)
}
const handleForm=(id)=>{
 
  fetch(`http://localhost:5000/expense/update/${id}`,{
    method:"PUT",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(edit)
  })
  .then(res=>res.json())
  .then(data=>{
    setExpenses(data.Expenses)
    alert(data.message)
   
  }
)
 
  setEdit(null)
  getExpenses()
}

  return (
    <div className='main-expenseItem'>
       {
        expenses.map((expense)=>(
          <div className='expense-item' key={expense.id}>
            <ExpenseDate date={expense.date}></ExpenseDate>
            <ExpenseDescription title={expense.title} amount={expense.amount}></ExpenseDescription>
            <div className="button-expenseItem">
              <button className="deleteButton"  onClick={()=>{handleDeleteExpense(expense.id)}}>Delete</button>
              <button className="updateButton" onClick={()=>{handleEdit(expense)}} >Update</button>
       </div>
    </div>
    ))
  }
  {
    edit && (<div>
      <input type="text" name="" id="" value={edit.title} onChange={(e)=>{setEdit({...edit,title:e.target.value})}}/>
      <input type="number" name="" id="" value={edit.amount} onChange={(e)=>{setEdit({...edit,amount:e.target.value})}}/>
      <input type='date' name="" id="" value={edit.date} onChange={(e)=>{setEdit({...edit,date:e.target.value})}}/>
      <button onClick={()=>handleForm(edit.id)}>Save</button>
    </div>)
  }
   {expenses.length === 0 && <h2>Sorry No Item Exist</h2>} 
   <TotalExpenses expenses={expenses}/>
  </div>
  );
}


export default ExpenseItem;