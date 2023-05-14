import { createSlice } from "@reduxjs/toolkit";
import { AsyncData } from "../../../store/AsyncData";
import { User } from "./AuthState";
import { loginUser, registerUser } from "./authActions";

const initialState: AsyncData<User> = {
    data: { password: "", username: "", email: "", token: "" },
    error: null,
    loading: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = true;
            state.error =  action.error.message || 'Something went wrong';;
        })
    }
});
