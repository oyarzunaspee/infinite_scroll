import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: ""
}

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    changeSearch: (state, data) => {
        state.value = data.payload
    }
  }
});

export const { changeSearch } = searchSlice.actions

export default searchSlice.reducer