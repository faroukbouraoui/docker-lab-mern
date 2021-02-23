import { START_LOADING, STOP_LOADING } from '../constants/loadingConstants';
import {
	SHOW_ERROR_MESSAGE,
	SHOW_SUCCESS_MESSAGE,
} from '../constants/messageConstants';
import {
	CREATE_BLOG,
	GET_BLOGS,
} from '../constants/blogConstants';
import axios from 'axios';

export const getBlogs = () => async dispatch => {
	try {
		dispatch({ type: START_LOADING });
		const response = await axios.get('/api/blog/');
		dispatch({ type: STOP_LOADING });
		dispatch({ type: GET_BLOGS, payload: response.data.blogs });
	} catch (err) {
		console.log('getBlogs api error: ', err);
		dispatch({ type: STOP_LOADING });
	
	}
};

export const createBlog = formData => async dispatch => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		dispatch({ type: START_LOADING });
		const response = await axios.post('/api/blog/', formData, config);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_SUCCESS_MESSAGE,
			payload: response.data.successMessage,
		});
		dispatch({ type: CREATE_BLOG, payload: response.data.blog });
	} catch (err) {
		console.log('createBlog api error: ', err);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_ERROR_MESSAGE,
			payload: err.response.data.errorMessage,
		});
	}
};