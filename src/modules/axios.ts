import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL_BASE,
});

instance.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    apikey: import.meta.env.VITE_APP_MARVEL_PUBLIC_API_KEY,
  };
  return config;
});

export default instance;
