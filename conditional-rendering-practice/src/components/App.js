import React, { StrictMode } from "react";
import Form from "./Form";
import "../styles.css"
import { ConnectionStates } from "mongoose";

const userIsRegistered = false;

function App() {
  return (
      <div className="container">
      <Form isRegisterd={userIsRegistered} />
    </div>
    
  );
}

export default App;
