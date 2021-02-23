import axios from 'axios';

export const createService = async (data) => {
    const response = await axios.post('/api/service/', data);

    return response;
};
export const getServices = async () => {
    const response = await axios.get('/api/service/');

    return response;
};
