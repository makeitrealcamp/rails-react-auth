import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './private_route';
import MainHeader from './main_header'
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
          <MainHeader logout={this.logout.bind(this)} isAuthenticated={this.state.isAuthenticated} />

          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route path="/login" render={(props) => <Login {...props} updateAuth={this.updateAuth.bind(this)} />} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </div>
      </Router>
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
