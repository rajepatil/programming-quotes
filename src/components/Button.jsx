import React from "react";

function Button(props) {
  const styles = {
    backgroundColor: props.data.buttoncolor,
    color: props.data.bodycolor
  };
  return (
    <div className="btn" style={styles} onClick={() => props.setData()}>
      {props.data.buttoncolor}
    </div>
  );
}

export default Button;
