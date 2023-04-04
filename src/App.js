import './App.css';
import React from 'react';
import Profile from './profile/Profile';
import profilePhoto from '../src/profile/img.jpg';


function App() {
  const handleName = (name) => alert(`Hello, my name is ${name}`);
  
  return (
    <div className="App">
      <Profile 
        fullName="Wissal"
        bio="Full stack Developer"
        profession="Web Developer"
        handleName={handleName}
      >
<img src={profilePhoto} alt="Profile" style={{ width: '300px', borderRadius: '50%'}}/>    
  </Profile>
    </div>
  );
}

export default App;
