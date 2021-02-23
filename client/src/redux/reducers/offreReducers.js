import { CREATE_OFFRE,GET_OFFRES} from '../constants/offreConstant';

const INITIAL_STATE = {
	offres: [],
};

const offreReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CREATE_OFFRE:
			return {
				offres: [...state.offres, action.payload],
			};
			case GET_OFFRES:
				return {
					offres: [...action.payload],
				};
		default:
			return state;
	}
};

export default offreReducer;
