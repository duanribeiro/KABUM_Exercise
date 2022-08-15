import { useContext } from 'react';
import axios from "axios"
import { TokenContext } from '../App'


const api = axios.create({
  baseURL: "http://127.0.0.1:3000"
})

if (sessionStorage.getItem("token")) {
  const token = sessionStorage.getItem("token")
  const AUTH_TOKEN =  `Token ${token}`;
  api.defaults.headers.common['Authorization'] = AUTH_TOKEN;
}

export default api