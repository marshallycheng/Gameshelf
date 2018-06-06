import React from 'react';
import {mainLogo, searchIcon} from '../logo';


const NavBar = ({ logout }) => {
  return (
    <div className="nav-bar">

      <div className="logo-container">
          {mainLogo}
      </div>



      <div id="search-placeholder">
        {searchIcon}
        <input type="text" placeholder="Search"/>

      </div>

      <div className="discover-link">
        Discover
      </div>

      <div className="explore-link">
        Explore
      </div>

      <div className="profile-link">
        Profile
      </div>

      <div className="logout-button" onClick={() => logout()}>
        Log out
      </div>




    </div>
  );
};

export default NavBar;
