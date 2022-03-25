import { useNoteContext } from "../../Context/Notes.context";
import { useReducerContext } from "../../Context/Reducer.context";
import { useFunctionCombiner } from "../../Hook/useFunctionCombiner";

export const LabelPage = () => {
  const {notes} = useNoteContext()
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
                </div>
                <div className="note-icon-container">
                  <span
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
