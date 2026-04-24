import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Brand/Logo - Optional */}
        <Link className="navbar-brand" to="/addExpense"  >ExpenseTracker</Link>

        {/* Toggle button for mobile view */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/addExpense">Add Expenses</Link>
            </li>
          </ul>
          
          <div className="d-flex gap-2">
            <Link className="btn btn-outline-light" to="/login">Login</Link>
            <Link className="btn btn-primary" to="/signup">SignUp</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;