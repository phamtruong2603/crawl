import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './reducer/reducerCounter';
import { userReducer } from './reducer/userReducer';

const store = configureStore({
    reducer: {
        counterReducer,
        userReducer
    }
})

export default store;