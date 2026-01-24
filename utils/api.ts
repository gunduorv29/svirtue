import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const createCartSession = async (data: any) => {
  try {
    const response = await api.post('/cart/create', data);
    return response.data;
  } catch (error) {
    console.error('Error creating cart session:', error);
    throw error;
  }
};

export const initializePayment = async (provider: 'paystack' | 'flutterwave', data: any) => {
  try {
    const endpoint = `/payment/${provider}/initialize`;
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error(`Error initializing ${provider} payment:`, error);
    throw error;
  }
};
