import React from "react";

export default function SignupForm(props) {
  const { signupValues, signupUpdate, signupSubmit } = props;
  
  const onChange = (event) => {
    const { name, value } = event.target;
    signupUpdate(name, value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    signupSubmit();
  };

  return (
    <div className="signup-form">
      <form className="signup-form-section" onSubmit={onSubmit}>

        <label>
          Role:
          <select value={signupValues.role} name="role" onChange={onChange} placeholder="...select...">
            <option value="">--Select Postion--</option>
            <option value="instructor">Instructor</option>
            <option value="client">Client</option>
          </select>
        </label>

        <label>
          Username:
          <input type="text" onChange={onChange} value={signupValues.username} name="username" maxLength="20"/>
        </label>

        <label>
          Password:
          <input type="text" onChange={onChange} value={signupValues.password} name="password"/>
        </label>

        <label>
          Email:
          <input type="text" onChange={onChange} value={signupValues.email} name="email" maxLength="40"/>
        </label>

        <div className="signupSubmit">
          <button disabled={ !signupValues.username || !signupValues.password || !signupValues.email || !signupValues.role }>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}