import React from "react";

const Login = ({ formErrors, parent }) => (
  <div className="login">
    <h1>Login</h1>
    <form onSubmit={parent.handleLogin} noValidate>
      <div className="email">
        <label htmlFor="email">Email</label>
        <input
          className={formErrors.email.length > 0 ? "error" : null}
          placeholder="Email"
          type="email"
          name="email"
          noValidate
          onChange={parent.handleChange}
        />
        {formErrors.email.length > 0 && (
          <span className="errorMessage">{formErrors.email}</span>
        )}
      </div>
      <div className="password">
        <label htmlFor="password">Password</label>
        <input
          className={formErrors.password.length > 0 ? "error" : null}
          placeholder="Password"
          type="password"
          name="password"
          noValidate
          onChange={parent.handleChange}
        />
        {formErrors.password.length > 0 && (
          <span className="errorMessage">{formErrors.password}</span>
        )}
      </div>
      <div className="createAccount">
        <button type="submit">Login</button>
        <small onClick={parent.setSignupState}>Don't Have an Account Yet?</small>
      </div>
    </form>
  </div>
);

export default Login;
