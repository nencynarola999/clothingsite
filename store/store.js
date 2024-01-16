import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slice/userslice";

export const store = configureStore({
    reducer:{
        product: userSlice?.reducer
    }
})