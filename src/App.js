import React from "react";
import "reset-css";

import "./App.css";
import Home from "./components/Home";
import getData from "./getData";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bodycolor: "",
      buttoncolor: "",
      ratio: "",
      score: "",
      post: {}
    };
  }

  componentDidMount() {
    try {
      this.setData();
    } catch (err) {}
  }

  setData = async () => {
    const data = await getData();
    console.log(data);
    this.setState(data);
  };

  render() {
    return <Home data={this.state} setData={this.setData} />;
  }
}

export default App;
