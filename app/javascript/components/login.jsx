import React from 'react';
import { Redirect } from 'react-router-dom';
import auth from '../services/auth';

export default class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    if (auth.isAuthenticated()) {
      console.log("Agggg!!!!!!!");
      const { from } = this.props.location.state || { from: { pathname: "/" } };
      return <Redirect to={from} />;
    }

    return (
      <div>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" value={this.state.email} onChange={this.updateEmail.bind(this)} /><br />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" value={this.state.password} onChange={this.updatePassword.bind(this)} /><br />
        <button onClick={this.login.bind(this)}>Login</button>
      </div>
    )
  }

  updateEmail(e) {
    this.setState({ email: e.target.value });
  }

  updatePassword(e) {
    this.setState({ password: e.target.value });
  }

  login() {
    auth.login(this.state.email, this.state.password)
      .then(() => {
        this.setState({ reload: 1 });
      }).catch(() =>{
        console.log("Invalid credentials!");
      });
  }
}
