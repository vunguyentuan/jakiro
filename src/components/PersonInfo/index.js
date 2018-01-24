import React from 'react';
import './person-info.css'
const PersonInfo = ({ avatar_url, name, location }) => {
  return (
    <div className="person-container">
      <img className="person-avatar" width="100" src={avatar_url} alt="User avatar"/>

      <div className="person-info">
        <div className="person-name">{name}</div>
        <div className="person-location">{location}</div>
      </div>
    </div>
  );
};

export default PersonInfo;