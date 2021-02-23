import axios from 'axios';

export const createBlog = async (formData) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await axios.post('/api/blog/', formData, config);

    return response;
};

export const getBlogs = async () => {
    const response = await axios.get('/api/blog/');

    return response;
};