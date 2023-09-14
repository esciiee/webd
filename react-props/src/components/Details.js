import React from "react";
import "../styles.css";

function Detail(props){
    return <div className="bottom">
      <p className="info">{props.ph}</p>
    <p className="info">{props.mail}</p>
    </div>
}

export default Detail;