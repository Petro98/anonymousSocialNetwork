import React from 'react';
import { connect } from 'react-redux';
import {
	follow,
	setCurrentPage,
	setIsFetching,
	setUsers,
	setUsersTotalCount,
	unFollow,
} from '../../Redax/reducer/users-reducer';
import Users from './Users';
import axios from 'axios';

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
		if (this.props.users.length === 0) {
			this.props.setIsFetching(true);
			axios
				.get(
					`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
				)
				.then(response => {
					this.props.setUsers(response.data.items);
					this.props.setUsersTotalCount(response.data.totalCount);
					this.props.setIsFetching(false);
				})
				.catch(() => {
					this.props.setUsers(this.users);
				});
		} else {
			this.props.setUsers(this.props.users);
		}
	}
	onChangePage(p) {
		this.props.setIsFetching(true);
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${p}`
			)
			.then(response => {
				this.props.setUsers(response.data.items);
				this.props.setUsersTotalCount(response.data.totalCount);
				this.props.setIsFetching(false);
			})
			.catch(() => {
				this.props.setUsers(this.users);
			});
		this.props.setCurrentPage(p);
	}

	render() {
		return (
			<Users
				props={this.props}
				getUsers={this.getUsers}
				onChangePage={this.onChangePage}
				totalIsFetching={this.totalIsFetching}
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
	};
};
// let mapDispatchToProps = dispatch => {
// 	return {
// 		follow: usersId => {
// 			dispatch(followAC(usersId));
// 		},
// 		unFollow: usersId => {
// 			dispatch(unFollowAC(usersId));
// 		},
// 		setUsers: users => {
// 			dispatch(setUsersAC(users));
// 		},
// 		setCurrentPage: pageNumber => {
// 			dispatch(setCurrentPageAC(pageNumber));
// 		},
// 		totalUsersCount: totalCount => {
// 			dispatch(setUsersTotalCountAC(totalCount));
// 		},
// 		totalIsFetching: IsFetching => {
// 			dispatch(setIsFetchingAC(IsFetching));
// 		},
// 	};
// };

export default connect(mapStateToProps, {
	follow,
	unFollow,
	setUsers,
	setCurrentPage,
	setUsersTotalCount,
	setIsFetching,
})(UsersAPIComponent);
