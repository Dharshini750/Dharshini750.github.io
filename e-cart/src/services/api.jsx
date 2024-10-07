// src/services/api.js
import axios from 'axios';

const API_URL = 'https://66e526da5cc7f9b6273c6a3e.mockapi.io/products'; // replace with your actual API URL

// Add Product
export const addProduct = async (product) => {
    const response = await axios.post(API_URL, product);
    return response.data;
};

// Edit Product
export const editProduct = async (id, product) => {
    const response = await axios.put(`${API_URL}/${id}`, product);
    return response.data;
};

// Delete Product
export const deleteProduct = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};

// Get All Products (Optional)
export const getProducts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Get Product by ID (Optional)
export const getProductById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};
