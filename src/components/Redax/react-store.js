import { combineReducers, createStore } from 'redux';
import dialogsReducer from './reducer/dialogs-reducer';
import profileReducer from './reducer/profile-reducer';
import usersReducer from './reducer/users-reducer';
let reducers = combineReducers({
	profilePage: profileReducer,
	messagesPage: dialogsReducer,
	usersPage: usersReducer
	// sidebar: sidebarReducer,
	
});

const store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
