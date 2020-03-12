import React from 'react';
import logo from './logo.svg';
import contrast from 'get-contrast';

import 'reset-css';
import './App.css';
import Body from './components/Body';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bodycolor: "black",
      buttoncolor: "white"
    }
  }

  render() {
    return (
   <Body color={this.state} />
  );
  }
  
}

export default App;
