import { createContext, useContext, useReducer } from "react";
import { reducer } from "../Reducer/reducer";

const ReducerContext = createContext();

const ReducerProvider = ({ children }) => {
  const [{ forToast, labels, loading, sort, searchTerm, timeSort }, dispatch] =
    useReducer(reducer, {
      forToast: { text: "", trigger: false, selector: "" },
      labels: [],
      loading: false,
      sort: null,
      searchTerm: "",
      timeSort: null,
    });

  return (
    <ReducerContext.Provider
      value={{
        forToast,
        labels,
        loading,
        sort,
        searchTerm,
        timeSort,
        dispatch,
      }}
    >
      {children}
    </ReducerContext.Provider>
  );
};

const useReducerContext = () => useContext(ReducerContext);

export { useReducerContext, ReducerProvider };
