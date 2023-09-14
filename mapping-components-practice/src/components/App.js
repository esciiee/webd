import React from "react";
import Emoji from "./Emoji";
import emojipedia from "./emojipedia";
import "../styles.css";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map( emoji => <Emoji key={emoji.id} name={emoji.name} logo={emoji.emoji} meaning={emoji.meaning.slice(0,150)} />)}
      </dl>

 </div>
  );
}

export default App;
