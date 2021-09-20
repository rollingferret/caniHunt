// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import NewProductFormModal from '../PostNewProductModal';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks, sessionMiddleLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
    sessionMiddleLinks = (
  <>
  <div className = 'myproducts' >
    <NavLink exact to="/myproducts">
      <i className="fas fa-home">myProducts</i>
    </NavLink>
  </div>
  <div className = 'postproducts' >
    <NewProductFormModal />
  </div>
  </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
    sessionMiddleLinks = (
      <>
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
      <div className = 'navmiddlestuff' >
        {isLoaded && sessionMiddleLinks}
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
