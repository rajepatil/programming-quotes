import React from "react";
import "reset-css";

import "./App.css";
import Home from "./components/Home";
// import getContrast from "./getContrast";
// import fatchquote from "./fatchquote";
import getData from "./getData";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bodycolor: "black",
      buttoncolor: "white",
      ratio: "",
      score: "",
      post: {}
    };
  }

  componentDidMount() {
    console.log("cdm");
    try {
      this.setData();
    } catch (err) {}
  }

  setData = async () => {
    const data = await getData();
    this.setState(data);
  };

  render() {
    return <Home data={this.state} setData={this.setData} />;
  }
}

export default App;
