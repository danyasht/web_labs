import React from 'react';
import "./HeroCatalog.css";
import Item from '../Item/Item';
import all_product from '../Assets/all_product';
import dropdown_icon from "../Assets/dropdown_icon.png"

const HeroCatalog = () => {
  return (
    <div className="catalog">
      <h1>Showing 12 of 12 products</h1>
      <div className="sort-catalog">
        <button className='sort-button'>Sort by <img src={dropdown_icon} alt="" /></button>
        <button className='apply-filters-button'>Apply filters</button>
      </div>
      <div className='catalog-products'>
      {all_product.map((item, i)=>{
          return <Item key = {i} id={item.id} name={item.name} image={item.image} price={item.price}/>
        })}
      </div>
    </div>
  )
}

export default HeroCatalog

