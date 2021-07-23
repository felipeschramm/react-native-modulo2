import { createSlice } from "@reduxjs/toolkit";

const search = createSlice({
  name: "search",
  initialState: [],
  reducers: {
    add(state, action) {
      if (state.length <= 2) {
        state.push(action.payload);
        return state;
      } else {
        state.push(action.payload);
        const first = state.shift()
        return state;
      }
    },
  },
});

export const { add } = search.actions;
export default search.reducer;
