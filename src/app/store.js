import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/cartSlice'
import userReducer from '../features/user/userSlice'
import homeReducer from '../features/home/homeSlice'
export default configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
        home: homeReducer
    },
})