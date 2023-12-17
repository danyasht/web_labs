// redux/selectors.js
export const calculateTotal = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.price, 0);
};
