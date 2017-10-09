import React, { Component } from 'react';
import TempInput from './TempInput';

const toCelsius = (f) => {
  return (f - 32) * 5 / 9;
}

const toFahrenheit = (c) => {
  return (c * 9 / 5) + 32;
}

class TempConverter extends Component {

  constructor(props) {
    super(props);

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
        <legend>Temperature Converter</legend>
        <TempInput
          label="°C"
          value={this.state.celsius}
          handler={this.handleCelsiusChange} />
        <TempInput
          label="°F"
          value={this.state.fahrenheit}
          handler={this.handleFahrenheitChange}
          />

        <div id="message">
          {
            this.state.celsius >= 100 ? 'Boiling' : 'Not boiling'
          }
        </div>
      </fieldset>
    );
  }
}

export default TempConverter;