import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    language: 'eng',
};

export const userSlice = createSlice({
    name:'userPage',
    initialState,
    reducers: {
        setLanguage(state, {payload}) {
            state.language = payload;
        }
    }
})

export default userSlice.reducer;

export const {
    setLanguage,
} = userSlice.actions;