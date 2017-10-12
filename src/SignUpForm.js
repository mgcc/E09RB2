import React, { Component } from 'react';
import './styles/SignUpForm.css';
import Locations from './lib/provinces';

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
      province: '',
      municipality: '',
      munChoices: [],
      firstNameMissing: false,
      lastNameMissing: false,
      passwordMissing: false,
      rPasswordMissing: false,
      passwordDontMatch: false,
      birthdayMissing: false,
      provinceMissing: false,
      tooYoung: false
    }

    this.firstNameChange = this.firstNameChange.bind(this);
    this.lastnameChange = this.lastnameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.rPasswordChange = this.rPasswordChange.bind(this);
    this.birthdayChange = this.birthdayChange.bind(this);
    this.provinceChange = this.provinceChange.bind(this);
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

  birthdayChange(e) {
    this.setState({ birthday: e.target.value });
  }

  provinceChange(e) {
    this.setState({ province: e.target.value });

    const province = Locations.provinces.find((element) => {
      return (element.id == e.target.value)
    });

    this.setState({ munChoices: province.municipalities });
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

    const birthday = new Date(this.state.birthday);
    const one_day = 1000*60*60*24;

    const bday_ms = birthday.getTime();
    const now_ms = (new Date()).getTime();

    const difference = now_ms - bday_ms;

    const age = Math.round(difference/one_day/365);

    if (age < 18) {
      this.setState({ tooYoung: true });
    } else {
      this.setState({ tooYoung: false });
    }
  }

  render() {
    return (
      <div>
        <h3>Sign Up</h3>

        <form>
          <div id="name" className="input-row">
            <input
              className="input"
              type="text"
              placeholder="First name"
              value={this.state.firstName}
              onChange={this.firstNameChange}
              />
            <span className="error-message">{ this.state.firstNameMissing ? 'First name is required' : '' }</span>
          </div>

          <div className="input-row">
            <input
              className="input"
              type="text"
              placeholder="Last name"
              value={this.state.lastname}
              onChange={this.lastnameChange}
              />
            <span className="error-message">{ this.state.lastNameMissing ? 'Last Name is required' : '' }</span>
          </div>

          <div className="input-row">
            <input
              className="input"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.passwordChange}
              />

            <span className="error-message">
              { this.state.passwordMissing ? 'Password is required' : '' }
            </span>
          </div>

          <div className="input-row">
            <input
              className="input"
              type="password"
              placeholder="Repeat Password"
              value={this.state.rPassword}
              onChange={this.rPasswordChange}
              />
            <span className="error-message">
              {
                this.state.rPasswordMissing ? 'Please repeat password': (this.state.passwordDontMatch ? 'Passwords don\'t match ': '')
              }
            </span>
          </div>

          <div className="input-row">
            <h5>Birthday</h5>
            <input
              type="date"
              className="input"
              value={this.state.birthday}
              onChange={this.birthdayChange}
              />
            <span className="error-message">{ this.state.tooYoung ? 'You have to be at least 18 to sign up' : '' }</span>
          </div>

          <LocationSelect
            options={Locations.provinces}
            value={this.state.province}
            handler={this.provinceChange}
            label="Province"
            />

          <select className="dropdown" defaultValue="0">
            <option value="0" disabled>Municipality</option>
            {
              this.state.munChoices.map(item => <option key={item}>{item}</option>)
            }
          </select>

          <div className="input-row">
            <button id="signup-button" onClick={this.createAccount} >Create Account</button>
          </div>
        </form>

      </div>
    )
  }
}

class LocationSelect extends Component {
  render() {
    return (
      <div className="input-row">
        <select className="dropdown" onChange={this.props.handler} defaultValue="0">
          <option value="0" disabled>{this.props.label}</option>
          {
            this.props.options.map((option) => {
              return (
                <option key={option.id} value={option.id}>{option.name}</option>
              )
            })
          }
        </select>
      </div>
    );
  }
}

export default SignUpForm;