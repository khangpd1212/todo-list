import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { RootState } from "./RootState";
import { counterSlice } from "../features/user/state/userSlice";

const reducer = combineReducers<RootState>({
  counter: counterSlice.reducer,
});

export const store = configureStore({
  reducer,
});
