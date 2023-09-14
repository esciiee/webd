import React from "react";
import Input from "./Input";
import "../styles.css";


function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {(!props.isRegisterd) && <Input type="password" placeholder="Confirm Password" />}       
      <button type="submit">{props.isRegisterd ? <>Log In</>: <>Register</>}</button>
    </form>
  );
}

export default Form;
