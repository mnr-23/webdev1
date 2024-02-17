import React, { useState } from "react";
import Header from "./Header";
import InputReader from "./InputReader";
import Footer from "./Footer";
import Notes from "./Notes";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return notes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <InputReader onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Notes
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}
export default App;
