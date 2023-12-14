import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img className="image-for-item"src={props.image} alt="" /></Link>
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
  )
}

export default Item
