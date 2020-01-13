import React, { Component } from "react";
import "./App.css";
import Signup from "./components/signup";
import Login from "./components/login";
import Hobbies from "./components/hobbies";

// my email regex checker
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: {
        access: false,
        isSignup: false
      },
      hobbies: [],
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      }
    };
  }

  setSignupState = () => {
    this.setState(prevState => {
      const auth = prevState.auth;
      return { ...prevState, auth: { ...auth, isSignup: !auth.isSignup } };
    });
  };

  handleSignup = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
      this.setState(prevState => ({ ...prevState, auth: { access: true } }));
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleLogin = e => {
    e.preventDefault();
    const data = {
      formErrors: this.state.formErrors,
      email: this.state.email,
      password: this.state.password
    };
    if (formValid(data)) {
      console.log(`
        --SUBMITTING--
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
      this.setState(prevState => ({ ...prevState, auth: { access: true } }));
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleLogin = e => {
    e.preventDefault();
    const data = {
      formErrors: this.state.formErrors,
      email: this.state.email,
      password: this.state.password
    };
    if (formValid(data)) {
      console.log(`
        --SUBMITTING--
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
      this.setState(prevState => ({ ...prevState, auth: { access: true } }));
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 && !this.state.auth.isSignup
            ? "minimum 3 characaters required"
            : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 && !this.state.auth.isSignup
            ? "minimum 3 characaters required"
            : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          {!this.state.auth.access ? (
            !this.state.auth.isSignup ? (
              <Signup formErrors={formErrors} parent={this} />
            ) : (
              <Login formErrors={formErrors} parent={this} />
            )
          ) : (
            <Hobbies />
          )}
        </div>
      </div>
    );
  }
}

export default App;
