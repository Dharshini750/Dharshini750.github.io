import React, { useState } from 'react';
import { addProduct } from '../../services/api'; 
const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    salePrice: 0,
    brand: '',
    size: '',
    stock: 'in stock',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addProduct(product); 
      alert('Product added successfully!');
    } catch (error) {
      console.error('Error uploading product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Product Name" required />
      <input type="text" name="brand" value={product.brand} onChange={handleChange} placeholder="Brand Name" />
      <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price" required />
      <input type="number" name="salePrice" value={product.salePrice} onChange={handleChange} placeholder="Sale Price" />
      <input type="text" name="size" value={product.size} onChange={handleChange} placeholder="Size" />
      <select name="stock" value={product.stock} onChange={handleChange}>
        <option value="in stock">In Stock</option>
        <option value="out of stock">Out of Stock</option>
      </select>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
