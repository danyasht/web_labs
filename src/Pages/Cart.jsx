import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../Components/Redux/actions';
import { calculateTotal } from '../Components/Redux/selectors'; // Імпорт селектора
import "./Cart.css"

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const total = useSelector((state) => calculateTotal(state.cart.cartItems)); // Використання селектора для підрахунку загальної суми
    const dispatch = useDispatch();

    const handleRemoveFromCart = (itemId) => {
        dispatch(removeFromCart(itemId));
    };

    console.log('Cart Items:', cartItems);

    return (
        <div className='cart-global'>
            <h1>Your wishlist</h1>
            {cartItems && cartItems.length > 0 ? (
                <div className='display-cart-items'>
                    {cartItems.map((item) => (
                        <div key={item.id}>
                            <p>{item.name} - ${item.price}</p>
                            <button className="remove-button"onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                        </div>
                    ))}
                    <h1>Total: ${total}</h1> {/* Відображення загальної суми */}
                </div>
            ) : (
                <h1>Your cart is empty</h1>
            )}
        </div>
    );
};

export default Cart;
