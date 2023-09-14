import React, {useState} from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title:"",
    content:""
  })

  function changed(event){
    const {name, value} = event.target;
    setNote( (prevValues) => ({ ...prevValues, [name]: value}));
  }
  
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={changed} value={note.title} />
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={changed} value={note.content} />
        <button onClick={ (event) => {
          event.preventDefault();
          props.add(note);
          setNote({title:"", content:""});
          }}  >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
