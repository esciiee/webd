import React from "react";
import "../styles.css";


function Emoji(props){
    return <div className="term">
    <dt>
      <span className="emoji" role="img" aria-label={props.name}>
        {props.logo}
      </span>
      <span>{props.name}</span>
    </dt>
    <dd>
      {props.meaning}
    </dd>
  </div>
}

export default Emoji;