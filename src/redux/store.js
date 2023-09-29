import { configureStore } from "@reduxjs/toolkit";
import notSlice from "./note/not.slice";

export const store = configureStore({
    reducer: { notes: notSlice }
})