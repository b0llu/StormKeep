import { useState } from "react";
import { ColorPalette } from "../../../../Components";
import { useNoteContext } from "../../../../Context/Notes.context";
import "./DefaultNote.css";

export const DefaultNote = () => {
  const { addNote } = useNoteContext();
  const [noteDetails, setNoteDetails] = useState({
    title: "",
    description: "",
    typeOfNote: "Tag",
    pinned: false,
    noteColor: null,
    priority: "Priority",
  });

  function colorChangeHandler(color) {
    setNoteDetails({
      ...noteDetails,
      noteColor: color,
    });
  }

  return (
    <div
      style={{ backgroundColor: noteDetails.noteColor }}
      className="input-container card-shadow"
    >
      <div className="input-text-section-container">
        <div className="input-text-section">
          <textarea
            role="textbox"
            type="text"
            placeholder="Title"
            autoFocus
            rows="1"
            value={noteDetails.title}
            className="text title-text-style"
            maxLength="15"
            onChange={(e) =>
              setNoteDetails({ ...noteDetails, title: e.target.value })
            }
          />
          <textarea
            rows="5"
            className="text"
            type="text"
            value={noteDetails.description}
            placeholder="Take a note..."
            onChange={(e) =>
              setNoteDetails({ ...noteDetails, description: e.target.value })
            }
          />
        </div>
        <div>
          {noteDetails.pinned ? (
            <span
              onClick={() =>
                setNoteDetails({ ...noteDetails, pinned: !noteDetails.pinned })
              }
              className="material-icons pin-icon active"
            >
              push_pin
            </span>
          ) : (
            <span
              onClick={() =>
                setNoteDetails({ ...noteDetails, pinned: !noteDetails.pinned })
              }
              className="material-icons-outlined pin-icon"
            >
              push_pin
            </span>
          )}
        </div>
      </div>
      <div className="edit-section-container">
        <div className="edit-section">
          <select
            value={noteDetails.typeOfNote}
            onChange={(e) =>
              setNoteDetails({ ...noteDetails, typeOfNote: e.target.value })
            }
            className="tag"
          >
            <option value="Tag" hidden>
              Tag
            </option>
            <option value="Home">Home</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Exercise">Exercise</option>
            <option value="Chores">Chores</option>
            <option value="Health">Health</option>
          </select>
          <select
            value={noteDetails.priority}
            onChange={(e) => {
              setNoteDetails({ ...noteDetails, priority: e.target.value });
            }}
            className="tag"
          >
            <option value="Priority" hidden>
              Priority
            </option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <ColorPalette
            notecolor={noteDetails.noteColor}
            colorChangeHandler={colorChangeHandler}
          />
        </div>
        <button
          onClick={() => {
            addNote({
              ...noteDetails,
              typeOfNote:
                noteDetails.typeOfNote === "Tag"
                  ? "Home"
                  : noteDetails.typeOfNote,
              priority:
                noteDetails.priority === "Priority"
                  ? "Low"
                  : noteDetails.priority,
            }),
              setNoteDetails({
                title: "",
                description: "",
                typeOfNote: "Tag",
                priority: "Priority",
                pinned: false,
                noteColor: null,
              });
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};
