import React from "react";

function Summary(props){
    return (<div>
        <table className="StatusTab">
            <thead>
                <th>Question Number</th>
                <th>Your Response</th>
            </thead>
            <tbody>
            {props.finalRes.map((e,index)=>{
                        return (<tr>
                            <td>{index+1}</td>
                            <td>{e==null?"N/A":e}</td>
                        </tr>);
            })}
            </tbody>
        </table>
    </div>);
}

export default Summary;