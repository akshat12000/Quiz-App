/*jshint esversion: 6 */
import React from "react";
import Buttons from "./Buttons";
import Summary from "./Summary";
function Sidebar(props){
    var buttonArray=[1,2,3,4,5];
    return (
        <div className="side-bar">
            <h3>General Questions</h3><br/>
            {buttonArray.map((value)=>{
                return <Buttons currSet={props.setcurr} num={value}/>;
            })}<br/><br/>
            <h3>Paper Summary</h3><br/>
            <Summary finalRes={props.finalRes} setFinalRes={props.setFinalRes}/>
        </div>
    )
}

export default Sidebar;