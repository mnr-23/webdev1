import React, { useState } from "react";
// import AddIcon from "@mui/icons-material/Add";

export default function InputReader(props) {
  const [Note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  function submitNote(event) {
    props.onAdd(Note);

    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          value={Note.title}
          placeholder="Title..."
        />
        <textarea
          onChange={handleChange}
          name="content"
          value={Note.content}
          placeholder="Enter content..."
          rows="3"
        />
        <button onClick={submitNote}>
          {/* <AddIcon /> */}
          Add
        </button>
      </form>
    </div>
  );
}
