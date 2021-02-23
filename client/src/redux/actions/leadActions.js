
import axios from 'axios';
import { START_LOADING, STOP_LOADING } from '../constants/loadingConstants';
import {
	SHOW_ERROR_MESSAGE,
	SHOW_SUCCESS_MESSAGE,
} from '../constants/messageConstants';
import {  GET_LEADS } from '../constants/leadConstants';



export const getLeads = () => async dispatch => {
	try {
		dispatch({ type: START_LOADING });
		const response = await axios.get('/leads/');
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: GET_LEADS,
			payload: response.data.leads,
		});
	} catch (err) {
		console.log('getLeads api error: ', err);
		dispatch({ type: STOP_LOADING });
		
	}
};
