import { START_LOADING, STOP_LOADING } from '../constants/loadingConstants';
import {
	SHOW_ERROR_MESSAGE,
	SHOW_SUCCESS_MESSAGE,
} from '../constants/messageConstants';
import {
	GET_TEMPLATES,
	CREATE_TEMPLATE,
} from '../constants/templateConstants';
import axios from 'axios';

export const getTemplates = () => async dispatch => {
	try {
		dispatch({ type: START_LOADING });
		const response = await axios.get('/api/template');
		dispatch({ type: STOP_LOADING });
		dispatch({ type: GET_TEMPLATES, payload: response.data.templates });
	} catch (err) {
		console.log('getCategories api error: ', err);
		dispatch({ type: STOP_LOADING });
		
	}
};

export const createTemplate = formData => async dispatch => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		dispatch({ type: START_LOADING });
		const response = await axios.post('/api/template', formData, config);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_SUCCESS_MESSAGE,
			payload: response.data.successMessage,
		});
		dispatch({ type: CREATE_TEMPLATE, payload: response.data.template });
	} catch (err) {
		console.log('createCategory api error: ', err);
		dispatch({ type: STOP_LOADING });
	
	}
};