import { configureStore } from '@reduxjs/toolkit';
import CouterReducer from './couter/CouterSlice';
export const store = configureStore({
    reducer: {
        count: CouterReducer,
    },
});
