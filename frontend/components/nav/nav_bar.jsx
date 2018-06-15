import React from 'react';
import {mainLogo, searchIcon, profileIcon, githubLogo} from '../logo';
import { Redirect, Link, NavLink } from 'react-router-dom';
import GameSearchContainer from '../game_search/game_search_container';


class NavBar extends React.Component {
  constructor(props) {
    super(props);

  }

  ComponentDidMount(){
    this.props.fetchUser(this.props.currentUserId);
  }

  goGithub(){
    window.location = 'https://github.com/marshallycheng/FSP-Gameshelf';
  }


  render(){
    const userAvatar = (this.props.currentUserId && this.props.currentUser)
     ? <img
        className="nav-user-avatar"
        src={`${this.props.currentUser.image_url}`}
      />  
    : profileIcon;

    return (
      <div className="nav-bar"> 

        <NavLink to="/" activeClassName="active" className="main-logo">{mainLogo}</NavLink>

        <GameSearchContainer />

        <NavLink exact to="/" className='link' activeClassName="active">Discover</NavLink>

        <div className='github-link' onClick={this.goGithub}>{githubLogo} Github</div>

        <NavLink
          to={`/users/${this.props.currentUserId}`} 
          className='link profile-link'
          activeClassName="active">
          {userAvatar}      
          Profile
        </NavLink>

        <div className="logout-button" onClick={() => this.props.logout()}>
          Log out
        </div>

      </div>
    );
  }
}

export default NavBar;
