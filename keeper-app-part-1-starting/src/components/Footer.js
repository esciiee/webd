import React from "react";
import "../styles.css";

const date = new Date();
var year = date.getFullYear();

function Footer(){
    return <footer>
       <p>Copyright ⓒ {year}</p> 
    </footer>
}

export default Footer;