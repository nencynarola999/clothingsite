import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "product",
    initialState: {
        ethincfusion: [],
        westernwear: [],
        sportswear: [],
    },
    reducers: {
        getethincfusion: (state, action) => {
            state.ethincfusion = [...action.payload]
        },
        getwesternwear: (state, action) => {
            state.westernwear = [...action.payload]
        },
        getsportswear: (state, action) => {
            state.sportswear = [...action.payload]
        }
    }
})
export const { getethincfusion, getwesternwear, getsportswear } = userSlice.actions