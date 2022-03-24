import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNoteContext } from "./Notes.context";
import { useReducerContext } from "./Reducer.context";

const ArchivedNotesContext = createContext();

const ArchivedNotesProvider = ({ children }) => {
  const { dispatch } = useReducerContext();
  const [archivedNotes, setArchivedNotes] = useState([]);
  const { setNotes } = useNoteContext();
  const encodedToken = localStorage.getItem("StormKeepToken");

  const addToArchive = async (note) => {
    try {
      const response = await axios.post(
        `/api/notes/archives/${note._id}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );
      if (response.status === 201) {
        setNotes(response.data.notes);
        setArchivedNotes(response.data.archives);
        dispatch({ type: "SUCCESS_TOAST", payload: "Note Archived" });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const archiveToNotes = async (note) => {
    try {
      const response = await axios.post(
        `/api/archives/restore/${note._id}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );
      if (response.status === 200) {
        setNotes(response.data.notes);
        setArchivedNotes(response.data.archives);
        dispatch({ type: "SUCCESS_TOAST", payload: "Unarchived" });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const removeFromArchive = async (note) => {
    try {
      const response = await axios.delete(
        `/api/archives/delete/${note._id}`,
        {
          headers: { authorization: encodedToken },
        }
      );
      console.log(response);
      if (response.status === 200) {
        setArchivedNotes(response.data.archives);
        dispatch({ type: "ERROR_TOAST", payload: "Deleted" });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ArchivedNotesContext.Provider
      value={{ addToArchive, archivedNotes, archiveToNotes, removeFromArchive }}
    >
      {children}
    </ArchivedNotesContext.Provider>
  );
};

const useArchivedNotesContext = () => useContext(ArchivedNotesContext);

export { useArchivedNotesContext, ArchivedNotesProvider };
