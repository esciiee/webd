import React from "react";
import "../styles.css";

function Avatar(props){
    return <img
    src={props.imgURL}
    alt="avatar_img" className="circle-img"
  />
}

export default Avatar;