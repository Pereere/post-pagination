import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../redux/postReducer";

const store = configureStore({
    reducer: {
        postReducer
    }
});

export default store;