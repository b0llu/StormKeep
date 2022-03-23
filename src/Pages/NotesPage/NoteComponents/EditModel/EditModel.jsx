import "./EditModel.css";
import { useState } from "react";
import { useNoteContext } from "../../../../Context/Notes.context";

export const EditModel = () => {
  const { editNote, setIsEditMode, isEditMode } = useNoteContext();
  const [noteDetails, setNoteDetails] = useState({
    title: "",
    description: "",
    typeOfNote: "Home",
    pinned: isEditMode.note.pinned,
  });
  return (
    <div className="model">
      <div className="input-container card-shadow">
        <div className="input-text-section-container">
          <div className="input-text-section">
            <textarea
              type="text"
              placeholder="Title"
              autoFocus
              rows="1"
              className="text title-text-style"
              onChange={(e) =>
                setNoteDetails({ ...noteDetails, title: e.target.value })
              }
            />
            <textarea
              rows="2"
              className="text"
              type="text"
              placeholder="Take a note..."
              onChange={(e) =>
                setNoteDetails({ ...noteDetails, description: e.target.value })
              }
            />
          </div>
          <div>
            {isEditMode.note.pinned ? (
              <span
                onClick={() =>
                  setNoteDetails({
                    ...noteDetails,
                    pinned: !isEditMode.note.pinned,
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
                    pinned: !isEditMode.note.pinned,
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
            </select>
          </div>
          <button
            onClick={() => {
              editNote(noteDetails, isEditMode.note._id),
                setNoteDetails({
                  ...noteDetails,
                  title: "",
                  description: "",
                  pinned: false,
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
