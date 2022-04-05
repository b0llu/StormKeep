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
    case "LABEL_FILTER":
      return {
        ...state,
        [action.filterType]: state[action.filterType].includes(action.filter)
          ? state[action.filterType].filter((type) => type !== action.filter)
          : [...state[action.filterType], action.filter],
      };

    // label reset
    case "LABEL_RESET":
      return {
        ...state,
        labels: [],
      };

    // priority filter
    case "PRIORITY_FILTER":
      return {
        ...state,
        [action.filterType]: state[action.filterType].includes(action.filter)
          ? state[action.filterType].filter((type) => type !== action.filter)
          : [...state[action.filterType], action.filter],
      };

    // priority reset
    case "PRIORITY_RESET":
      return {
        ...state,
        priority: [],
        timeSort: null,
      };

    // priority sorting
    case "PRIORITY":
      return {
        ...state,
        sort: action.payload,
      };

    // search bar
    case "SEARCH_BAR":
      return {
        ...state,
        searchTerm: action.payload,
      };

    // sort of high to low
    case "LATEST":
      return {
        ...state,
        timeSort: "Latest",
      };

    // sort of low to high
    case "OLD":
      return {
        ...state,
        timeSort: "Old",
      };

    // add to cart
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
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
