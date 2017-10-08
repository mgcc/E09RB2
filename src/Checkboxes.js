import React, { Component } from 'react';

const toCelsius = (f) => {
  return (f - 32) * 5 / 9;
}

const toFahrenheit = (c) => {
  return (c * 9 / 5) + 32;
}

class Checkboxes extends Component {

  constructor() {
    super();

    this.state = {
      celsius: 0,
      fahrenheit: 0
    }

    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  handleCelsiusChange(e) {
    this.setState({ celsius: e.target.value, fahrenheit: toFahrenheit(e.target.value) });
  }

  handleFahrenheitChange(e) {
    this.setState({ fahrenheit: e.target.value, celsius: toCelsius(e.target.value) });
  }

  render() {
    return (
      <fieldset>
        <legend>Temperature Conversion</legend>
        <TemperatureInput
          label="°C"
          value={this.state.celsius}
          changeHandler={this.handleCelsiusChange} />
        <TemperatureInput
          label="°F"
          value={this.state.fahrenheit}
          changeHandler={this.handleFahrenheitChange} />

        <div id="message">
          {
            this.state.celsius >= 100 ? 'Boiling!' : 'Not boiling...'
          }
        </div>
      </fieldset>
    )
  }
}

class TemperatureInput extends Component {
  render() {
    return (
      <div>
        <input
          type="number"
          value={this.props.value}
          onChange={this.props.changeHandler}
          /> {this.props.label}
      </div>
    );
  }
}

export default Checkboxes;