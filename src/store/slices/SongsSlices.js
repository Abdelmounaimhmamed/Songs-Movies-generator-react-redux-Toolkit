import { createSlice } from "@reduxjs/toolkit";

import {reset} from "../actions";

export const songsSlice = createSlice({
    name : "songs",
    initialState : [],
    reducers : {
        addSong(state , action) {
            state.push(action.payload)
        },
        removeSong(state , action){
            const position = state.indexOf(action.payload);
            state.splice(position, 1);
        },
       
        extraReducers(builder) {
            builder.addCase(reset.toString(), (state , action) => {
                return  [];
            });
        }
    }
})
export const {addSong,removeSong } = songsSlice.actions;
