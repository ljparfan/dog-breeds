import axios from "axios";

export const abstractApiHttpClient = axios.create({
  baseURL: import.meta.env.VITE_ABSTRACT_API_BASE_URL,
});

export const dogCeoApiHttpClient = axios.create({
  baseURL: import.meta.env.VITE_DOGS_API_BASE_URL,
});
