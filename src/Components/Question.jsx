/*jshint esversion: 6 */
import React, { useState } from "react";
import question from "../questions";

function Question(props){
    const myInd=props.point<=0?0:props.point;
    var [show,setShow]=useState(false);
    // var [finalRes,setFinalRes]=useState([null,null,null,null,null]);
    var [corrRes,setCorrRes]=useState(0);
    function Checked(e){
        var opt=e.target.className;
        console.log(opt);
        props.setFinalRes((prevValue)=>{
            prevValue[myInd]=prevValue[myInd]===null?opt:null;
            console.log(prevValue[myInd]);
            return prevValue;
        });
        document.getElementsByClassName(opt)[0].style.color="hotpink";
        setTimeout(()=>{
           document.getElementsByClassName(opt)[0].style.color="#333";
        },700);
    }
    
    function showResult(){
        setShow(true);
        for(var i=0;i<5;i++)
        {
            if(props.finalRes[i]!=null && props.finalRes[i]===question[i].ans)
            {
                setCorrRes((prevValue)=>{
                    prevValue++;
                    return prevValue;
                });
            }
        }

    }
    if(show){
        return(<div className="quiz-display resSec">
            <table>
                <thead>
                    <th>Question Number</th>
                    <th>Your Response</th>
                    <th>Correct Answer</th>
                </thead>
                <tbody>
                    {props.finalRes.map((e,index)=>{
                        return (<tr>
                            <td>{index+1}</td>
                            <td>{e==null?"N/A":e}</td>
                            <td>{question[index].ans}</td>
                        </tr>);
                    })}
                </tbody> 
            </table><br/>
            <p>Your Score is: {corrRes}</p>
        </div>);
    }
    else{
    return(
        <div className="quiz-display">
            <h2>Question {question[myInd].id}</h2><br/>
            <p>{question[myInd].context}</p><br/>
            <img src="https://www.surveylegend.com/wordpress/wp-content/uploads/2020/12/best-open-ended-questions.png" alt="question"/>
            <div className="option-list">
                <p onClick={Checked} className="A">A. {question[myInd].options.a}</p><br /> 
                <p onClick={Checked} className="B">B. {question[myInd].options.b}</p><br />
                <p onClick={Checked} className="C">C. {question[myInd].options.c}</p><br />  
                <p onClick={Checked} className="D">D. {question[myInd].options.d}</p><br />
            </div>
            {myInd===0? null:<button onClick={()=>{return props.setCurrQues(myInd-1)}} className="btn btn-prev">Previous</button>}
            {myInd===4? null:<button onClick={()=>{return props.setCurrQues(myInd+1)}} className="btn btn-next">Next</button>}
            <button className="btn btn-submit" onClick={showResult}>Submit</button>  
        </div>
    );
    }
}
export default Question;