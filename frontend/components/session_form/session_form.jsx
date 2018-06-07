import React from 'react';
import merge from 'lodash/merge';
import { Redirect, withRouter } from 'react-router-dom';
import {sessionLogo} from '../logo';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.switchForms = this.switchForms.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
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
			  document.getElementsByClassName('login-form-container')[0].style.background = "url(" + this.bgImageArray[k] + ") no-repeat center center fixed";
			  document.getElementsByClassName('login-form-container')[0].style.backgroundSize ="150% 150%";
		    if ((k + 1) === this.bgImageArray.length) {
          setTimeout(() =>  this.backgroundSequence(), (this.secs * 1000))
        } else {
          k++;
        }
		  }, (this.secs * 1000) * i);
	}
}

  componentWillUnmount(){

    this.props.clearErrors();
  }

  renderErrors(){
    return(
      <ul className="errors-list">
        {this.props.errors.map((error, i) => {
          return (<li className="error" key={`error-${i}`}>
            {error}
          </li>);
        })}
      </ul>
    );
  }

  demoLogin(e) {
    this.setState({
      username: 'DemoUser',
      password: 'password'
    });

    setTimeout(() => this.props.login(this.state), 500);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = merge({}, this.state);
    this.props.processForm(user);
  }

  switchForms(e) {
    if (this.props.navText === 'Log in') {
      this.props.history.push('/login');
    } else {
      this.props.history.push('/signup');
    }
  }


  render() {
    const placeholderText = this.props.navText === 'Log in' ? 'Create a password' : 'Enter your password';


    return (
      <div className='login-form-container'>
        <button
          className='nav-button'
          onClick={this.switchForms}>
          {this.props.navText}
        </button>

        <form onSubmit={this.handleSubmit} className='login-form-box'>
          {sessionLogo}

          Welcome to Gameshelf
          <h3>Find new games to play</h3>

        <div className='login-form'>
          <div>
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className='login-input'
              placeholder='Username'
            />
          <br/>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className='login-input'
              placeholder={placeholderText}
            />
          </div>

            {this.renderErrors()}

            <input className='session-button'
              type='submit'
              value={this.props.submitButton}
            />

          </div>
          <p id="or"> OR </p>
          <button id='demo-login' type="button"
            className='session-button'
            onClick={this.demoLogin}
          >Demo Account</button>
        </form>

      </div>
    );
  }

}

export default withRouter(SessionForm);
