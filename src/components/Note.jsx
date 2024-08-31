

const Note = ({ note, onDelete }) => {
  return (
    <div className="notecard">
      <h3 className="note-title">{note.title}</h3>
      <p className="note-description">{note.description}</p>
      <button onClick={() => onDelete(note)}>Delete</button>
    </div>
  );
};

export default Note;
