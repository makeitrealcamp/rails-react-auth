import React from 'react';
import auth from '../services/auth';

export default class SignUp extends React.Component {
  constructor() {
    super();
    
    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    if (auth.isAuthenticated()) {
      return <Redirect to="/" />;
    }

    return (
      <div>
      <label htmlFor="email">Email: </label>
      <input type="email" id="email" value={this.state.email} onChange={this.updateEmail.bind(this)} /><br />
      <label htmlFor="password">Password: </label>
      <input type="password" id="password" value={this.state.password} onChange={this.updatePassword.bind(this)} /><br />
      <button onClick={this.signUp.bind(this)}>Sign Up</button>
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

  }
}
