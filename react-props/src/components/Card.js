import React from "react";
import Avatar from "./Avatar";
import Detail from "./Details";
import "../styles.css"


function Card(props){
    return <div className="card">
    <div className="top">
      <h2 className="name">{props.name}</h2>
      <Avatar imgURL={props.imgURL}/>
    </div>
    <Detail ph={props.ph} mail={props.mail}/>
    
  </div>
}


export default Card;