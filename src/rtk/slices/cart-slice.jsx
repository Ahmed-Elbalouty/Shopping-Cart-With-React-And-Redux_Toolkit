import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    initialState: [],
    name: "cartSlice",
    reducers: {
        addToCart: (state, action) => {
            const findProduct = state.find((product) => product.id === action.payload.id);
            if (findProduct) {
                findProduct.quantity += 1;
            } else {
                const productClone = { ...action.payload, quantity: 1 };
                state.push(productClone);
            }
        },
        deleteFromCart: (state, action) => {
            state.splice(action.payload, 1);
        },
        clear: () => {
            return [];
        },
    }
})

export const { addToCart, deleteFromCart, clear } = cartSlice.actions;
export default cartSlice.reducer;