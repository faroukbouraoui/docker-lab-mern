import { CREATE_SERVICE, GET_SERVICES } from '../constants/serviceConstants';

const INITIAL_STATE = {
	services: [],
};

const serviceReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CREATE_SERVICE:
			return {
				services: [...state.services, action.payload],
			};
		case GET_SERVICES:
			return {
				services: [...action.payload],
			};
		default:
			return state;
	}
};

export default serviceReducer;
