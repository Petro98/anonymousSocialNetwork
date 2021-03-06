import { authMy, Me, NavLogin } from '../../../API/api';
const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.payload,
				isAuth: true,
			};
		default:
			return state;
	}
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
	type: SET_USER_DATA,
	payload: { userId, email, login, isAuth },
});

export const Login = () => {
	return dispatch => {
		authMy.me().then(response => {
			if (response.data.resultCode === 0) {
				const { id, email, login } = response.data?.data;
				dispatch(setAuthUserData(id, email, login, true));
			}
		});
	};
};

export const LoginAuth = (email, password, rememberMe) => {
	return dispatch => {
		authMy.login(email, password, rememberMe).then(response => {
			if (response.data.resultCode === 0) {
				dispatch(Login());
			}
		});
	};
};
export const LogoutAuth = () => {
	return dispatch => {
		authMy.logout.then(response => {
			if (response.data.resultCode === 0) {
				dispatch(Login(null, null, null, false));
			}
		});
	};
};

export default authReducer;
