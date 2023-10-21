export const setSignedIn = (isSignedIn) => ({
  type: "SET_SIGNED_IN",
  payload: isSignedIn,
});

export const setUserNIC = (nic) => ({
  type: "SET_NIC",
  payload: nic,
});
