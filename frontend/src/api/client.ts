import axios, { AxiosInstance } from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const api: AxiosInstance = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const contactApi = {
  submitContact: (data: { name: string; email: string; message: string }) =>
    api.post('/contacts', data),
  getContacts: () => api.get('/contacts'),
};

export interface Product {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export interface OrderData {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  products: Product[];
  totalAmount: number;
  notes?: string;
}

export const orderApi = {
  submitOrder: (data: OrderData) => api.post('/orders', data),
  getOrders: () => api.get('/orders'),
  getOrder: (id: string) => api.get(`/orders/${id}`),
};
