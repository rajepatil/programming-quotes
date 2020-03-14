import React from "react";

import { Button as styledButton } from "antd";

function Button(props) {
  const styles = {
    color: props.data.bodycolor,
    backgroundColor: props.data.buttoncolor
  };
  return (
    <styledButton
      style={styles}
      onClick={() => props.setData()}
      className="btn"
    >
      quote
    </styledButton>
  );
}

export default Button;
