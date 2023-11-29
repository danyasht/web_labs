import React, { useState, useContext } from 'react';
import "./HeroCatalog.css";
import Item from '../Item/Item';
import { ShopContext } from '../../Context/ShopContext';

const HeroCatalog = (props) => {
  const { all_product: products } = useContext(ShopContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showBackButton, setShowBackButton] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    let filteredResults = results;

    if (minPrice !== '' && !isNaN(minPrice)) {
      filteredResults = filteredResults.filter((product) => product.price >= parseFloat(minPrice));
    }

    if (maxPrice !== '' && !isNaN(maxPrice)) {
      filteredResults = filteredResults.filter((product) => product.price <= parseFloat(maxPrice));
    }

    setSearchResults(filteredResults);
    setShowBackButton(true);
  };

  const handleBack = () => {
    setSearchTerm('');
    setMinPrice('');
    setMaxPrice('');
    setSearchResults([]);
    setShowBackButton(false);
  };

  const displayProducts = searchResults.length > 0 ? searchResults : products;

  return (
    <div className="catalog">
      <h1>Showing {displayProducts.length} of {products.length} products</h1>
      <form className="searchproduct" onSubmit={handleSearch}>
        <input className='search-form'
          type="text"
          placeholder="Search by product name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input className='minprice-input'
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input className='maxprice-input'
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <button className="search-button" type="submit">Search</button>
      </form>
      {showBackButton && <button className='back-button' onClick={handleBack}>Back</button>}
      <div className='catalog-products'>
        {displayProducts.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            available_sizes={item.available_sizes}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCatalog;





