import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers/themeReducer";

export const store = configureStore({
    reducer: {
        // ...reduces
        theme: themeReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;