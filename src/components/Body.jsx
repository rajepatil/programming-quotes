import React from 'react';

import Button from './Button';

function Body(props) {
    const styles = {
        color: props.color.buttoncolor,
        backgroundColor: props.color.bodycolor
    }
    return (
        <div className="body" style={styles}>

            <h1 className="bodyfont">{props.color.bodycolor}</h1> 
            <Button  color={props.color} />
      
        </div>
    );
}

export default Body;