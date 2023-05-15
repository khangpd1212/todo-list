// authActions.js
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "./AuthState";
import axiosBaseURL from "../../../common/utils/httpCommon";

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ username, email, password }: User, { rejectWithValue }) => {
    try {
      await axiosBaseURL.post(`users`, { username, email, password });
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const loginUser = createAsyncThunk<User, User, { rejectValue: string }>(
  "auth/login",
  async (data: User, thunkAPI) => {
    try {
      // const responsive = await axios.post("https://api.github.com/repos/github/hub/issues", data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch issues.");
    }
  }
);
