import axios from "axios";

export const updateTransaction = async (id, data) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const res = await axios.put(`${baseUrl}/${id}`, data);
  return res.status;
};

export const addTransaction = async (data) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const res = await axios.post(`${baseUrl}`, data);
  console.log(res.status);
  return res.status;
};
