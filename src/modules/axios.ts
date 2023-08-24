import axios from "axios";

const instance = axios.create({
  baseURL: "https://gateway.marvel.com:443/",
});

instance.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    apikey: import.meta.env.VITE_APP_MARVEL_PUBLIC_API_KEY,
  };
  return config;
});

export default instance;
