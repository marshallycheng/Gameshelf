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
