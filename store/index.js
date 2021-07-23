import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./Search/searchSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

export default store;
