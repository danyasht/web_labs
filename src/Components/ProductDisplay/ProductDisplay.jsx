import React from 'react'
import "./ProductDisplay.css"
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/actions';
import photo from '/Users/macbookDanya/Desktop/web/lab8_web_react/frontend/src/Components/Assets/product13.jpeg'


export const ProductDisplay = (props) => {
    const dispatch = useDispatch();
    const { product } = props;

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={photo} alt="" />
                    <img src={photo} alt="" />
                    <img src={photo} alt="" />
                    <img src={photo} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={photo} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-price">
                    <h4>Price:</h4>
                    ${product.price}
                </div>
                <div className="productdisplay-right-sizes">
                    <h4>Available sizes:</h4>
                    {product.available_sizes}
                </div>
                <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
            </div>

        </div>
    )
}

export default ProductDisplay
