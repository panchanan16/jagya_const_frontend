import { errorHandler } from '@/handlers/errorHandler';
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 10000,
    headers: { 'X-Custom-Header': 'foobar' }
});


export async function _GET(endpoint) {
    try {
        const response = await apiClient.get(`${endpoint}`);         
        if (response && response.success) {
            console.log(response.data); 
            return response
        }
        throw response;
        
    } catch (error) {
       errorHandler(error)
    }
}