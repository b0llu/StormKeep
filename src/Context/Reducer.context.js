import { createContext, useContext, useReducer } from "react";
import { reducer } from "../Reducer/reducer";

const ReducerContext = createContext();

const ReducerProvider = ({ children }) => {
  const [{ forToast }, dispatch] = useReducer(reducer, {
    forToast: { text: "", trigger: false, selector: "" },
  });

  return (
    <ReducerContext.Provider
      value={{
        forToast,
        dispatch,
      }}
    >
      {children}
    </ReducerContext.Provider>
  );
};

const useReducerContext = () => useContext(ReducerContext);

export { useReducerContext, ReducerProvider };
