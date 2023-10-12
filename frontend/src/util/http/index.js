import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

export const getTest = () => {
  return api.get("/");
};

// export const getRestaurantsMetadata = async (metadataId) => {
//   return await api.get(`/restaurants/${metadataId}`);
// };

export const postQNA = (passage, question) => {
  if (passage && question) {
    return api.post("/api/v1/ai/passage", {
      passage: passage,
      question: question,
    });
  }
};

// export const postOder = async (data) => {
//   return await api.post(`/oder/place`, data);
// };

// export const login = async (data) => {
//   return await api.post(`/auth/login`, data);
// };

// export const verify = async () => {
//   return await api.get(`/auth/verify`);
// };

// export const getOders = async (status) => {
//   return await api.get(`/restaurants/oders?status=${status}`);
// };

// export const getItem = async (data) => {
//   return await api.post(`/restaurants/item`, data);
// };

// export const updateOderStatus = async (id, data) => {
//   return await api.patch(`/restaurants/updatestatus?id=${id}`, data);
// };

// export const getVender = async () => {
//   return await api.get(`/vender/me`);
// };

// export const updateitem = async (id, data) => {
//   return await api.patch(`/vender/menus/updateitem?id=${id}`, data);
// };

export default api;
