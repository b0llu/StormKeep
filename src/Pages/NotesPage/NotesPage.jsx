import { useDocTitle } from "../../Hook/useTitle";
import { DefaultNote, NewNotes, NotesContainer } from "./NoteComponents";

export const NotesPage = () => {
  useDocTitle("Notes | StormKeep")
  return (
    <NotesContainer>
      <DefaultNote />
      <NewNotes />
    </NotesContainer>
  );
};
