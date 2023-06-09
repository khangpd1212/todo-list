import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { authSlice } from "../features/auth/state/authSlice";
import { counterSlice } from "../features/user/state/userSlice";
import { manageTaskSlice } from "../features/manage-task/state/manageTaskSlice";

const reducer = combineReducers({
  counter: counterSlice.reducer,
  auth: authSlice.reducer,
  manageTask: manageTaskSlice.reducer,
});

export const store = configureStore({
  reducer,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
