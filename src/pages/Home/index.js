import React, { Component } from 'react';
import { TOP_USERS } from '../../config'
import UserList from '../../components/UserList'

class HomePage extends Component {
  render() {
    return (
      <div>
        <h3>Top 5 GitHub Users</h3>
        <p>Tap the username to see more information</p>

        <UserList users={TOP_USERS} />
      </div>
    );
  }
}

export default HomePage;