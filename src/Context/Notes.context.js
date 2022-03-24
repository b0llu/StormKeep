import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useReducerContext } from "./Reducer.context";

const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const { dispatch } = useReducerContext();
  const encodedToken = localStorage.getItem("StormKeepToken");
  const [notes, setNotes] = useState([]);
  const [isEditMode, setIsEditMode] = useState({ state: false, note: {} });

  const addNote = async (note) => {
    try {
      const response = await axios.post(
        "/api/notes",
        { note: note },
        { headers: { authorization: encodedToken } }
      );
      if (response.status === 201) {
        setNotes(response.data.notes);
        dispatch({ type: "SUCCESS_TOAST", payload: "Note Added" });
      }
      console.log(response)
    } catch (err) {
      dispatch({ type: "ERROR_TOAST", payload: "Something went Wrong" });
    }
  };

  const removeNote = async (id) => {
    try {
      const response = await axios.delete(`/api/notes/${id}`, {
        headers: { authorization: encodedToken },
      });
      if (response.status === 200) {
        setNotes(response.data.notes);
        dispatch({ type: "ERROR_TOAST", payload: "Note Removed" });
      }
    } catch (err) {
      dispatch({ type: "ERROR_TOAST", payload: "Something went Wrong" });
    }
  };

  const editNote = async (notes, id) => {
    try {
      const response = await axios.post(
        `/api/notes/${id}`,
        {
          note: {
            title: notes.title,
            description: notes.description,
            typeOfNote: notes.typeOfNote,
            pinned: notes.pinned
          },
        },
        { headers: { authorization: encodedToken } }
      );
      if (response.status === 201) {
        setNotes(response.data.notes);
        dispatch({ type: "SUCCESS_TOAST", payload: "Note Edited" });
      }
    } catch (error) {
      dispatch({ type: "ERROR_TOAST", payload: "Something went Wrong" });
    }
  };

  const pinHandler = async (note) => {
    try {
      const response = await axios.post(
        `/api/notes/${note._id}`,
        {
          note: { pinned: !note.pinned },
        },
        { headers: { authorization: encodedToken } }
      );
      if (response.status === 201) {
        setNotes(response.data.notes);
        dispatch({ type: "SUCCESS_TOAST", payload: "Note Edited" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NoteContext.Provider
      value={{
        addNote,
        notes,
        setNotes,
        removeNote,
        editNote,
        pinHandler,
        isEditMode,
        setIsEditMode,
        encodedToken,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

const useNoteContext = () => useContext(NoteContext);

export { useNoteContext, NoteProvider };
