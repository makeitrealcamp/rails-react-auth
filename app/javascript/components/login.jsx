import React from 'react';
import { Redirect } from 'react-router-dom';
import auth from '../services/auth';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    if (auth.isAuthenticated()) {
      const { from } = this.props.location.state || { from: { pathname: "/" } };
      return <Redirect to={from} />;
    }

    return (
      <div className="form">
        <header>Login</header>

        <div className="body">
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" value={this.state.email} onChange={this.updateEmail.bind(this)} autoFocus="true" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" value={this.state.password} onChange={this.updatePassword.bind(this)} />
          </div>
        </div>

        <footer>
          <button onClick={this.login.bind(this)}>Login</button>
        </footer>
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
        this.props.updateAuth();
      }).catch((err) => {
        console.error(err);
        console.log("Invalid credentials!");
      });
  }
}
