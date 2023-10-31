const initialState = {
  isSignedIn: false, // Initial state
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SIGNED_IN":
      return {
        ...state,
        isSignedIn: action.payload,
      };
    case "SET_NIC":
      return {
        ...state,
        nic: action.payload,
      };
    default:
      return state;
  }
};
