import React from 'react';
import { Route, Redirect, Switch, NavLink } from 'react-router-dom';
import PrivateRoute from './private_route';
import Dashboard from './dashboard';
import Login from './login';
import SignUp from './sign_up';
import auth from '../services/auth';

const styles = {
  header: {
    display: 'flex',
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px"
  },
  brand: {
    fontSize: "1.5rem"
  },
  headerLink: {
    padding: "5px"
  }
}

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <header style={styles.header}>
          <div style={styles.brand}>React Auth</div>

          {this.rightLinks()}
        </header>

        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    );
  }

  rightLinks() {
    return (auth.isAuthenticated() ?
      <div>
        <a href="#" onClick={this.logout.bind(this)} style={styles.headerLink}>Logout</a>
      </div>
    :
      <div>
        <NavLink to="/login" style={styles.headerLink}>Login</NavLink>
        <NavLink to="/signup" style={styles.headerLink}>Sign Up</NavLink>
      </div>
    );
  }

  logout(e) {
    e.preventDefault();
    auth.logout();
    this.setState({ logout: true }); // trigger render
  }
}
