import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {

    const response = await fetch("https://crudcrud.com/api/f75ae9bb86454c928600d37ba0525179", {
        method: "POST",
        headers: {
            "Context-Type": "Application/json",
        },
        body: JSON.stringify(data)
    });

    try {
        const result = await response.json();
        return result;
    } catch (error) {

        return rejectWithValue(error);

    }


})





export const userDetails = createSlice({
    name: "userDetails",
    initialState: {
        user: [],
        loading: false,
        error: null,
    },
    extraReducers: {
        [createUser.pending]: (state) => { state.loading = true },

        [createUser.fulfilled]: (state,action) => {
            state.loading = false;
            state.users.push(action.payload)
            console.log("Successfull!");
        },
        [createUser.rejected]: (state,action) => {
            state.loading = false;
            state.users.push = action.payload;
        }
    }
})

export default userDetails.reducer;