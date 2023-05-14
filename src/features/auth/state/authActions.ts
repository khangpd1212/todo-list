// authActions.js
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { User } from './AuthState'
import { useUser } from '../../../common/hooks/useUser'

const backendURL = 'http://127.0.0.1:5000'
const { addUser } = useUser()
export const registerUser = createAsyncThunk(
    'auth/register',
    async ({ username, email, password }: User, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            await axios.post(
                `${backendURL}/api/user/register`,
                { username, email, password },
                config
            )
        } catch (error: any) {
            // return custom error message from backend if present
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const loginUser = createAsyncThunk<User, User, { rejectValue: string }>(
    "auth/login",
    async (data: User, thunkAPI) => {
        try {
            addUser(data)
            // const responsive = await axios.post("https://api.github.com/repos/github/hub/issues", data);
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue("Failed to fetch issues.");
        }
    }
);