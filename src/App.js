import React, { Component } from 'react';
import Calculator from './Calculator';
import Checkboxes from './Checkboxes';

class App extends Component {

  render() {
    return (
      <div>
        <Checkboxes />
      </div>
    );
  }
}

// What's a good example that demonstrates state lifting? The temp conversion has too much helper functions...

// Exercise?

export default App;
