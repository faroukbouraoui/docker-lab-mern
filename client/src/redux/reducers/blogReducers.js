import { CREATE_BLOG, GET_BLOGS } from '../constants/blogConstants';

const INITIAL_STATE = {
	blogs: [],
};

const blogReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CREATE_BLOG:
			return {
				blogs: [...state.blogs, action.payload],
			};
		case GET_BLOGS:
			return {
				blogs: [...action.payload],
			};
		default:
			return state;
	}
};

export default blogReducer;