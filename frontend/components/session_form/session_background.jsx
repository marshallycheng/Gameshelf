import React from 'react';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import {AuthRoute, Route} from '../../util/route_util';
import { Switch } from 'react-router-dom';

class SessionBackground extends React.Component {
  constructor(props) {
    super(props);

    this.bgImageArray = [
      "https://images3.alphacoders.com/716/716166.jpg",
      "https://i.imgur.com/qyFRZoK.jpg",
      "https://images6.alphacoders.com/716/716167.jpg",
      "http://www.seekwallpaper.com/seekpics/big/279/2794220_breath-of-the-wild-wallpaper-4k.jpg"
    ];
    this.base = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/full-";
    this.secs = 5;

    this.bgImageArray.forEach((img) => {
      new Image().src = img;
      // caches images, avoiding white flash between background replacements
    });

    this.backgroundSequence();
  }

  backgroundSequence() {
    {/* Credit to Dudley Storey for this Cross-Fade Background effect */}
	  window.clearTimeout();
	  let k = 0;

    for (let i = 0; i < this.bgImageArray.length; i++) {
		  setTimeout(() => {
			  document.getElementsByClassName('session-background')[0].style.background = "url(" + this.bgImageArray[k] + ") no-repeat center center fixed";
			  document.getElementsByClassName('session-background')[0].style.backgroundSize ="150% 150%";
			  document.getElementsByClassName('session-background')[0].style.backgroundPosition = "0px";
		    if ((k + 1) === this.bgImageArray.length) {
          setTimeout(() =>  this.backgroundSequence(), (this.secs * 1000))
        } else {
          k++;
        }
		  }, (this.secs * 1000) * i);
	  }
   }
  render(){
    return (
      <div className='session-background'>
        <Switch>
          <AuthRoute exact path="/login"component={LoginFormContainer} />
          <AuthRoute exact path="/signup"component={SignupFormContainer} />
        </Switch>
      </div>
    );
  }
}

export default SessionBackground;
