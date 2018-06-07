import React from 'react';
import {mainLogo, searchIcon} from '../logo';
import { Redirect } from 'react-router-dom';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  redirectRoot(){
    <Redirect to='/'/>
  }

  render(){
    return (
      <div className="nav-bar">

        <div className="logo-container" onClick={this.redirectRoot}>
            {mainLogo}
        </div>



        <div id="search-placeholder">
          {searchIcon}
          <input type="text" placeholder="Search"/>

        </div>

        <div className="discover-link">
          Discover
        </div>

        <div className="github-link">
          Github
        </div>

        <div className="profile-link">
          Profile
        </div>

        <div className="logout-button" onClick={() => this.props.logout()}>
          Log out
        </div>




      </div>
    );
  }
}

export default NavBar;
