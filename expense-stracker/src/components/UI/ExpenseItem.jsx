import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDescription from "./ExpenseDescription"
import {useState} from "react"
function ExpenseItem({expenses}) {
  //props is always an object even if you send it array still will be object 
  let [items,setItems]=useState(expenses)
 function deleteItem(id){
   let newItems = items.filter((item) => {
  return item.id !== id
})
   setItems(newItems)
 }

 function updateItem(id){
 let updatedItem= items.map((item)=>{
   return item.id===id? {...item,title:"Naveed Khan Kapoor",amount:200}:item
  })
setItems(updatedItem);
 }

  return (
    <div className='main-expenseItem'>
   {items.length === 0 && <h2>Sorry No Item Exist</h2>}
  {
    items.map((expense)=>(
        
        <div className='expense-item' key={expense.id}>
        <ExpenseDate date={expense.date}></ExpenseDate>
        <ExpenseDescription title={expense.title} amount={expense.amount}></ExpenseDescription>
       <div className="button-expenseItem">
         <button className="deleteButton"  onClick={()=>{deleteItem(expense.id)}}>Delete</button>
         <button className="updateButton" onClick={()=>{ updateItem(expense.id)}}>Update</button>
       </div>
    </div>
    ))
  }
  
  </div>
  );
}


export default ExpenseItem;