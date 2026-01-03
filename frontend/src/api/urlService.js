import axios from 'axios';

// Vite proxy will redirect /api to http://localhost:8000
const API_BASE_URL = '/api'; 

export const shortenUrl = async (longUrl) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/shorten`, {
      url: longUrl
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};

export const resolveUrl = async (shortCode) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/resolve/${shortCode}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};