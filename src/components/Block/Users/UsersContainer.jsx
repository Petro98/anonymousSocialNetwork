import React from 'react';
import { connect } from 'react-redux';
import {
	followAC,
	setUsersAC,
	unFollowAC,
} from '../../Redax/reducer/users-reducer';
import Users from './Users';

let mapStateToProps = state => {
	return {
		users: state.usersPage.users,
	};
};
let mapDispatchToProps = dispatch => {
	return {
		follow: usersId => {
			dispatch(followAC(usersId));
		},
		unFollow: usersId => {
			dispatch(unFollowAC(usersId));
		},
		setUsers: users => {
			dispatch(setUsersAC(users));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
