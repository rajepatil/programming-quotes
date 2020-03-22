import React, { useState, useEffect } from "react";

import Button from "./Button";
import Header from "./Header";
import Quote from "./Quote";

import getData from "../getData";

function Home(props) {
  const data = {
    bodycolor: "",
    buttoncolor: "",
    ratio: "",
    score: "",
    post: {},
    loading: true
  };

  const [resData, setResData] = useState(data);

  async function setData() {
    const data = await getData();
    console.log("setData", data);
    setResData(data);
  }

  useEffect(() => {
    console.log("useEffect has been called!");
    setData();
  }, []);

  const styles = {
    color: resData.buttoncolor,
    backgroundColor: resData.bodycolor
  };

  return (
    <div className="body" style={styles}>
      <Header data={resData} />
      <Quote data={resData} />
      <div className="flex">
        <Button data={resData} setData={setData} />
      </div>
    </div>
  );
}

export default Home;
