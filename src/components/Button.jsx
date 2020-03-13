import React from "react";

import { Button as styledButton } from "antd";

function Button(props) {
  const styles = {
    color: props.data.bodycolor,
    backgroundColor: props.data.buttoncolor
  };
  return (
    <styledButton
      className="btn"
      style={styles}
      onClick={() => props.setData()}
    >
      quote
    </styledButton>
  );
}

export default Button;
