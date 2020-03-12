import React from "react";
import logo from "./logo.svg";

import "reset-css";
import "./App.css";
import Body from "./components/Body";
import getContrast from "./getContrast";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bodycolor: "black",
      buttoncolor: "white",
      ratio: "",
      score: ""
    };
  }

  getColorPair = () => {
    const contrast = getContrast();

    const [bodycolor, buttoncolor] = [contrast.pair[0], contrast.pair[1]];
    const { ratio, score } = contrast;

    this.setState({ bodycolor, buttoncolor, ratio, score });
  };

  render() {
    return <Body color={this.state} getColorPair={this.getColorPair} />;
  }
}

export default App;
