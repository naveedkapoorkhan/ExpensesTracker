import { useState } from 'react'
import { USER_API_URL } from "../../Api.js"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignUpForm = (e) => {
    e.preventDefault();
    const user = { email: email, password: password }

    fetch(`${USER_API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        alert(data.message)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Login</h3>
              <form onSubmit={handleSignUpForm}>
                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="enter your email" 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    placeholder="enter your password" 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login