import userReducer from "./UserSlice/UserSlice";
import { configureStore } from "@reduxjs/toolkit";
import photoReducer from "./UploadSlice/UploadSlice";

export const store = configureStore({
  reducer: {
    photos: photoReducer,
    user: userReducer,
  },
});
