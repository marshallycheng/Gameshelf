import React from 'react';
import NavBarContainer from '../nav/nav_bar_container';

class UserProfile extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const {currentUser} = this.props;
    const reviewText = (currentUser.review_ids.length === 1) ? "review" : "reviews";
    
    return (
      <div className="user-profile-page">
        <NavBarContainer />
        <div className="user-profile-content">
          <div className="user-profile-info">
            <div className="user-profile-buttons">
              <button className="user-message-button">Message</button>
              <button className="user-follow-button">Follow</button>
            </div>
            <div className="user-profile-middle">
              <div className="user-profile-middle-left">
                <div className="user-profile-username">
                  {currentUser.username}
                </div>
                <div className="user-profile-reviews-favorites">
                  {currentUser.review_ids.length} {reviewText} · 10 favorites
                </div>
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