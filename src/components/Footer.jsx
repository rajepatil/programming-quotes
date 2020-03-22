import React from "react";

function Footer(props) {
  console.log("Footer", props);

  const styles = {
    color: props.data.bodycolor,
    backgroundColor: props.data.buttoncolor
  };
  return (
    <footer style={styles} className="footer">
      <button style={styles} onClick={() => props.setData()} className="btn">
        click me for random quote
      </button>
    </footer>
  );
}

export default Footer;
