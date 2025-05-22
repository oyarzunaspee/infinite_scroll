import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./api.js";
import { limitSlice } from "./reducers/limit.js"
import { searchSlice } from "./reducers/search.js";

export const store = configureStore({
    reducer: {
      api: api.reducer,
      limit: limitSlice.reducer,
      search: searchSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
    }).concat(api.middleware),
});
  
setupListeners(store.dispatch);