import React from "react";

function Button(props) {
  const styles = {
    backgroundColor: props.color.buttoncolor,
    color: props.color.bodycolor
  };
  return (
    <div className="btn" style={styles} onClick={() => props.getColorPair()}>
      {props.color.buttoncolor}
    </div>
  );
}

export default Button;
