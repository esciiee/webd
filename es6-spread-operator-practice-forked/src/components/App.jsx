import React, { useState } from "react";
import List from "./List";
function App() {
  const [arr, setArr] = useState(["a item"]);
  const [text, setText] = useState("");

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={ e => setText(e.target.value)}  value={text} />
        <button onClick={ () => {
          setArr( prevValues => [...prevValues, text] )
          setText("");
          }} type="submit">
          <span>Add</span>
        </button>
      </div>
      
     <div>
     <ul>
     {arr.map( item => <li>{item}</li>)}
     </ul>
   </div>

    </div>
  );
}

export default App;
