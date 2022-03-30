import ReactMarkdown from "react-markdown";
import { useArchivedNotesContext } from "../../Context/ArchivedNotes.context";
import "./ArchivedPage.css";

export const ArchivedPage = () => {
  const { archivedNotes, archiveToNotes, removeFromArchive } =
  useArchivedNotesContext();
  
  return (
    <div className="archived-container">
      <div style={{ textAlign: "center", width: "100%" }}>
        {archivedNotes.length === 0 ? (
          <h1 style={{ color: "var(--content-color)" }}>No Archives</h1>
        ) : (
          <h1 className="pin-text">Archives</h1>
        )}
      </div>
      <div style={{ width: "100%", display: "flex" }}>
        {archivedNotes.map((note) => {
          return (
            <div
              style={{ backgroundColor: note.noteColor }}
              key={note._id}
              className="newnote-input-container card-shadow"
            >
              <div className="input-text-section-container">
                <div className="input-text-section">
                  <h2>{note.title}</h2>
                  <ReactMarkdown className="h3">
                    {note.description}
                  </ReactMarkdown>
                </div>
              </div>
              <div className="edit-section-container">
                <div className="edit-section">
                  <h2>{note.typeOfNote}</h2>
                  <h2>{note.priority}</h2>
                </div>
                <div className="note-icon-container">
                  <span
                    onClick={() => archiveToNotes(note)}
                    className="material-icons pin-icon"
                  >
                    unarchive
                  </span>
                  <span
                    onClick={() => removeFromArchive(note)}
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
  );
};
