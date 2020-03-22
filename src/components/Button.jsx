import React from "react";

function Button(props) {
  const styles = {
    color: props.data.bodycolor,
    backgroundColor: props.data.buttoncolor
  };
  return (
    <button style={styles} onClick={() => props.setData()} className="btn">
      quote
    </button>
  );
}

export default Button;
