function Note(props) {

  function handleDel(){
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDel}><img src="../images/close.png"></img></button>
    </div>
  );
}

export default Note;
