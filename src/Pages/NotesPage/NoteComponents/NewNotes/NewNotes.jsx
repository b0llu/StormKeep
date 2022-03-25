import { useState } from "react";
import { useArchivedNotesContext } from "../../../../Context/ArchivedNotes.context";
import { useNoteContext } from "../../../../Context/Notes.context";
import { EditModel } from "../EditModel/EditModel";
import "./NewNotes.css";

export const NewNotes = () => {
  const { notes, removeNote, pinHandler, isEditMode, setIsEditMode } =
    useNoteContext();
  const { addToArchive } = useArchivedNotesContext();

  return (
    <>
      <div className="new-note-container">
        {notes.filter((n) => n.pinned).length === 0 ? null : (
          <h1 className="pin-text">Pinned</h1>
        )}
        <div className="pinned">
          {notes
            .filter((n) => n.pinned)
            .map((note) => {
              return (
                <div
                  key={note._id}
                  className="newnote-input-container card-shadow"
                  style={{ backgroundColor: note.noteColor }}
                >
                  <div className="input-text-section-container">
                    <div className="input-text-section">
                      <h2>{note.title}</h2>
                      <h3>{note.description}</h3>
                    </div>
                    <div>
                      <span
                        onClick={() => pinHandler(note)}
                        className="material-icons pin-icon active"
                      >
                        push_pin
                      </span>
                    </div>
                  </div>
                  <div className="edit-section-container">
                    <div className="edit-section">
                      <h2>{note.typeOfNote}</h2>
                    </div>
                    <div className="note-icon-container">
                      <span
                        onClick={() =>
                          setIsEditMode({ state: true, note: note })
                        }
                        className="material-icons pin-icon"
                      >
                        edit
                      </span>
                      <span
                        onClick={() => addToArchive(note)}
                        className="material-icons pin-icon"
                      >
                        archive
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
        {notes.filter((n) => !n.pinned).length === 0 ? null : (
          <h1 className="other-text">Other</h1>
        )}
        <div className="other">
          {notes
            .filter((n) => !n.pinned)
            .map((note) => {
              return (
                <div
                  key={note._id}
                  className="newnote-input-container card-shadow"
                  style={{ backgroundColor: note.noteColor }}
                >
                  <div className="input-text-section-container">
                    <div className="input-text-section">
                      <h2>{note.title}</h2>
                      <h3>{note.description}</h3>
                    </div>
                    <div>
                      <span
                        onClick={() => pinHandler(note)}
                        className="material-icons-outlined pin-icon"
                      >
                        push_pin
                      </span>
                    </div>
                  </div>
                  <div className="edit-section-container">
                    <div className="edit-section">
                      <h2>{note.typeOfNote}</h2>
                    </div>
                    <div className="note-icon-container">
                      <span
                        onClick={() =>
                          setIsEditMode({ state: true, note: note })
                        }
                        className="material-icons pin-icon"
                      >
                        edit
                      </span>
                      <span
                        onClick={() => addToArchive(note)}
                        className="material-icons pin-icon"
                      >
                        archive
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
      </div>
      {isEditMode.state ? <EditModel /> : null}
    </>
  );
};
