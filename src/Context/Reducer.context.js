import { createContext, useContext, useReducer } from "react";
import { reducer } from "../Reducer/reducer";

const ReducerContext = createContext();

const ReducerProvider = ({ children }) => {
  const [{ forToast, labels, loading, }, dispatch] = useReducer(reducer, {
    forToast: { text: "", trigger: false, selector: "" },
    labels: {},
    loading: false,
  });

  return (
    <ReducerContext.Provider
      value={{
        forToast,
        labels,
        loading,
        dispatch,
      }}
    >
      {children}
    </ReducerContext.Provider>
  );
};

const useReducerContext = () => useContext(ReducerContext);

export { useReducerContext, ReducerProvider };
