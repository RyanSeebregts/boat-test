import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

interface AuthState {
    isAuthenticated: boolean;
    networkConnection: boolean;
    errors: Error[];
}

const intitialState: AuthState = {
    isAuthenticated: false,
    networkConnection: true,
    errors: [],
}

const auth = createSlice({
    name: 'auth',
    initialState: intitialState,
    reducers: {
       
    },
    extraReducers: (builder) => {
        
    }
});

export default auth;
