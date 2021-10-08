import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import authReducer from './reducer/auth-reducer';
import dialogsReducer from './reducer/dialogs-reducer';
import profileReducer from './reducer/profile-reducer';
import usersReducer from './reducer/users-reducer';
import { reducer as formReducer } from 'redux-form'
let reducers = combineReducers({
	profilePage: profileReducer,
	messagesPage: dialogsReducer,
	usersPage: usersReducer,
	auth: authReducer,
	form: formReducer,
	// sidebar: sidebarReducer,
});

const store = createStore(
	reducers,
	compose(
		applyMiddleware(thunkMiddleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);
window.store = store

export default store;
