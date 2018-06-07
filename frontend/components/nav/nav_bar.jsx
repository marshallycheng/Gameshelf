import React from 'react';
import {mainLogo, searchIcon, profileIcon} from '../logo';
import { Redirect, Link, NavLink } from 'react-router-dom';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  addSearchBorder(){
    const search = document.getElementById('search-placeholder');

    search.classList.add('search-focus');
  }

  removeSearchBorder(){
    const search = document.getElementById('search-placeholder');

    search.classList.remove('search-focus');
  }

  goGithub(){
    window.location = 'https://github.com/marshallycheng/FSP-Gameshelf';
  }

  render(){
    return (
      <div className="nav-bar">

        <NavLink to="/" activeClassName="active">{mainLogo}</NavLink>

        <div id="search-placeholder" onFocus={this.addSearchBorder} onBlur={this.removeSearchBorder}>
          {searchIcon}
          <input type="text" maxLength="100" placeholder="Search"/>
        </div>

        <NavLink to="/" className='link' activeClassName="active">Discover</NavLink>
        <div className='github-link' onClick={this.goGithub}>Github</div>
        <NavLink to="/profile" className='link profile-link' activeClassName="active">{profileIcon} Profile</NavLink>

        <div className="logout-button" onClick={() => this.props.logout()}>
          Log out
        </div>


      </div>
    );
  }
}

export default NavBar;
