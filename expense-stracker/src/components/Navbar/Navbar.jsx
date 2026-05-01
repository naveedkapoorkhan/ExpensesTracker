import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  // 1. Check if the user is logged in by looking for the token
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    // 2. Remove token from localStorage
    localStorage.removeItem("token");
    
    alert("Logged out successfully!");
    
    // 3. Redirect user to the login page
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Brand/Logo - Optional */}
        <Link className="navbar-brand" to={isLoggedIn ? "/" : "/login"}>ExpenseTracker</Link>

        {/* Toggle button for mobile view */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            {/* Show these navigation links only if the user is logged in */}
            {isLoggedIn && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/addExpense">Add Expenses</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Show list of Expenses</Link>
                </li>
              </>
            )}
          </ul>
          
          <div className="d-flex gap-2">
            {/* OLD CODE:
            <Link className="btn btn-outline-light" to="/login">Login</Link>
            <Link className="btn btn-primary" to="/signup">SignUp</Link>
            */}

            {/* NEW CODE: Show Logout button OR Login/SignUp buttons based on user status */}
            {!isLoggedIn ? (
              <>
                <Link className="btn btn-outline-light" to="/login">Login</Link>
                <Link className="btn btn-primary" to="/signup">SignUp</Link>
              </>
            ) : (
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;