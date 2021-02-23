import {
	GET_TEMPLATES,
	CREATE_TEMPLATE,
} from '../constants/templateConstants';

const INITIAL_STATE = {
	templates: [],
};

const templateReducers = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_TEMPLATES:
			return {
				...state,
				templates: action.payload,
			};
		case CREATE_TEMPLATE:
			return {
				...state,
				templates: [...state.categories, action.payload],
			};
		default:
			return state;
	}
};

export default templateReducers;