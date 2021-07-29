import { createSlice } from "@reduxjs/toolkit";
import { postArray } from '../untils/postArray';


const initialState = 'Smart';

export const postReducer = createSlice( {
    name: 'posts',
    initialState,
    reducers: {

    }
})

export default postReducer.reducer;