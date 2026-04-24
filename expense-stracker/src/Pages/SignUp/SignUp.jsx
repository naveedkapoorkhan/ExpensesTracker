import React, { useState } from 'react'
import { USER_API_URL } from "../../Api.js"

const SignUp = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignUpForm = (e) => {
    e.preventDefault();
    const user = { email: email, password: password }

    fetch(`${USER_API_URL}/register`, {
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
          <div className="card shadow border-0">
            <div className="card-body p-4">
              <h3 className="card-title text-center mb-4">Create Account</h3>
              <form onSubmit={handleSignUpForm}>
                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="name@example.com" 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    placeholder="create a password" 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                  />
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-success">
                    Sign Up
                  </button>
                  <div className="text-center mt-2">
                    <small className="text-muted">
                      Already have an account? <a href="/login" className="text-decoration-none">Login</a>
                    </small>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp