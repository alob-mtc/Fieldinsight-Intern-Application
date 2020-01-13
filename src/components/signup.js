import React from "react";

const Signup = ({ formErrors, parent }) => (
  <div className="signup">
    <h1>Create Account</h1>
    <form onSubmit={parent.handleSignup} noValidate>
      <div className="firstName">
        <label htmlFor="firstName">First Name</label>
        <input
          className={formErrors.firstName.length > 0 ? "error" : null}
          placeholder="First Name"
          type="text"
          name="firstName"
          noValidate
          onChange={parent.handleChange}
        />
        {formErrors.firstName.length > 0 && (
          <span className="errorMessage">{formErrors.firstName}</span>
        )}
      </div>
      <div className="lastName">
        <label htmlFor="lastName">Last Name</label>
        <input
          className={formErrors.lastName.length > 0 ? "error" : null}
          placeholder="Last Name"
          type="text"
          name="lastName"
          noValidate
          onChange={parent.handleChange}
        />
        {formErrors.lastName.length > 0 && (
          <span className="errorMessage">{formErrors.lastName}</span>
        )}
      </div>
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
        <button type="submit">Create Account</button>
        <small onClick={parent.setSignupState}>Already Have an Account?</small>
      </div>
    </form>
  </div>
);

export default Signup;
