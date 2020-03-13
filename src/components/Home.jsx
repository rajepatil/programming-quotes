import React from "react";

import Button from "./Button";

function Home(props) {
    const styles = {
        color: props.data.buttoncolor,
        backgroundColor: props.data.bodycolor
    };

    console.log("home", props.data.post);
    
    return (

        <div className="body" style={styles}>
            <h1 className="bodyfont">{props.data.post.en}</h1>
            <Button data={props.data} setData={props.setData} />
        </div>
    );
}

export default Home;
