import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-list'>
            <div className='adExpense'><Link to="/addExpense">Add Expenses</Link></div>
          <div>
            <div><Link to="/login">Login</Link></div>
            <div><Link to="/signup">SignUp</Link></div>
          </div>
        </div>
        
    </div>
  )
}

export default Navbar