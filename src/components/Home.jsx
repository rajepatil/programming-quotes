import React, { useState, useEffect } from "react";
import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";

import Header from "./Header";
import Quote from "./Quote";
import getData from "../getData";
import Footer from "./Footer";

var timer = null;

function Home() {
  const intialState = {
    bodycolor: null,
    buttoncolor: null,
    quote: "",
    author: null,
    loading: true
  };

  const [resData, setResData] = useState(intialState);
  const override = css`
    display: block;
    margin: 0 auto;
  `;

  async function setData() {
    const data = await getData();
    console.log("setData()");
    setResData(data);
  }

  function pauseQuots() {
    console.log("pause clicled");
    clearInterval(timer);
  }

  useEffect(() => {
    console.log("1 useEffect has been called!");
    setData();
  }, []);

  useEffect(() => {
    console.log("2 useEffect has been called!");
    // console.log(timer);
    if (timer !== null) {
      clearInterval(timer);
    }

    let wordCount = resData.quote.trim().split(" ").length;
    console.log(wordCount);

    let timeNeeded = (wordCount / 6) * 1000;
    console.log(timeNeeded);
    if (wordCount > 1) {
      timer = setInterval(setData, timeNeeded);
    }
  }, [resData]);

  const styles = {
    color: resData.buttoncolor,
    backgroundColor: resData.bodycolor
  };

  return (
    <div>
      {
        <div className="app flex" style={styles}>
          <Header data={resData} />
          {resData.loading ? (
            <div className="sweet-loading">
              <BounceLoader
                css={override}
                size={150}
                loading={resData.loading}
              />
            </div>
          ) : (
            <Quote data={resData} />
          )}
          <Footer data={resData} setData={setData} pauseQuots={pauseQuots} />
        </div>
      }
    </div>
  );
}

export default Home;
