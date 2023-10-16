import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postReducer from "../features/posts/postSlice";

const store = configureStore({
    reducer : {
        counter : counterReducer, // as we have exported counterSlice.reducer as default from the counterSlice file so we can change it's name to counterReducer
        posts : postReducer
    }
})

export default store