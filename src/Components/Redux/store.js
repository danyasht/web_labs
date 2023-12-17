// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers'; // Потрібно імпортувати cartReducer після його визначення

const store = configureStore({
    reducer: {
        cart: cartReducer,
        // Якщо є інші редуктори, вони можуть бути додані тут
    },
});

export default store;
