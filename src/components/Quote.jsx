import React from "react";

function Quote(props) {
  const styles = {
    color: props.data.buttoncolor,
    backgroundColor: props.data.bodycolor
  };

  return (
    <div className="">
      <h1 style={styles}>{props.data.post.en}</h1>
    </div>
  );
}

export default Quote;
