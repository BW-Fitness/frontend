import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import styled from "styled-components";

export default function LoginForm(props) {
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
    console.log(handleSubmit);
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then((res) => {
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("role", res.data.role);
        push("/login");
      })
      .catch((err) => {
        console.log("REGISTER ERROR: ", err);
      });
  };

  return (
    <LoginWrapper>
      <FormBox>
        <Form onSubmit={handleSubmit}>
          <h1>Welcome Back!</h1>
          <label htmlFor="userInput">Username: </label>
          <input
            id="userInput"
            type="text"
            onChange={handleChange}
            name="username"
            maxLength="20"
          />
          <br/>
          <label htmlFor="passInput">Password: </label>
          <input id="passInput" type="password" onChange={handleChange} name="password" />
          <br/>
          <button>Submit</button>
        </Form>
      </FormBox>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height 100vh;
  background-image: url("https://media.istockphoto.com/photos/body-mind-and-soul-picture-id182149444?k=20&m=182149444&s=612x612&w=0&h=DqdP1FCdTFXbAbI-h76tTCOPvS44-ek9KyCvci5bwcI=");
  background-repeat: no-repeat;
  background-size: cover;
`;

const FormBox = styled.div`
  width: 40%;
  background-color: #fff;
  padding: 5% 4%;
  border-radius: 7px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;'
  text-align: ce
`;
