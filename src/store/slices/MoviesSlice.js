import { createSlice } from "@reduxjs/toolkit";

import {reset} from "../actions.js";


export const movieSlice = createSlice( {
    name :"movies",
    initialState : [],
    reducers : {
        addMovie(state , {type,payload}) {
            state.push(payload);
        },
        removeMovie(state , {type , payload}){
            const index = state.indexOf(payload);
            state.splice(index,1);
        },
        extraReducers(builder) {
            builder.addCase(reset, (state , action) => {
                return  [];
            })
        }
    }

});


export const {addMovie , removeMovie} = movieSlice.actions; 

