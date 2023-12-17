import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import photo from '/Users/macbookDanya/Desktop/web/lab8_web_react/frontend/src/Components/Assets/product_11.png';

const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}>
        <img className="image-for-item" src={photo} alt={props.name} />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price">
          {props.price} $
        </div>
        <div className="available-size">
          {props.available_sizes}
        </div>
      </div>
    </div>
  );
};

export default Item;
