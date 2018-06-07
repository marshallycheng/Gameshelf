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

  addSearchBorder(){
    const search = document.getElementById('search-placeholder');

    search.classList.add('search-focus');
  }

  removeSearchBorder(){
    const search = document.getElementById('search-placeholder');

    search.classList.remove('search-focus');
  }

  render(){
    return (
      <div className="nav-bar">

        <div className="logo-container" onClick={this.redirectRoot}>
            {mainLogo}
        </div>



        <div id="search-placeholder" onFocus={this.addSearchBorder} onBlur={this.removeSearchBorder}>
          {searchIcon}
          <input type="text" maxLength="100" placeholder="Search"/>

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
