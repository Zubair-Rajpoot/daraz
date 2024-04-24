import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: []
    },
    reducers: {
        addItem: (state, action) => {
            state.cartItems.push(action.payload)
        },
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter(item => {
                return item.id !== action.payload.id
            })
        },
        updateQuantity: (state, action) => {
            const index = state.cartItems.findIndex((item) => {
                return item.id === action.payload.id
            })
            if (index !== -1) {
                state.cartItems[index].quantity = action.payload.quantity
            }
        }
    }
})
export const { addItem } = cartSlice.actions
export default cartSlice.reducer