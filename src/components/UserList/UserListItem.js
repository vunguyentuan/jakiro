import React from 'react';
import './userlist-item.css';
import { Link } from 'react-router-dom'

const UserListItem = ({ userName }) => {
  return (
    <Link to={`/users/${userName}`}>
      <div class="userlist-item">
        {userName}
      </div>
    </Link>
  );
};

export default UserListItem;