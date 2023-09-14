import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevValues) => [...prevValues, note]);
  }
  function deleteNote(noteIndex) {
    setNotes( (prevValues) => {
      return prevValues.filter( (item, index) => index !== noteIndex);
    });
  }

  return (
    <div>
      <Header />
      <CreateArea add={addNote} />
      {notes.map((note, index) => (
        <Note key={index} id={index} title={note.title} content={note.content} delete={deleteNote} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
