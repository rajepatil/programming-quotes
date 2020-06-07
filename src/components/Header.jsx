import React from "react";

function Header(props) {
  const styles = {
    backgroundColor: props.data.buttoncolor,
    color: props.data.bodycolor
  };

  return (
    <header className="header" style={styles}>
      <h1 className="logo" style={styles}>
        programming-quotes
      </h1>
    </header>
  );
}

export default Header;
