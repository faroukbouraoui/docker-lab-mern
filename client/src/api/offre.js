import axios from 'axios';

export const createOffre = async (data) => {
    const response = await axios.post('/api/offre/', data);

    return response;
};
export const getServices = async () => {
    const response = await axios.get('/api/offre/');

    return response;
};