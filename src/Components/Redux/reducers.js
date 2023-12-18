// redux/reducers.js
const initialState = {
    cartItems: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            };
        case 'REMOVE_FROM_CART':
            const indexToRemove = state.cartItems.findIndex(item => item.id === action.payload);

            if (indexToRemove !== -1) {
                const newCartItems = [...state.cartItems];
                newCartItems.splice(indexToRemove, 1);

                return {
                    ...state,
                    cartItems: newCartItems,
                };
            }
            return state;
        default:
            return state;
    }
};

export default cartReducer;
