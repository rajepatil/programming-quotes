import React from "react";

import Button from "./Button";
import Header from "./Header";
import Quote from "./Quote";

function Home(props) {
  const styles = {
    color: props.data.buttoncolor,
    backgroundColor: props.data.bodycolor
  };

  return (
    <div className="body" style={styles}>
      <Header data={props.data} />
      <Quote data={props.data} />
      <Button data={props.data} setData={props.setData} />
    </div>
  );
}

export default Home;
