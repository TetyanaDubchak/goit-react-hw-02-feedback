// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

import { Component } from "react";
import { Section } from "./Section/Section";

const styles = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 40,
  color: '#010101'
}


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  

  changeStatistics = (type) => {
    return   this.state.type
      
  }


  handleClick = type => {
    console.log(this.state);
    this.setState(prevState => {
      return {
        
          [type]: prevState[type] + 1,
        }
      })
  }

  render() {
    return (
      <Section clicksGood = {this.state.good} clicksNeutral = {this.state.neutral} clicksBad = {this.state.bad} onButtons = {this.handleClick} title={'Please leave feedback'} />

    )

  }


}
