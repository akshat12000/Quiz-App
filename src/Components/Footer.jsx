import React from "react";

function Footer(){
    var currYear=new Date().getFullYear();
    return(
        <div className="my-footer">
            Copyright &copy; {currYear}
        </div>
    )
}

export default Footer;