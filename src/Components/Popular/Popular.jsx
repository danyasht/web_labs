import React, { useState } from 'react';
import "./Popular.css";
import data_product from "../Assets/data";
import Item from "../Item/Item";

const Popular = () => {
  const [showAll, setShowAll] = useState(false);
  const itemsToShow = showAll ? data_product : data_product.slice(0, 2);
  const buttonText = showAll ? 'VIEW LESS' : 'VIEW MORE';

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className='popular'>
      <h1>POPULAR CLOTHES</h1>
      <hr />
      <div className="popular-item">
        {itemsToShow.map((item) => (
          <Item key={item.id} id={item.id} name={item.name} image={item.image} price={item.price} />
        ))}
      </div>
      <button className="view-more" onClick={toggleShowAll}>
        {buttonText}
      </button>
    </div>
  );
};

export default Popular;

