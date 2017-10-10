import React, { Component } from 'react';
import './styles/SignUpForm.css';

class SignUpForm extends Component {

  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      password: '',
      repeatPassword: '',
      mobile: '',
      birthday: '',
      firstNameMissing: false,
      lastNameMissing: false,
      passwordMissing: false,
      rPasswordMissing: false,
      passwordDontMatch: false,
      birthdayMissing: false
    }

    this.firstNameChange = this.firstNameChange.bind(this);
    this.lastnameChange = this.lastnameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.rPasswordChange = this.rPasswordChange.bind(this);
    this.mobileChange = this.mobileChange.bind(this);
    this.birthdayChange = this.birthdayChange.bind(this);
    this.createAccount = this.createAccount.bind(this);
  }

  firstNameChange(e) {
    this.setState({ firstName: e.target.value });
  }

  lastnameChange(e) {
    this.setState({ lastName: e.target.value });
  }

  passwordChange(e) {
    this.setState({ password: e.target.value });
  }

  rPasswordChange(e) {
    this.setState({ repeatPassword: e.target.value });
  }

  mobileChange(e) {
    this.setState({ mobile: e.target.value });
  }

  birthdayChange(e) {
    this.setState({ birthday: e.target.value });

    const date = e.target.value;
    console.log(date);
    console.log(typeof(date));
  }

  createAccount(e) {
    e.preventDefault();

    const { firstName, lastName, password, repeatPassword } = this.state;

    if (firstName === '' ) {
      this.setState({ firstNameMissing: true });
    } else{
      this.setState({ firstNameMissing: false });
    }

    if (lastName === '' ) {
      this.setState({ lastNameMissing: true });
    } else {
      this.setState({ lastNameMissing: false });
    }

    if (password === '' ) {
      this.setState({ passwordMissing: true });
    } else {
      this.setState({ passwordMissing: false });
    }

    if (repeatPassword === '' ) {
      this.setState({ rPasswordMissing: true });
    } else {
      this.setState({ rPasswordMissing: false });
    }

    if ((password && repeatPassword) && password !== repeatPassword) {
      this.setState({ passwordDontMatch: true });
    } else {
      this.setState({ passwordDontMatch: false });
    }

  }

  render() {
    return (
      <div>
        <h3>Sign Up</h3>

        <form>
          <div id="name" className="input-row">

            <input
              className={ this.state.firstNameMissing ? 'input-required-prompt' : 'input' }
              type="text"
              placeholder="First name"
              value={this.state.firstName}
              onChange={this.firstNameChange}
              />
            <input
              className={ this.state.lastNameMissing ? 'input-required-prompt' : 'input' }
              type="text"
              placeholder="Last name"
              value={this.state.lastname}
              onChange={this.lastnameChange}
              />
          </div>

          <div className="input-row">
            <input
              className={ this.state.passwordMissing ? 'input-required-prompt' : 'input' }
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.passwordChange}
              />

            <input
              className={ this.state.rPasswordMissing ? 'input-required-prompt' : 'input' }
              type="password"
              placeholder="Repeat Password"
              value={this.state.rPassword}
              onChange={this.rPasswordChange}
              />

            <span className="error-message">{ this.state.passwordDontMatch ? 'Passwords Don\'t Match' : '' }</span>
          </div>

          <div
            className="input-row">
            <input
              type="text"
              className="input"
              placeholder="Mobile number or email"
              value={this.state.mobile}
              onChange={this.mobileChange}
              />
          </div>

          <div className="input-row">
            <h5>Birthday</h5>
            <input
              type="date"
              className="input"
              value={this.state.birthday}
              onChange={this.birthdayChange}
              />
          </div>

          <div className="input-row">
            <button id="signup-button" onClick={this.createAccount} >Create Account</button>
          </div>
        </form>

      </div>
    )
  }
}

export default SignUpForm;