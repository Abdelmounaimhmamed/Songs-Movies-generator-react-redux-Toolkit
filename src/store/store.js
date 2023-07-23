
import { configureStore ,createSlice , createAction } from "@reduxjs/toolkit";

import { movieSlice } from "./slices/MoviesSlice";

import { songsSlice } from "./slices/SongsSlices";






const store = configureStore({
    reducer : {
        songs : songsSlice.reducer,
        movies : movieSlice.reducer
    }
});



export default store ;

