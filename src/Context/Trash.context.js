import { createContext, useContext, useState } from "react";
import { useReducerContext } from "./Reducer.context";

const TrashContext = createContext();

const TrashProvider = ({ children }) => {
  const { dispatch } = useReducerContext();
  const [trashedNote, setTrashedNote] = useState([]);

  const trashHandler = (note) => {
    setTrashedNote([...trashedNote, note]);
  };

  const removeFromTrashHandler = (id) => {
    setTrashedNote(trashedNote.filter((note) => note._id !== id));
    dispatch({ type: "ERROR_TOAST", payload: "Deleted" });
  };

  return (
    <TrashContext.Provider
      value={{ trashedNote, trashHandler, removeFromTrashHandler }}
    >
      {children}
    </TrashContext.Provider>
  );
};

const useTrashContext = () => useContext(TrashContext);

export { useTrashContext, TrashProvider };
