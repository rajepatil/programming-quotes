import React from "react";

function Footer(props) {
  const styles = {
    color: props.data.bodycolor,
    backgroundColor: props.data.buttoncolor
  };
  return (
    <footer style={styles} className="footer">
      <button style={styles} onClick={() => props.setData()} className="btn">
        play
      </button>
      <button style={styles} onClick={() => props.pauseQuots()} className="btn">
        pause
      </button>
    </footer>
  );
}

export default Footer;
