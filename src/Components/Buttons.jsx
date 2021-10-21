/*jshint esversion: 6 */
import React from "react";

function Buttons(props){
    return (
        <button onClick={()=>{
            return props.currSet(props.num-1);
        }} className="ques-btn">{props.num}</button>
    )
}

export default Buttons;