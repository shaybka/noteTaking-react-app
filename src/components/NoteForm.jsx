import React, { useState, useRef, useEffect } from 'react';

const NoteForm = ({ notes, setnotes }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const titleRef = useRef(); // Better naming for clarity

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = { title, description };
    setnotes([newNote, ...notes]);
    setTitle('');
    setDescription('');
    titleRef.current.focus(); // Keep focus on the title input after submission
  };
  useEffect(() => {

  }, [notes]);
  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="note-input"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        ref={titleRef} // Attach ref for focus management
      />
      <textarea
        className="note-textarea"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit" className="note-button">Add Note</button>
    </form>
  );
};

export default NoteForm;
