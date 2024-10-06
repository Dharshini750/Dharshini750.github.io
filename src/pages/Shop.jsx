import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Cart from './Cart';

const Shop = ({ addToCart }) => {
  const [sexFilter, setSexFilter] = useState('');
  const [sizeFilter, setSizeFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const products = [
    { id: 1, name: 'Women Top', price: '$35.99', description: 'Stylish women’s top, perfect for casual outings.', image: 'src/assets/img/p1.webp', size: 's', gender: 'female',type:"dress" },
  { id: 2, name: 'Winter Jacket', price: '$55.99', description: 'Warm winter jacket for unisex, ideal for chilly weather.', image: 'src/assets/img/p2.jfif', size: 'xl', gender: 'unisex',type:"dress" },
  { id: 3, name: 'Crop Top', price: '$15.99', description: 'Trendy crop top, adds a chic look to your outfit.', image: 'src/assets/img/p3.jfif', size: 'm', gender: 'female' ,type:"dress"},
  { id: 4, name: 'Lehanga', price: '$89.99', description: 'Elegant traditional wear for festive occasions.', image: 'src/assets/img/p4.jfif', size: 'xl', gender: 'female' ,type:"dress"},
  { id: 5, name: 'Casual Shirt', price: '$25.99', description: 'Comfortable and breathable shirt for everyday wear.', image: 'src/assets/img/p5.jfif', size: 'l', gender: 'male' ,type:"dress"},
  { id: 6, name: 'Formal Pant for Men', price: '$45.99', description: 'Classic formal pants, perfect for office or meetings.', image: 'src/assets/img/p6.jfif', size: 'm', gender: 'male',type:"dress" },
  { id: 7, name: 'Ethnic Wear', price: '$69.99', description: 'Traditional ethnic wear for special occasions.', image: 'src/assets/img/p7.jfif', size: 's', gender: 'female' ,type:"dress"},
  { id: 8, name: 'Jacket', price: '$79.99', description: 'Stylish and versatile jacket for both men and women.', image: 'src/assets/img/p8.jfif', size: 'l', gender: 'unisex',type:"dress" },
  { id: 9, name: 'Formal Shirt', price: '$9.99', description: 'Formal shirt for men, ideal for work or events.', image: 'src/assets/img/p9.jfif', size: 'xl', gender: 'male' ,type:"dress"},
  { id: 10, name: 'Combo Tops', price: '$39.99', description: 'Set of two stylish tops for casual wear.', image: 'src/assets/img/p10.jfif', size: 'xl', gender: 'female',type:"dress" },
  { id: 11, name: 'Casual Shirt', price: '$8.99', description: 'Relaxed fit shirt, suitable for everyday casual looks.', image: 'src/assets/img/p11.jfif', size: 'm', gender: 'unisex' ,type:"dress"},
  { id: 12, name: 'Tops', price: '$25.99', description: 'Versatile top for women, perfect for layering.', image: 'src/assets/img/p12.jfif', size: 's', gender: 'female' ,type:"dress"},
  { id: 13, name: 'Western Top', price: '$19.99', description: 'Chic western-style top, great for modern looks.', image: 'src/assets/img/p13.jfif', size: 'xl', gender: 'female' ,type:"dress"},
  { id: 14, name: 'Sweater', price: '$34.99', description: 'Cozy sweater for unisex, ideal for cold weather.', image: 'src/assets/img/p14.jfif', size: 'l', gender: 'unisex' ,type:"dress"},
  { id: 15, name: 'Black Top', price: '$17.99', description: 'Stylish black top, great for both casual and formal settings.', image: 'src/assets/img/p15.jfif', size: 'xxl', gender: 'female',type:"dress" },
  { id: 16, name: 'Suit', price: '$99.99', description: 'Classic men’s suit for formal occasions.', image: 'src/assets/img/p16.jfif', size: 'xl', gender: 'male',type:"dress" },
  { id: 17, name: 'Ethnic Set', price: '$75.99', description: 'Elegant ethnic set for women, ideal for special events.', image: 'src/assets/img/p17.jfif', size: 'xl', gender: 'female' ,type:"dress"},
  { id: 18, name: 'Tees', price: '$29.99', description: 'Comfortable and stylish t-shirts for casual wear.', image: 'src/assets/img/p18.jfif', size: 'l', gender: 'male' ,type:"dress"},
  { id: 19, name: 'Formal Suit', price: '$49.99', description: 'Women’s formal suit, perfect for professional settings.', image: 'src/assets/img/p19.jfif', size: 'xl', gender: 'female' ,type:"dress"},
  { id: 20, name: 'White Shirt', price: '$59.99', description: 'Unisex white shirt, a wardrobe essential.', image: 'src/assets/img/p20.jfif', size: 'm', gender: 'unisex' ,type:"dress"}
 
  ];

  const filteredProducts = products.filter(product => {
    const matchesSex = sexFilter === '' || product.gender === sexFilter;
    const matchesSize = sizeFilter === '' || product.size === sizeFilter;
    return matchesSex && matchesSize;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div style={{ padding: '20px' }}>
      

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <select value={sexFilter} onChange={(e) => setSexFilter(e.target.value)} style={{ marginRight: '10px' }}>
          <option value="">All Gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="unisex">Unisex</option>
        </select>

        <select value={sizeFilter} onChange={(e) => setSizeFilter(e.target.value)}>
          <option value="">All Sizes</option>
          <option value="s">Small</option>
          <option value="m">Medium</option>
          <option value="l">Large</option>
          <option value="xl">X-Large</option>
          <option value="xxl">XX-Large</option>
        </select>
      </div>

      <div className="product-list primary" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {currentProducts.length > 0 ? (
          currentProducts.map(product => (
            <div
              key={product.id}
              className="product-item"
              style={{
                flex: '1 1 calc(25% - 20px)',
                boxSizing: 'border-box',
                padding: '20px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                textAlign: 'center',
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                }}
              />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <p>Size: {product.size}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No products found for the selected filters.</p>
        )}
      </div>

      {/* Pagination */}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            style={{
              margin: '0 5px',
              padding: '10px',
              backgroundColor: currentPage === index + 1 ? '#007bff' : '#ccc',
              color: currentPage === index + 1 ? '#fff' : '#000',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Shop;