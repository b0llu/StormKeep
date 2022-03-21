import "./NewNotes.css";

export const NewNotes = () => {
  return (
    <div className="new-note-container">
      <div className="input-container card-shadow">
        <div className="input-text-section-container">
          <div className="input-text-section">
            <h2>Title</h2>
            <h3>Description</h3>
          </div>
          <div>
            <span className="material-icons pin-icon">push_pin</span>
          </div>
        </div>
        <div className="edit-section-container">
          <div className="edit-section">
            <h2>Work</h2>
          </div>
          <div>
            <span class="material-icons pin-icon">edit</span>
            <span className="material-icons pin-icon">delete</span>
          </div>
        </div>
      </div>
    </div>
  );
};
