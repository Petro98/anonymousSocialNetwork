import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {
	follow,
	getUsers,
	setCurrentPage,
	setIsFetchingInProgress,
	setUsers,
	unFollow,
} from '../../Redax/reducer/users-reducer';
import Users from './Users';

class UsersAPIComponent extends React.Component {
	users = [
		{
			id: '1',
			followed: false,
			status: 'привіт в мене сьогодні чудовий день',
			name: 'Іван',
			location: { city: 'Івано-Франківськ', country: 'Україна' },
			photos: {
				large: 'https://image.flaticon.com/icons/png/512/5489/5489130.png',
			},
		},
		{
			id: '2',
			followed: false,
			status: 'спорт сила ,алкоголь могила!!!',
			name: 'Микола',
			location: { city: 'Закарпання', country: 'Україна' },
			photos: {
				large: 'https://image.flaticon.com/icons/png/512/5489/5489130.png',
			},
		},
		{
			id: '3',
			followed: true,
			status: 'живи!!! , а працюй у вільний час',
			name: 'Йосип',
			location: { city: 'Київ', country: 'Україна' },
			photos: {
				large: 'https://image.flaticon.com/icons/png/512/5489/5489130.png',
			},
		},
		{
			id: '4',
			followed: false,
			status: 'наш день це як політ сліпого горобця!',
			name: 'Юра',
			location: { city: 'Львів', country: 'Україна' },
			photos: {
				large: 'https://image.flaticon.com/icons/png/512/5489/5489130.png',
			},
		},
		{
			id: '5',
			followed: true,
			status: 'В мене великі цицьки',
			name: 'Мирося',
			location: { city: 'Київ', country: 'Україна' },
			photos: {
				large: 'https://image.flaticon.com/icons/png/512/5489/5489130.png',
			},
		},
		{
			id: '6',
			followed: false,
			status: 'я люблю життя',
			name: 'Галя',
			location: { city: 'Харків', country: 'Україна' },
			photos: {
				large: 'https://image.flaticon.com/icons/png/512/5489/5489130.png',
			},
		},
	];
	componentDidMount() {
		this.props.getUsers(
			this.props.pageSize,
			this.props.currentPage,
			this.users
		);
	}
	onChangePage(p) {
		this.props.setCurrentPage(p);
		this.props.getUsers(this.props.pageSize, p, this.users);
	}

	render() {
		return (
			<Users
				props={this.props}
				onChangePage={this.onChangePage}
				setIsFetchingInProgress={this.props.setIsFetchingInProgress}
				followingInProgress={this.props.followingInProgress}
				follow={this.props.follow}
				unFollow={this.props.unFollow}
			/>
		);
	}
}

let mapStateToProps = state => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUserCount: state.usersPage.totalUserCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress,
	};
};

export default compose(
	connect(mapStateToProps, {
		setUsers,
		setCurrentPage,
		setIsFetchingInProgress,
		getUsers,
		follow,
		unFollow,
	}),
	withAuthRedirect
)(UsersAPIComponent);
