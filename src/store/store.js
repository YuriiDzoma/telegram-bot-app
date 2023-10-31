import { combineReducers, configureStore } from '@reduxjs/toolkit';

import walletSlice from './wallet-slice';
import userSlice from "./user-slice";


const rootReducers = combineReducers({
    wallet: walletSlice,
    user: userSlice,
});

export const store = configureStore({
    reducer: rootReducers
});
