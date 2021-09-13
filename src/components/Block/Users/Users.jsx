import React from 'react';
import 'antd/dist/antd.css';
import classes from './Users.module.css';
import userPhoto from '../../../img/question.png';
import { Pagination } from 'antd';
import Loading from '../../UI/Loading';
import { NavLink } from 'react-router-dom';

const Users = props => {
	let styleText = {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
	};
	let pageCount = Math.ceil(props.props.totalUserCount / props.props.pageSize);
	let pages = [];
	for (let i = 1; i <= pageCount; i++) {
		pages.push(i);
	}
	return (
		<div className={classes.block}>
			<h1 style={{ fontSize: '25px', textAlign: 'center' }}>Users</h1>

			{props.props.users.map((u) => (
				<div className={classes.container} key={u.id}>
					<div style={styleText}>
						<NavLink
							to={`/content/${u.id}`}
							style={{
								margin: '0 auto',
							}}
						>
							<img
								style={{
									width: '50px',
									margin: '0 auto',
									borderRadius: '10px',
								}}
								src={u.photos.large ? u.photos.large : userPhoto}
								alt='нема'
							/>
						</NavLink>
						<div>
							{u.followed ? (
								<button
									className={classes.buttonSab}
									onClick={() => {
										props.props.unFollow(u.id);
									}}
								>
									{u.followed ? 'Follow' : 'Un follow'}
								</button>
							) : (
								<button
									className={classes.buttonSab}
									onClick={() => {
										props.props.follow(u.id);
									}}
								>
									{u.followed ? 'Follow' : 'Un follow'}
								</button>
							)}
						</div>
					</div>
					<div className={classes.info}>
						<div style={styleText}>
							<h2 style={{ fontSize: '20px' }}>{u.name}</h2>
							<h3>{u.status ? u.status : 'статуса немає'}</h3>
						</div>
						<div style={styleText}>
							<h3>
								{
									<img
										src={
											u.photos.small
												? u.photos.small
												: 'https://cdn-icons-png.flaticon.com/512/1040/1040262.png'
										}
										alt=''
										width='30px'
										style={{ borderRadius: '50%' }}
									/>
								}
							</h3>
							<h3>{'u.location.city'}</h3>
						</div>
					</div>
				</div>
			))}
			<Pagination
				showQuickJumper
				current={props.props.currentPage}
				onChange={p => props.onChangePage(p)}
				total={pageCount + '0'}
				style={{ margin: '0 auto', marginTop: '25px' }}
			/>
			<div style={{ position: 'absolute', margin: '25px' }}>
				{props.props.isFetching ? <Loading /> : null}
			</div>
			{/* <button
				style={{
					padding: '10px 25px',
					backgroundColor: '#212529',
					color: '#48bfe3',
					borderRadius: '5px',
					position: 'absolute',
					bottom: '2%',
					left: '50%',
					transform: 'translate(-50%, 0)',
				}}
				onClick={props.getUsers.bind(this)}
			>
				Show more
			</button> */}
		</div>
	);
};

export default Users;
