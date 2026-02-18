import { createSlice } from "@reduxjs/toolkit";
import stat from "daisyui/components/stat";

const requestSlice = createSlice({
    name:"requests",
    initialState: null,
    reducers:{
        addRequest:(state, action) => action.payload,
        removeRequest: (state, action) => {
            const requestId = action.payload;
            return state.filter(request => request._id !== requestId);
        }
    }   
});

export const { addRequest, removeRequest } = requestSlice.actions;
export default requestSlice.reducer;