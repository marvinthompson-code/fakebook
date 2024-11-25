import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";

// reducers
import userReducer from "./slices/user/userSlice"
import tokenReducer from "./slices/user/tokenSlice"
import loadingReducer from "./slices/loading/loadingSlice"
import postsReducer from "./slices/posts/postsSlice"

export default configureStore({
    reducer: {
        user: userReducer,
        token: tokenReducer,
        loading: loadingReducer,
        posts: postsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

