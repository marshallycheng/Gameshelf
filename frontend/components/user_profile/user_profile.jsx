import React from 'react';
import NavBarContainer from '../nav/nav_bar_container';
import GameIndexItem from '../game_index/game_index_item';
import { profileSendIcon, flagIcon } from '../logo';

class UserProfile extends React.Component {
  constructor(props){
    super(props);
    this.unfocusSearch = this.unfocusSearch.bind(this);
  }

  componentDidMount(){

    this.props.fetchUser(this.props.userId);
    
    this.props.fetchGames();
    window.scrollTo(0, 0);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.fetchUser(nextProps.match.params.userId);
    }
  }

  randomSelection(num){
    const randomGames = this.randomize(this.props.games);
    return randomGames.slice(0,num);
  }

  randomize(array){
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  removeSearchBorder() {
    const search = document.getElementById('search-placeholder');
    search.classList.remove('search-focus');
  }

  hideResults() {
    const results = document.getElementById('search-results-container');
    results.classList.add('hide-results');
  }

  lightenScreen() {
    const content = document.getElementsByClassName('games-index-content')[0]
      || document.getElementsByClassName('user-profile-content')[0];
    content.classList.remove('darken');
  }

  unfocusSearch() {
    this.removeSearchBorder();
    this.lightenScreen();
    this.hideResults();
  }


  render(){
    if (this.props.user) {
      const { games, user} = this.props;
      const reviewText = (user.review_ids.length === 1) ? "review" : "reviews";
      const favoriteText = (user.favorited_game_ids.length === 1) ? "favorite" : "favorites";
 
      const favoritedGames = games.length > 0 
      ? games.map(game => {
          if (game) {
            return <GameIndexItem key={game.id} game={game} />;
          } else {
            return <div></div>;
          }
        })
      : 'loading';

      return (
        <div className="user-profile-page">
          <NavBarContainer />
          <div className="user-profile-content" onClick={this.unfocusSearch}>
            <div className="user-profile-info">
              <div className="user-profile-buttons">
                <div className="user-left-buttons">
                    {profileSendIcon}
                    {flagIcon}
                </div>
                <div className="user-right-buttons">
                  <button className="user-message-button">Message</button>
                  <button className="user-follow-button">Follow</button>
                </div>
              </div>
              <div className="user-profile-middle">
                <div className="user-profile-middle-left">
                  <div className="user-profile-username">
                    {user.username}
                  </div>
                  <div className="user-profile-reviews-favorites">
                    {user.review_ids.length} {reviewText} · {user.favorited_game_ids.length} {favoriteText}
                  </div>
                </div>
                <div className="user-profile-middle-right">
                  <img
                    className="user-profile-image"
                    src={`${user.image_url}`}
                  />
                </div>
              </div>
            </div>
            <div className="games-header">
              Favorited Games
            </div>
            <div className="user-profile-games">
              {favoritedGames}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          loading
        </div>
      );
    }
  }
}
export default UserProfile;