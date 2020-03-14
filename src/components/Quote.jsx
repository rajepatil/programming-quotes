import React from "react";

function Quote(props) {
  const styles = {
    color: props.data.buttoncolor,
    backgroundColor: props.data.bodycolor,
    borderColor: props.data.buttoncolor
  };

  return (
    <div className="quote_card" style={styles}>
      <h1 style={styles}>"{props.data.post.en}"</h1>
      <h6 className="quote_author" style={styles}>
        -{props.data.post.author}
      </h6>
    </div>
  );
}

export default Quote;
