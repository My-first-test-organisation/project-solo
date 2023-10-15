import React from "react";
import { useState } from 'react'

function Registration() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCPassword] = useState('')

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const res = await fetch('/api/register', {
      method: "POST",
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ firstName, lastName, email, password, cpassword })
    })
    const data = await res.json();
    console.log(data)
  }


  return (
    <>
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-10 col-md-8 col-lg-6">
            <h3>Registration</h3>
            {/* Form */}
            <form name="signup-form" className="signup-form" onSubmit={onHandleSubmit} method="post">
              <div className="form-group mt-5">
                <input type="text" required
                  className="form-control"
                  placeholder="FirstName"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)} /><br />
              </div>
              <div className="form-group mt-5">
                <input type="text" required
                  className="form-control"
                  placeholder="Lastname"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)} /><br />
              </div>
              <div className="form-group mt-5">
                <input type="text" required
                  className="form-control"
                  placeholder="email..."
                  value={email}
                  onChange={(event) => setEmail(event.target.value)} /><br />
              </div>
              <div className="form-group mt-5">
                <input type="password" required
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)} autoComplete="on" /><br />
              </div>
              <div className="form-group mt-5">
                <input type="password" required
                  className="form-control"
                  placeholder="Confirm password"
                  value={cpassword}
                  onChange={(event) => setCPassword(event.target.value)} /><br />
              </div>
              <div className="text-center mt-5">
                <button type="submit" className="btn btn-secondary">&nbsp; Sign up &nbsp;</button>
              </div>
            </form>
            {/* Form end */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Registration;

