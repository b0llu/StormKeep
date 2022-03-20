import { useEffect } from "react";
import { useFilterReducerContext } from "../../context/FilterReducer.context";
import "./Toast.css";

export const Toast = () => {
  const { forToast, dispatch } = useFilterReducerContext();

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     dispatch({ type: "TOAST_STATE_CLEAN" });
  //   }, 2000);
  //   return () => clearTimeout(timeout);
  // }, [forToast.trigger]);

  return (
    <div
    //   className={` ${
    //     forToast.selector === "success" ? "toast-success" : "toast-error"
    //   } ${forToast.text !== "" ? "open" : "close"}`}
    >
      {/* {forToast.text} */}
    </div>
  );
};
