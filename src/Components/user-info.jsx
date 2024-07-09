import React from 'react';
import './user-info.css';

class UserInfo extends React.Component {
  render() {
    const { name, number, dob } = this.props.person;
    return (
        <div className="user-info">
          { <>
          <p>Name: {name}</p>
          <p>Number: {number}</p>
          <p>DOB: {dob}</p>
          </>}
        </div>
      );
    }
}

export default UserInfo;