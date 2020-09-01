import React from 'react';
import PropTypes from 'prop-types';

import Styled from './Styled';

const UserCard = ({ user: { email, name, picture } }) => (
  <Styled className="card">
    <div className="details">
      <div className="user-photo">
        <img src={picture.large} alt="Avatar" />
      </div>
      <p className="user-title">Hi, My name is</p>
      <p className="user-value">
        <b>{`${name.title}. ${name.first} ${name.last}`}</b>
      </p>
      <p className="user-value">{email}</p>
    </div>
  </Styled>
);

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserCard;
