import React from "react";

export default function Notes(props) {
  return (
    <div className="notes-container">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
