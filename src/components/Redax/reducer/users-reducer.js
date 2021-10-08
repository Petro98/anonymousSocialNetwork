import { usersAPI } from '../../../API/api';

const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';

export const followSuccess = userId => ({ type: FOLLOW, userId });
export const unFollowSuccess = userId => ({ type: UN_FOLLOW, userId });

export const setUsers = users => ({ type: SET_USERS, users });

export const setCurrentPage = currentPage => ({
	type: SET_CURRENT_PAGE,
	currentPage,
});
export const setUsersTotalCount = count => ({
	type: SET_USERS_TOTAL_COUNT,
	count,
});

export const setIsFetching = IsFetching => ({
	type: TOGGLE_IS_FETCHING,
	IsFetching,
});

export const setIsFetchingInProgress = (isProgress, userId) => ({
	type: FOLLOWING_IN_PROGRESS,
	isProgress,
	userId,
});

let initialState = {
	users: [],
	pageSize: 6,
	totalUserCount: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: true };
					}
					return u;
				}),
			};
		case UN_FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: false };
					}
					return u;
				}),
			};
		case SET_USERS:
			return { ...state, users: action.users };
		case SET_CURRENT_PAGE:
			return { ...state, currentPage: action.currentPage };
		case SET_USERS_TOTAL_COUNT:
			return { ...state, totalUserCount: action.count };
		case TOGGLE_IS_FETCHING:
			return { ...state, isFetching: action.IsFetching };
		case FOLLOWING_IN_PROGRESS:
			return {
				...state,
				followingInProgress: action.isProgress
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id !== action.userId),
			};
		default:
			return state;
	}
};

export const getUsers = (pageSize, currentPage, users) => {
	return dispatch => {
		dispatch(setIsFetching(true));
		usersAPI
			.getUsers(pageSize, currentPage)
			.then(response => {
				dispatch(setUsers(response.items));
				dispatch(setUsersTotalCount(response.totalCount));
				dispatch(setIsFetching(false));
			})
			.catch(() => {
				dispatch(setUsers(users));
			});
	};
};

export const follow = (u, id) => {
	return dispatch => {
		dispatch(setIsFetchingInProgress(true, id));
		usersAPI.follow(u).then(data => {
			if (data.resultCode === 0) {
				dispatch(followSuccess(id));
			}
			dispatch(setIsFetchingInProgress(false, id));
		});
	};
};

export const unFollow = (u, id) => {
	return dispatch => {
		dispatch(setIsFetchingInProgress(true, id));
		usersAPI.unFollow(u).then(data => {
			dispatch(unFollowSuccess(id));
			if (data.resultCode === 0) {
			}
			dispatch(setIsFetchingInProgress(false, id));
		});
	};
};
export default usersReducer;
