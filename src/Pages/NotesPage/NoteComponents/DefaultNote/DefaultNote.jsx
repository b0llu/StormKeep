import "./DefaultNote.css";

export const DefaultNote = () => {
  return (
    <div className="input-container card-shadow">
      <div className="input-text-section-container">
        <div className="input-text-section">
          <textarea
            type="text"
            placeholder="Title"
            autoFocus
            rows="1"
            className="text title-text-style"
          />
          <textarea
            rows="2"
            className="text"
            type="text"
            placeholder="Take a note..."
          />
        </div>
        <div>
          <span className="material-icons pin-icon">push_pin</span>
        </div>
      </div>
      <div className="edit-section-container">
        <div className="edit-section">
          <select className="tag" name="tagSelector">
            <option value="home">Home</option>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
          </select>
        </div>
        <button>Add</button>
      </div>
    </div>
  );
};
