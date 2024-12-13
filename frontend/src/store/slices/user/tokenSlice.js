import  { createSlice } from "@reduxjs/toolkit"

export const tokenSlice = createSlice({
    name: "token",
    initialState: null,
    reducers: {
        recieveToken: (state, action) => action.payload
    }
})


export const selectToken = (state) => state.token;
export const { recieveToken } = tokenSlice.actions
export default tokenSlice.reducer