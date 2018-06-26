import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, NavLink } from 'react-router-dom';
import PrivateRoute from './private_route';
import Dashboard from './dashboard';
import Login from './login';
import SignUp from './sign_up';
import auth from '../services/auth';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isAuthenticated: auth.isAuthenticated()
    }
  }

  render() {
    return (
      <Router>
        <div>
          <header className="main">
            <div className="brand">React Auth</div>

            {this.rightLinks()}
          </header>

          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route path="/login" render={(props) => <Login {...props} updateAuth={this.updateAuth.bind(this)} />} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </div>
      </Router>
    );
  }

  rightLinks() {
    return (auth.isAuthenticated() ?
      <div>
        <a href="#" onClick={this.logout.bind(this)} className="link">Logout</a>
      </div>
    :
      <div>
        <NavLink to="/login" className="link">Login</NavLink>
        <NavLink to="/signup" className="link">Sign Up</NavLink>
      </div>
    );
  }

  updateAuth() {
    this.setState({
      isAuthenticated: auth.isAuthenticated()
    });
  }

  logout(e) {
    e.preventDefault();
    auth.logout();
    this.updateAuth();
  }
}
