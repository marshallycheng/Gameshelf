import React from 'react';
import {mainLogo, searchIcon, profileIcon} from '../logo';
import { Redirect, Link, NavLink } from 'react-router-dom';
import GameSearchContainer from '../game_search/game_search_container';


class NavBar extends React.Component {
  constructor(props) {
    super(props);

  }

  goGithub(){
    window.location = 'https://github.com/marshallycheng/FSP-Gameshelf';
  }


  render(){
    return (
      <div className="nav-bar"> 

        <NavLink to="/" activeClassName="active" className="main-logo">{mainLogo}</NavLink>

        <GameSearchContainer />

        <NavLink exact to="/" className='link' activeClassName="active">Discover</NavLink>

        <div className='github-link' onClick={this.goGithub}>Github</div>

        <NavLink to={`/users/${this.props.currentUserId}`} className='link profile-link' activeClassName="active">{profileIcon} Profile</NavLink>

        <div className="logout-button" onClick={() => this.props.logout()}>
          Log out
        </div>

      </div>
    );
  }
}

export default NavBar;
