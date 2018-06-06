import React from 'react';
import NavBarContainer from '../nav/nav_bar_container';
class GameIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    return (
      <div>
        <NavBarContainer />
        Game Index
      </div>
    );
  }
}

export default GameIndex;
