import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: "1", postTitle : "Post 1", postContent: "Here's the first content"},
    {id: "2", postTitle : "Post 2", postContent: "Here's the second content"},
];

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {

    }
});

export default postSlice.reducer;

