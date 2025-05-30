import { errorHandler } from '@/handlers/errorHandler';
import apiClient from '@/config/api.request';
import { successHandler } from '../handlers/handleSuccess';

export async function _GET(endpoint) {
    try {
        const response = await apiClient.get(`${endpoint}`);
        successHandler(response, { notifyOnSuccess: true })
        return response.data;
    } catch (error) {
        errorHandler(error)
    }
}


export async function _POST(endpoint, body) {
    try {
        const response = await apiClient.post(`${endpoint}`, body);
        successHandler(response, { notifyOnSuccess: true })
        return response.data;
    } catch (error) {
        return errorHandler(error)
    }
}


export async function _DELETE(endpoint, body) {
    try {
        const response = await apiClient.delete(`${endpoint}`, {data: body});
        successHandler(response, { notifyOnSuccess: true })
        return response.data;
    } catch (error) {
        return errorHandler(error)
    }
}



export async function _UPDATE(endpoint, body) {
    try {
        const response = await apiClient.put(`${endpoint}`, body);
        successHandler(response, { notifyOnSuccess: true })
        return response.data;
    } catch (error) {
        return errorHandler(error)
    }
}

