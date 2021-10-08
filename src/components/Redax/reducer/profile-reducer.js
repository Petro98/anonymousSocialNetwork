import { profileAPI } from '../../../API/api';

const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';

export const addPost = (newPostText ,id) => ({
	type: ADD_POST,
	newPostText,
	id,
});
const setUsersProfile = profile => ({
	type: SET_USERS_PROFILE,
	profile,
});

export const setStatus = status => ({ type: SET_STATUS, status });

let initialState = {
	posts: [
		{
			messege: 'привіт я хочу їсти',
			id: '1',
			likesCount: '20',
			img: 'https://image.flaticon.com/icons/png/512/5489/5489130.png',
		},
		{
			messege: 'привіт давай дружити',
			id: '2',
			likesCount: '2',
			img: 'https://image.flaticon.com/icons/png/512/5484/5484242.png',
		},
		{
			messege: 'давай',
			id: '3',
			likesCount: '14',
			img: 'https://image.flaticon.com/icons/png/512/5484/5484243.png',
		},
		// {
		// 	messege:
		// 		'Anonymous is a decentralized international activist/hacktivist collective/movement widely known for its various cyber attacks against several governments, government institutions and government agencies, corporations, and the Church of Scientology.',
		// 	id: '4',
		// 	likesCount: '100',
		// 	img: 'https://image.flaticon.com/icons/png/512/5484/5484536.png',
		// },
	],
	profile: null,
	status: '',
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				posts: [
					{
						messege: action.newPostText,
						id: action.id,
						likesCount: '20',
						img: 'https://image.flaticon.com/icons/png/512/5484/5484480.png',
					},
					...state.posts,
				],
			};
		case SET_USERS_PROFILE:
			return { ...state, profile: action.profile };
		case SET_STATUS:
			return { ...state, status: action.status };
		default:
			return state;
	}
};

export const getProfileAPI = userId => {
	return dispatch => {
		profileAPI.getUserProfile(userId).then(profile => {
			dispatch(setUsersProfile(profile?.data));
		});
	};
};
export const getStatus = userId => {
	return dispatch => {
		profileAPI.getStatus(userId).then(status => {
			dispatch(setStatus(status?.data));
		});
	};
};
export const updateStatus = status => {
	return dispatch => {
		profileAPI.updateStatus(status).then(response => {
			if (response.data.resultCode === 0) dispatch(setStatus(status));
		});
	};
};

export default profileReducer;
