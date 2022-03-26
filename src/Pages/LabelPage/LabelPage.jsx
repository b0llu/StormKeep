import { useState } from "react";
import { useNoteContext } from "../../Context/Notes.context";
import { useFunctionCombiner } from "../../Hook/useFunctionCombiner";
import { EditModel } from "../NotesPage/NoteComponents/EditModel/EditModel";

export const LabelPage = () => {
  const { removeNote, isEditMode, setIsEditMode } =
    useNoteContext();
  const { sortedLables } = useFunctionCombiner();

  return (
    <div className="archived-container">
      <div style={{ textAlign: "center", width: "100%" }}>
        {sortedLables.length === 0 ? (
          <h1>No Labeled Notes</h1>
        ) : (
          <h1 className="pin-text">Labeled Notes</h1>
        )}
      </div>
      <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
        {sortedLables.map((note) => {
          return (
            <div
              style={{ backgroundColor: note.noteColor }}
              key={note._id}
              className="newnote-input-container card-shadow"
            >
              <div className="input-text-section-container">
                <div className="input-text-section">
                  <h2>{note.title}</h2>
                  <h3>{note.description}</h3>
                </div>
              </div>
              <div className="edit-section-container">
                <div className="edit-section">
                  <h2>{note.typeOfNote}</h2>
                  <h2>{note.priority}</h2>
                </div>
                <div className="note-icon-container">
                  <span
                    onClick={() => setIsEditMode({ state: true, note: note })}
                    className="material-icons pin-icon"
                  >
                    edit
                  </span>
                  <span
                    onClick={() => removeNote(note._id)}
                    className="material-icons pin-icon"
                  >
                    delete
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {isEditMode.state ? <EditModel /> : null}
    </div>
  );
};
