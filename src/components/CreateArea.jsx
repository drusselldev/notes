import { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
    id: ""
  });

  function handleChange(event) {
    const newTime = new Date().getTime();
    const setID = {...note, id: note.title + newTime}
    setNote(setID); //unique key for notes children within App

    const {name, value} = event.target;    
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(){
    //allow new note if title or content exists
    if (note.content || note.title){
      props.onAdd(note);    
      setNote({
        title: "",
        content: ""
      });
    };
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input name="title" value={note.title} onChange={handleChange} placeholder="title" />
        <textarea name="content" value={note.content} onChange={handleChange} placeholder="content" rows="3" />
        <button onClick={submitNote}><img src="../images/add_inv.png"></img></button>
      </form>
    </div>
  );
}

export default CreateArea;
