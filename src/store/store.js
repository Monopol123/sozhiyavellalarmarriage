import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./auth/userSlice";
import userListReducer from "./auth/userList";


export const store = configureStore({
  reducer: {
    user: useReducer,
    userList: userListReducer,
  },
});
