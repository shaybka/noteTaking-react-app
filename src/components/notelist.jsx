// Notelist.jsx

import Note from './Note';

const Notelist = ({ notes, setnotes }) => {
  // Function to handle delete action
  const handleDelete = (noteToDelete) => {
    // Filter out the note to delete
    const updatedNotes = notes.filter(note => note !== noteToDelete);
    setnotes(updatedNotes);
  };

  return (
    <div className="notes-container">
      {notes.map((note, index) => (
        <Note note={note} key={index} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Notelist;
