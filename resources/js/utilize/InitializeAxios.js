import axios from 'axios';
import { getDataProduct } from './index.js';
const apiKey = getDataProduct;

const instanceAxios = axios.create({
  baseURL: apiKey
});

export default instanceAxios;