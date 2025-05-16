import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(note){
    setNotes(prevNotes => {
      return [...prevNotes, note];
    });
  }

  function delNote(id){
    console.log("Delete triggered");
    console.log("ID: " + id);
    const remNote = notes.filter((noteItem) => noteItem.id !== id);
    setNotes(remNote);
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem) => {
        return (
          <Note 
            key={noteItem.id}
            id={noteItem.id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={delNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
