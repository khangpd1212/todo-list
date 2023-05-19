import { createAsyncThunk } from "@reduxjs/toolkit";
import { RequestLoginUser, RequestNewUser, User } from "./AuthState";
import axiosBaseURL from "../../../common/utils/httpCommon";
import { AxiosResponse } from "axios";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (
    { username, email, password }: RequestNewUser,
    { rejectWithValue }
  ) => {
    try {
      return await axiosBaseURL.post(`users`, { username, email, password });
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const loginUser = createAsyncThunk<
  User,
  RequestLoginUser,
  { rejectValue: string }
>(
  "auth/login",
  async ({ email, password }: RequestLoginUser, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<{ user: User }, User> =
        await axiosBaseURL.post(`login`, { email, password });
      return response.data.user;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
