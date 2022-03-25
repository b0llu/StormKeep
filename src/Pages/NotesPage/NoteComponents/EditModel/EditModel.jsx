import "./EditModel.css";
import { useState } from "react";
import { useNoteContext } from "../../../../Context/Notes.context";
import { ColorPalette } from "../../../../Components";

export const EditModel = () => {
  const { editNote, setIsEditMode, isEditMode } = useNoteContext();
  const [noteDetails, setNoteDetails] = useState({
    title: "",
    description: "",
    typeOfNote: "Home",
    pinned: isEditMode.note.pinned,
    noteColor: null,
  });

  function colorChangeHandler(color) {
    setNoteDetails({
      title: noteDetails.title,
      description: noteDetails.description,
      typeOfNote: noteDetails.typeOfNote,
      pinned: noteDetails.pinned,
      noteColor: color,
    });
  }

  return (
    <div className="model">
      <div
        style={{ backgroundColor: noteDetails.noteColor }}
        className="input-container card-shadow"
      >
        <div className="input-text-section-container">
          <div className="input-text-section">
            <textarea
              type="text"
              placeholder="Title"
              autoFocus
              rows="1"
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
                  setNoteDetails({
                    ...noteDetails,
                    pinned: !noteDetails.pinned,
                  })
                }
                className="material-icons pin-icon active"
              >
                push_pin
              </span>
            ) : (
              <span
                onClick={() =>
                  setNoteDetails({
                    ...noteDetails,
                    pinned: !noteDetails.pinned,
                  })
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
              onChange={(e) =>
                setNoteDetails({ ...noteDetails, typeOfNote: e.target.value })
              }
              className="tag"
            >
              <option value="Home">Home</option>
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Exercise">Exercise</option>
              <option value="Chores">Chores</option>
              <option value="Health">Health</option>
            </select>
            <ColorPalette
              notecolor={noteDetails.noteColor}
              colorChangeHandler={colorChangeHandler}
            />
          </div>
          <button
            onClick={() => {
              editNote(noteDetails, isEditMode.note._id),
                setNoteDetails({
                  title: "",
                  description: "",
                  typeOfNote: "Home",
                  pinned: false,
                  noteColor: null,
                }),
                setIsEditMode(false);
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
