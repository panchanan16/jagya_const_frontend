import axios from 'axios';
import { BASE_URL } from '@/config/api.config';
import Cookies from 'js-cookie';

const apiClient = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: { 'X-Custom-Header': 'foobar' }
});

apiClient.interceptors.request.use(
    (config) => {
        const token = Cookies.get('access') 
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
            console.log("cookie attached to header")
        }
        return config;
    },
    (error) => Promise.reject(error)
);


apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refreshToken =  Cookies.get('refresh') ;
            if (refreshToken) {
                try {
                    const res = await axios.post('/api/auth/refresh', { refreshToken });
                    const newToken = res.data.token;
                    localStorage.setItem('token', newToken);
                    api.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
                    originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
                    return apiClient(originalRequest); // Retry original request
                } catch (refreshError) {
                    localStorage.removeItem('token');
                    localStorage.removeItem('refreshToken');
                    window.location.href = '/admin/login'; // Or use React Router's navigate
                }
            } else {
                window.location.href = '/admin/login';
            }
        }
        return Promise.reject(error);
    }
);



export default apiClient;