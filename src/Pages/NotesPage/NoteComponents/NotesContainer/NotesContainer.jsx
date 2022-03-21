import "./NotesContainer.css";

export const NotesContainer = ({ children }) => {
  return (
    <section>
      <div className="notes-container">{children}</div>
    </section>
  );
};
