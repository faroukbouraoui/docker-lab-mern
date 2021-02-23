import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import loadingReducer from './reducers/loadingReducers';
import messageReducer from './reducers/messageReducers';
import categoryReducer from './reducers/categoryReducers';
import serviceReducer from './reducers/serviceReducers';
import offreReducer from './reducers/offreReducers';
import blogReducer from './reducers/blogReducers';
import templateReducers from './reducers/templateReducers';
import leadReducer from './reducers/leadReducer';
const reducer = combineReducers({
	loading: loadingReducer,
	messages: messageReducer,
	categories: categoryReducer,
	services: serviceReducer,
	offres: offreReducer,
	blogs: blogReducer,
	templates: templateReducers,
	leads: leadReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
