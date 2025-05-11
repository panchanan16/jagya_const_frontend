import axios from 'axios';
import { BASE_URL } from '@/config/api.config';

const apiClient = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: { 'X-Custom-Header': 'foobar' }
});


export default apiClient;