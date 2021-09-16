// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <>
    <div className = 'navContainer' >
      <div className = 'homeButton' >
        <NavLink exact to="/">
          <i className="fas fa-home">Home</i>
        </NavLink>
      </div>
      <div className = 'logStuff' >
        {isLoaded && sessionLinks}
    </div>
    </div>
    <div className = 'navBuffer'></div>
    </>
  );
}

export default Navigation;
