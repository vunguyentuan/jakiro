import React from 'react';
import UserListItem from './UserListItem'

const UserList = ({ users }) => {
  return (
    <div className="userlist-wrapper">
      {users.map(userName => <UserListItem userName={userName}/>)}
    </div>
  );
};

export default UserList;