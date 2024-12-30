import { BASE_URL } from '@/constants/api';

export const getHeader = () => {
  return {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  };
};

export const getNestiaHeader = () => {
  return {
    host: BASE_URL,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
};
