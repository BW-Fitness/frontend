import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import styled from "styled-components";

const SignupWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height 100vh;
  background-image: url("https://s3-ap-southeast-2.amazonaws.com/oca/media/wysiwyg/how-to-add-value-to-your-personal-training-clients-1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;

const SignupFormBox = styled.div`
  width: 40%;
  background-color: #fff;
  padding: 5% 4%;
  border-radius: 7px;
`;

const SignForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;'
  text-align: ce
`;

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
    <SignupWrapper>
      <SignupFormBox>
        <SignForm onSubmit={handleSubmit}>
          <h1>Register</h1>
          <label htmlFor="roleSelect">Role: </label>
          <select
            id="roleSelect"
            name="role"
            onChange={handleChange}
            placeholder="...select..."
          >
            <option value="">--Select Postion--</option>
            <option value="instructor">Instructor</option>
            <option value="client">Client</option>
          </select>
          <br/>
          <label htmlFor="signupUser">Username: </label>
          <input
            id="signupUser"
            type="text"
            onChange={handleChange}
            name="username"
            maxLength="20"
          />
          <br/>
          <label htmlFor="signupPass">Password: </label>
          <input id="signupPass" type="password" onChange={handleChange} name="password" />
          <br/>
          <label htmlFor="signupEmail">Email: </label>
          <input
            id="signupEmail"
            type="text"
            onChange={handleChange}
            name="email"
            maxLength="40"
          />
          <br/>
          <button>Sign Up</button>
        </SignForm>
      </SignupFormBox>
    </SignupWrapper>
  );
}

