/*jshint esversion: 6 */
import React, { useState } from "react";
import Quiz from "./Quiz";
import Sidebar from "./Sidebar";

function Body(){
    var [currentQuestion,setCurrentQuestion]=useState(0);
    var [finalRes,setFinalRes]=useState([null,null,null,null,null]);
    function setcurr(id){
        setCurrentQuestion(id);
    }
    return(
        <div className="body-container">
            <Quiz finalRes={finalRes} setFinalRes={setFinalRes} setCurrQues={setCurrentQuestion} point={currentQuestion}/>
            <Sidebar finalRes={finalRes} setFinalRes={setFinalRes} setcurr={setcurr}/>
        </div>
    )
}

export default Body