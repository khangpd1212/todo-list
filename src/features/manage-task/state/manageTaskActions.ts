import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import axiosBaseURL from "../../../configs/axios";
import { Article, RequestTask, Task } from "./ManageTaskState";

export const getTasks = createAsyncThunk(
  "manage-task/get-all-task",
  async (__, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<Task> = await axiosBaseURL.get(`articles`);
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getTask = createAsyncThunk(
  "manage-task/get-task",
  async (slug: string, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<{ article: Article }> =
        await axiosBaseURL.get(`articles/${slug}`);
      return response.data.article;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const updateTask = createAsyncThunk(
  "manage-task/update-task",
  async ({ slug, articleData }: RequestTask, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<any> = await axiosBaseURL.put(
        `articles/${slug}`,
        articleData
      );
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
