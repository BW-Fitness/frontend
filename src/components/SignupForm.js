import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function SignupForm(props) {
  const { push } = useHistory();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/signup", credentials)
      .then((res) => {
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("role", res.data.role);
        push("/");
      })
      .catch((err) => {
        console.log("REGISTER ERROR: ", err);
      });
  };

  return (
    <div className="signup-form">
      <form className="signup-form-section" onSubmit={handleSubmit}>
        <label>
          Role:
          <select
            name="role"
            onChange={handleChange}
            placeholder="...select..."
          >
            <option value="">--Select Postion--</option>
            <option value="instructor">Instructor</option>
            <option value="client">Client</option>
          </select>
        </label>

        <label>
          Username:
          <input
            type="text"
            onChange={handleChange}
            name="username"
            maxLength="20"
          />
        </label>

        <label>
          Password:
          <input type="password" onChange={handleChange} name="password" />
        </label>

        <label>
          Email:
          <input
            type="text"
            onChange={handleChange}
            name="email"
            maxLength="40"
          />
        </label>

        <div className="signup-submit">
          <input type="submit" value="Sign up" />
        </div>
        <div className="sign-up-image">
          <img src="https://s3-ap-southeast-2.amazonaws.com/oca/media/wysiwyg/how-to-add-value-to-your-personal-training-clients-1.jpg" />
        </div>
      </form>
    </div>
  );
}
