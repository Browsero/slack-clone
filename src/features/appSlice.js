import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    roomId: null,
  },
  reducers: {
    switchRoom: (state, action) => {
      state.roomId = action.payload.roomId;
    },
  },
});

export const { switchRoom } = appSlice.actions;

//Selectors
export const selectRoomId = (state) => state.app.roomId;

export default appSlice.reducer;
