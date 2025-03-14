import { errorHandler } from '@/handlers/errorHandler';
import apiClient from '@/config/api.request';
import { successHandler } from './handleSuccess';

export async function _GET(endpoint, opt) {
    try {
        const response = await apiClient.get(`${endpoint}`);         
        successHandler(response, {notifyOnSuccess: true})
        console.log(response.data)
        return response.data;   
    } catch (error) {
       errorHandler(error)
    }
}


export async function _POST(endpoint, body) {
    try {
        const response = await apiClient.post(`${endpoint}`, body);         
        successHandler(response, {notifyOnSuccess: true})
        return response;   
    } catch (error) {
       errorHandler(error)
    }
}


export async function _DELETE(endpoint, body) {
    try {
        const response = await apiClient.delete(`${endpoint}`, body);         
        successHandler(response, {notifyOnSuccess: true})
        return response;   
    } catch (error) {
       errorHandler(error)
    }
}