import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 10
}

export const limitSlice = createSlice({
  name: "limit",
  initialState,
  reducers: {
    changeLimit: (state, data) => {
        state.value = data.payload
    }
  }
});

export const { changeLimit } = limitSlice.actions

export default limitSlice.reducer