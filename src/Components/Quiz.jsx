/*jshint esversion: 6 */
import React from "react";
import Footer from "./Footer";
import Question from "./Question";
function Quiz(props){
    var currQues=props.point;
    return(
        <div className="quiz-container">
            <div className="outer-display">
                <Question finalRes={props.finalRes} setFinalRes={props.setFinalRes} setCurrQues={props.setCurrQues} point={currQues}/>
            </div>
            <Footer />
        </div>
    );
}

export default Quiz;