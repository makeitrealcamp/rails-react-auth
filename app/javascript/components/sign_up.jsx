import React from 'react';
import { Redirect } from 'react-router-dom';
import auth from '../services/auth';
import users from '../services/users';

export default class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      redirectToLogin: false
    };
  }

  render() {
    if (auth.isAuthenticated()) {
      return <Redirect to="/" />;
    }

    if (this.state.redirectToLogin) {
      return <Redirect to="/login" />;
    }

    return (
      <div className="form">
        <header>Sign Up</header>
        <div className="body">
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" value={this.state.email} onChange={this.updateEmail.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" value={this.state.password} onChange={this.updatePassword.bind(this)} />
          </div>
        </div>
        <footer>
          <button onClick={this.signUp.bind(this)}>Sign Up</button>
        </footer>
      </div>
    );
  }

  updateEmail(e) {
    this.setState({ email: e.target.value });
  }

  updatePassword(e) {
    this.setState({ password: e.target.value });
  }

  signUp() {
    users.create({
      email: this.state.email,
      password: this.state.password
    }).then(() => {
      this.setState({ redirectToLogin: true });
    });
  }
}
