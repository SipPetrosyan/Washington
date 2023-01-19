import api from "@/store/apiService";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


const name = "content";

const initialState = {
    home: null
}


export const getHomeContent = createAsyncThunk(
    `${name}/getHomeContent`,
    async () =>
        api({
            method: "GET",
            url: `https://jsonplaceholder.typicode.com/posts`
        })
);


const contentSlice = createSlice({
    name,
    initialState,
    reducers: {
        setContentsEmpty: (state) => {
            state = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getHomeContent.fulfilled, (state, {payload}) => {
           state.home = payload;
        });
    },
});

//     SELECTORS
export const selectHomeContent = state => state.content.home;


export default  contentSlice.reducer;
export const { setContentsEmpty } = contentSlice.actions;