import React from "react";

export default function Toggle ( props ){
    let container = "";
    let txt = "";
    let circle = "";
    let slider = "";

    if( props.toggle ){
         container = "header--container-light"
         txt = "header--txt-light"
         slider = "header--slider-light"
         circle = "header--circle-light"
    }else{
         container = "header--container"
         txt = "header--txt"
         slider = "header--slider"
         circle = "header--circle"
    }
    return(
        <div className={container} onClick={props.handleClick}>
            <span className={txt}>Light</span>
            <div className={slider}>
                <div className={circle}></div>
            </div>
            <span className={txt}>Dark</span>
        </div>
    )
};