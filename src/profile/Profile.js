// src/profile/Profile.js
import React from 'react';
import PropTypes from 'prop-types';

function Profile(props) {
  const { fullName, bio, profession, children, handleName } = props;
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {children}
      <h1 style={{ color: 'SlateBlue ' }}>{fullName}</h1>
      <h2>{bio}</h2>
      <h3>{profession}</h3>
      <button onClick={() => handleName(fullName)}>Click Me</button>
    </div>
  );
}
// Inline styles
const profileStyle = {
    border: '1px solid #ccc',
    padding: '20px',
    maxWidth: '500px',
    margin: '20px auto',
    borderRadius: '5px',
    textAlign: 'center',
  };

  const imgStyle = {
    borderRadius: '50%',
    marginTop: '20px',
    marginBottom: '10px',
  };

  const nameStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const professionStyle = {
    fontSize: '20px',
    color: '#888',
    marginBottom: '20px',
  };

  const bioStyle = {
    fontSize: '18px',
    lineHeight: '1.5',
    margin: '20px 0',
  };
//create prototype
Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  handleName: PropTypes.func.isRequired,
};

Profile.defaultProps = {
  fullName: 'Wissal',
  bio: 'Full stack Developer',
  profession: 'Web Developer',
};

export default Profile;
