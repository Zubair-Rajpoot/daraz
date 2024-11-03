import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        grandTotal: 0
    },
    reducers: {
        addItem: (state, action) => {
            const index = state.cartItems.findIndex((item) => {
                return item.id === action.payload.id
            })
            if (index === -1) {
                action.payload.quantity = 1
                state.cartItems.push(action.payload)
                state.grandTotal = state.cartItems.reduce(((acu, cur) => acu + cur.price * cur.quantity), 0)
            }

        },
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter(item => {
                return item.id !== action.payload.id
            })
            state.grandTotal = state.cartItems.reduce(((acu, cur) => acu + cur.price * cur.quantity), 0)
        },
        updateQuantity: (state, action) => {
            const index = state.cartItems.findIndex((item) => {
                return item.id === action.payload.id
            })
            if (index !== -1) {
                state.cartItems[index].quantity = action.payload.quantity
                state.grandTotal = state.cartItems.reduce(((acu, cur) => acu + cur.price * cur.quantity), 0)
            }
        },
        emptyCart: (state) => {
            state.cartItems = [],
                state.grandTotal = 0
        }
    }
})
export const { addItem, removeItem, updateQuantity, emptyCart } = cartSlice.actions
export default cartSlice.reducer