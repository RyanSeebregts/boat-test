import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import React from "react";

interface UIFlags {

}
interface UIModals {

}

interface UIState {
    flags: UIFlags,
    modals: UIModals,
    countTest: number
}


const initialState: UIState = {
    flags: {
    
    },
    modals: {
        
    },
    countTest: 0
}


const ui = createSlice({
    name: 'ui',
    initialState: initialState,
    reducers: {
        setCountTest: (state, action) => {
            state.countTest = action.payload.countTest;
        },
    },
})

export default ui;
