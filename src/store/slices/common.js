import { createSlice} from "@reduxjs/toolkit";

const name = "common";

const initialState = {
    loading: false
}

const commonSlice = createSlice({
    name,
    initialState,
    reducers: {
        setLoader: (state, {payload}) => {
            state.loading = Boolean(payload);
        },
    }
});

//     SELECTORS
export const selectLoader = state => state.common.loading;

export const { setLoader } = commonSlice.actions;
export default  commonSlice.reducer;
