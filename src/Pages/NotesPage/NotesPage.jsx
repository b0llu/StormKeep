import { DefaultNote, NewNotes, NotesContainer } from "./NoteComponents";

export const NotesPage = () => {
  return (
    <NotesContainer>
      <DefaultNote />
      <NewNotes />
    </NotesContainer>
  );
};
