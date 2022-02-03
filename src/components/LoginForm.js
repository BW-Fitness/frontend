import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

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
    <div className="login-form">
      <form className="login-form-section" onSubmit={handleSubmit}>
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

        <div className="login-submit">
          <button>Submit</button>
        </div>
        <div>
          <img src="https://media.istockphoto.com/photos/body-mind-and-soul-picture-id182149444?k=20&m=182149444&s=612x612&w=0&h=DqdP1FCdTFXbAbI-h76tTCOPvS44-ek9KyCvci5bwcI=" />
        </div>
      </form>
    </div>
  );
}
