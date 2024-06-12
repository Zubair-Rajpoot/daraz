import { createSlice } from "@reduxjs/toolkit"
const homeSlice = createSlice({
    name: "home",
    initialState: {
        categories: [],
        products: []
    },
    reducers: {
        addCategories: (state, action) => {
            state.categories = action.payload
        },
        addProducts: (state, action) => {
            state.products = action.payload
        }
    }
})
export const { addCategories, addProducts } = homeSlice.actions
export default homeSlice.reducer