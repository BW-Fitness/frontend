import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function LoginForm(props) {

  const { push } = useHistory();

  const [credentials, setCredentials] = useState({
    username: '',
    password: '', 
    role: ''
  })

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', credentials)
      .then(res => {
        localStorage.setItem('username', res.data.username)
        localStorage.setItem('role', res.data.role)
        push('/login')
      })
      .catch(err => {
        console.log('REGISTER ERROR: ', err);
      })
  }
  
  return (
    <div className="login-form">
      <form className="login-form-section" onSubmit={handleSubmit}>
        
        <label>
          Username:
          <input type="text" handleChange={handleChange} name="username" maxLength="20"/>
        </label>

        <label>
          Password:
          <input type="text" handleChange={handleChange} name="password"/>
        </label>

        <div className="login-submit">
          <button>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}