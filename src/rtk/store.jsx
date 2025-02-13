import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './slices/products-slice'
import cartSlice from './slices/cart-slice'

const store = configureStore({
    reducer: {
        products: productsSlice,
        cart: cartSlice
    }
})

export default store