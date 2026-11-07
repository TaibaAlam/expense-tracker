import { configureStore } from "@reduxjs/toolkit";
import reducer from "../features/Slice";

const store = configureStore({
    reducer
})
export default store;