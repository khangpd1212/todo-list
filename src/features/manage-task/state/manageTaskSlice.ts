import { createSlice } from "@reduxjs/toolkit";
import { AsyncData } from "../../../store/AsyncData";
import { Task } from "./ManageTaskState";
import { getTask, getTasks } from "./manageTaskActions";

const initialState: AsyncData<Task> = {
  data: {
    articles: [],
    articlesCount: 0,
    article: undefined,
  },
  error: null,
  loading: false,
};
export const manageTaskSlice = createSlice({
  name: "manage-task",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTasks.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getTasks.fulfilled, (state, action) => {
      state.loading = false;
      state.data = {
        ...state.data,
        articles: action.payload.articles,
        articlesCount: action.payload.articlesCount,
      };
    });
    builder.addCase(getTasks.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });

    builder.addCase(getTask.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getTask.fulfilled, (state, action) => {
      state.loading = false;
      state.data = { ...state.data, article: action.payload };
    });
    builder.addCase(getTask.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });
  },
});
