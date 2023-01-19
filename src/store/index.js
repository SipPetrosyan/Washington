import {combineReducers, configureStore} from "@reduxjs/toolkit";
import contentReducer from "./slices/content";
import commonReducer from "./slices/common";

const combinedReducers = combineReducers({
    content: contentReducer,
    common: commonReducer,
});

export default configureStore({
    reducer: combinedReducers,
});
