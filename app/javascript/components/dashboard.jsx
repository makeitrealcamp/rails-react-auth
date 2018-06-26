import React from 'react';
import ReactDOM from 'react-dom';
import users from '../services/users';

export default class Dashboard extends React.Component {
  constructor() {
    super();

    this.state = { users: [] }
  }

  componentDidMount() {
    users.list()
      .then((response) => {
        this.setState({ users: response.data });
      });
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
        <table>
          <tbody>
            {this.state.users.map((user, i) => (
              <tr key={i}>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
