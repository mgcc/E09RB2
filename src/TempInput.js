import React, { Component } from 'react';


// class TempInput extends Component {
//   render() {
//     return (
//       <div>
//         <input
//           type="number"
//           value={this.props.value}
//           onChange={this.props.handler}
//            /> {this.props.label}
//       </div>
//     );
//   }
// }

const TempInput = (props) =>
  <div>
    <input
      type="number"
      value={props.value}
      onChange={props.handler}
      /> {props.label}
  </div>


export default TempInput;