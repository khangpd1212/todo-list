import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import axiosBaseURL from "../../../configs/axios";
import { auth } from "../../../configs/firebase";
import { RequestLoginUser, RequestNewUser, User } from "./AuthState";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (
    { username, email, password }: RequestNewUser,
    { rejectWithValue }
  ) => {
    try {
      return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("🚀 ~ file: authActions.ts:18 ~ .then ~ user:", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
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
