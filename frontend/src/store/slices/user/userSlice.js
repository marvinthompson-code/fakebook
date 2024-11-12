import { createSlice } from "@reduxjs/toolkit";
import { getFirebaseIdToken } from "../../../util/firebaseFunctions";
import { recieveToken } from "./tokenSlice";
import { setLoading } from "../loading/loadingSlice";

export const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    recieveUser: {
      reducer: (state, action) => action.payload,
    },
    logout: {
      reducer: (state) => null,
    },
  },
});

export const asyncLogout = (dispatch) => {
  dispatch(logout());
};

export const updateUser = (user) => async (dispatch) => {
  dispatch(setLoading(true));
  debugger
  try {
    if (user) {
      const { email, uid } = user;
      debugger
      const lastLogin = user.metadata.lastSignInTime;
      debugger
      dispatch(recieveUser({ email, lastLogin, id: uid }));
      const token = await getFirebaseIdToken();
      dispatch(recieveToken(token));
    } else {
      dispatch(recieveUser(null));
    }
    dispatch(setLoading(false));
  } catch (error) {}
};
export const { recieveUser, logout } = userSlice.actions;
export default userSlice.reducer;
