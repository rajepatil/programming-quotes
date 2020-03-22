import React from "react";

function Quote(props) {
  console.log("Quote", props);
  const { data } = props;

  const styles = {
    color: props.data.buttoncolor,
    backgroundColor: props.data.bodycolor,
    borderColor: props.data.buttoncolor
  };

  console.log("quote return", data.loading);

  return (
    <div className="quote_card" style={styles}>
      <p style={styles}>"{data.quote}"</p>
      <div className="quote_author" style={styles}>
        -{data.author}
      </div>
    </div>
  );
}

export default Quote;
