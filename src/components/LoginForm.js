import React from "react";


export default function LoginForm(props) {
  const { loginValues, loginUpdate, loginSubmit } = props;

  const onChange = (event) => {
    const { name, value } = event.target;
    loginUpdate(name, value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    loginSubmit();
  };
  
  return (
    <div className="login-form">
      <form className="login-form-section" onSubmit={onSubmit}>
        
        <label>
          Username:
          <input type="text" onChange={onChange} value={loginValues.username} name="username" maxLength="20"/>
        </label>

        <label>
          Password:
          <input type="text" onChange={onChange} value={loginValues.password} name="password"/>
        </label>

        <div className="loginSubmit">
          <button
            disabled={!loginValues.username || !loginValues.password || !loginValues.role}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}