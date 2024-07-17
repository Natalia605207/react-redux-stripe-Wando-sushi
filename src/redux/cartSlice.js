import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addItemToCart: (state, action) => {
            const dish = action.payload.dish;

            const existingCartItem = state.cartItems.find(
                (item) => item.dishId === dish.id
            );

            if (existingCartItem) {
                existingCartItem.quantity += action.payload.quantity;
                existingCartItem.totalPrice = existingCartItem.quantity * existingCartItem.dishPrice;

            } else {
                const newItemId = new Date().getTime();
                state.cartItems.push({
                    id: newItemId,
                    dishId: dish.id,
                    dishName: dish.name,
                    dishImg: dish.img,
                    dishPrice: dish.price,
                    quantity: action.payload.quantity,
                    totalPrice: action.payload.quantity * dish.price,
                });
            }
            },

        removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (cartItem) => cartItem.id !== action.payload.cartItemId
            );
        },

        incrementCartItemQuantity: (state, action) => {
            const { dishId, quantity } = action.payload;
            
            const cartItem = state.cartItems.find(
                (item) => item.dishId === dishId
            );
            
            if (cartItem) {
                if (quantity > 1) {
                    cartItem.quantity += quantity;
                } else {
                    cartItem.quantity += 1;
                }
                cartItem.totalPrice = cartItem.quantity * cartItem.dishPrice;
                }
            },

            decrementCartItemQuantity: (state, action) => {
                const { dishId } = action.payload;
        
                const cartItem = state.cartItems.find(
                    (item) => item.dishId === dishId
                );
        
                if (cartItem && cartItem.quantity > 1) {
                    cartItem.quantity -= 1;
                    cartItem.totalPrice = cartItem.quantity * cartItem.dishPrice;
                }
            },

            clearCart: (state) => {
                state.cartItems = [];
            }
        },
    });

export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItems) => {
        return cartItems.totalPrice + total
    }, 0)
}

export const getTotalArticles = state => {
    return state.cart.cartItems.length 
};

export const getCartItems = state => state.cart.cartItems;
export const { addItemToCart, removeItemFromCart, incrementCartItemQuantity, decrementCartItemQuantity, clearCart } = slice.actions;
export default slice.reducer;