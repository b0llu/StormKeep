export const reducer = (state, action) => {
  switch (action.type) {
    // loading case
    case "LOADING":
      return {
        ...state,
        loading: !state.loading,
      };

    // success toast
    case "SUCCESS_TOAST":
      return {
        ...state,
        forToast: {
          text: action.payload,
          trigger: !state.forToast.trigger,
          selector: "success",
        },
      };

    // error toast
    case "ERROR_TOAST":
      return {
        ...state,
        forToast: {
          text: action.payload,
          trigger: !state.forToast.trigger,
          selector: "error",
        },
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
