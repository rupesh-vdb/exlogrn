import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/Slice";

export const Store=configureStore({
    reducer:{
        counter: counterReducer,
    },
});