import { GET_LEADS} from '../constants/leadConstants';

const INITIAL_STATE = {
	leads: [],
};

const leadReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		
			case GET_LEADS :
				return {
					leads: [...action.payload],
				};
		default:
			return state;
	}
};

export default leadReducer;
