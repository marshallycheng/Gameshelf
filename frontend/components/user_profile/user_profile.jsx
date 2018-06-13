import React from 'react';
import NavBarContainer from '../nav/nav_bar_container';

class UserProfile extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const {currentUser} = this.props;
    return (
      <div className="user-profile-page">
        <NavBarContainer />
        <div className="user-profile-content">
          <div className="user-profile-info">
            <div className="user-profile-buttons">
              <button className="user-message-button"></button>
              <button className="user-follow-button"></button>
            </div>
            <div className="user-profile-middle">
              <div className="user-profile-middle-left">
              </div>
              <div className="user-profile-middle-right">
                <img
                  className="user-profile-image"
                  src={`${currentUser.image_url}`}
                />
              </div>
            </div>
          </div>
          <div className="user-profile-games">
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;