import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { characterApi } from "@entities/character/model/characterApi";

export const store = configureStore({
    reducer: {
        [characterApi.reducerPath]: characterApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(characterApi.middleware),
});

setupListeners(store.dispatch);
