import React, { useState, useEffect } from "react";
import { css } from "@emotion/core";

import BounceLoader from "react-spinners/BounceLoader";

import Header from "./Header";
import Quote from "./Quote";

import getData from "../getData";
import Footer from "./Footer";

function Home() {
  const intialState = {
    bodycolor: null,
    buttoncolor: null,
    ratio: null,
    score: null,
    post: {},
    loading: true
  };

  const [resData, setResData] = useState(intialState);
  const override = css`
    display: block;
    margin: 0 auto;
  `;

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

  console.log("home loading is", resData.loading);

  return (
    <>
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
          <Footer data={resData} setData={setData} />
        </div>
      }
    </>
  );
}

export default Home;
