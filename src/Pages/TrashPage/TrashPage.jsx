import ReactMarkdown from "react-markdown";
import { useNoteContext } from "../../Context/Notes.context";
import { useTrashContext } from "../../Context/Trash.context";
import "./TrashPage.css";

export const TrashPage = () => {
  const { trashedNote, removeFromTrashHandler } = useTrashContext();
  const { addNote } = useNoteContext();

  return (
    <section>
      <div className="trash-container">
        <div className="trash-header">
          {trashedNote.length === 0 ? (
            <h1>No Trashed Notes</h1>
          ) : (
            <h1 className="pin-text">Trashed Notes</h1>
          )}
        </div>
        {trashedNote.map((note) => {
          return (
            <div
              key={note._id}
              className="newnote-input-container card-shadow"
              style={{ backgroundColor: note.noteColor }}
            >
              <div className="input-text-section-container">
                <div className="input-text-section">
                  <h2>{note.title}</h2>
                  <ReactMarkdown className="h3">
                    {note.description}
                  </ReactMarkdown>
                  <h3>{note.createdAtTime}</h3>
                </div>
              </div>
              <div className="edit-section-container">
                <div className="edit-section">
                  <h2>{note.typeOfNote}</h2>
                  <h2>{note.priority}</h2>
                </div>
                <div className="note-icon-container">
                  <span
                    onClick={() => {
                      addNote(note), removeFromTrashHandler(note._id);
                    }}
                    className="material-icons pin-icon"
                  >
                    note_add
                  </span>
                  <span
                    onClick={() => removeFromTrashHandler(note._id)}
                    className="material-icons pin-icon"
                  >
                    delete_forever
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
