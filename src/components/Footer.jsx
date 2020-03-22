import React from "react";

function Footer(props) {
  console.log("Footer", props);

  const styles = {
    color: props.data.bodycolor,
    backgroundColor: props.data.buttoncolor
  };
  return (
    <footer style={styles} onClick={() => props.setData()} className="footer">
      click for random quote
    </footer>
  );
}

export default Footer;
