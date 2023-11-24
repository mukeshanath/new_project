// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const getInitialLoginName = () => {
  // Retrieve the login name from localStorage on page load
  return localStorage.getItem('login_username') || "logout";
};


const userSlice = createSlice({
  name: 'user',
  initialState: {
    userDetails: getInitialLoginName(),
  },
  reducers: {
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    clearUserDetails: (state) => {
      state.userDetails = null;
    },
  },
});

export const { setUserDetails, clearUserDetails } = userSlice.actions;
export const selectUserDetails = (state) => state.user.userDetails;

export default userSlice.reducer;
