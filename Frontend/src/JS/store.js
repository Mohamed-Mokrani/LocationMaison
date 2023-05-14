import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice/userSlice";
import maisonSlice from "./maisonSlice/maisonSlice";

export const store = configureStore({
  reducer: { 
    user: userSlice ,
    maison: maisonSlice },
});
