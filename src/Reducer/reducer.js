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

    // label filter
    case "FILTER":
      return {
        ...state,
        [action.filterType]: state[action.filterType].includes(action.filter)
          ? state[action.filterType].filter((type) => type !== action.filter)
          : [...state[action.filterType], action.filter],
      };

    // priority sorting
    case "HIGH_PRIORITY":
      return {
        ...state,
        sort: action.payload,
      };

    // toast state handler
    case "TOAST_STATE_CLEAN":
      return {
        ...state,
        forToast: {
          text: "",
          trigger: false,
          selector: "",
        },
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
