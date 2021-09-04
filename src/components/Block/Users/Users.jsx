import React from 'react';
import classes from './Users.module.css';
const Users = props => {
	const styleText = {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
	};
	if (props.users.length === 0) {
		props.setUsers([
		{
			id: '1',
			followed: false,
			status: 'привіт в мене сьогодні чудовий день',
			fullName: 'Іван',
			location: { city: 'Івано-Франківськ', country: 'Україна' },
			img: 'https://image.flaticon.com/icons/png/512/5489/5489130.png',
		},
		{
			id: '2',
			followed: false,
			status: 'спорт сила ,алкоголь могила!!!',
			fullName: 'Микола',
			location: { city: 'Закарпання', country: 'Україна' },
			img: 'https://image.flaticon.com/icons/png/512/5484/5484242.png',
		},
		{
			id: '3',
			followed: true,
			status: 'живи!!! , а працюй у вільний час',
			fullName: 'Йосип',
			location: { city: 'Київ', country: 'Україна' },
			img: 'https://image.flaticon.com/icons/png/512/5484/5484243.png',
		},
		{
			id: '4',
			followed: false,
			status: 'наш день це як політ сліпого горобця!',
			fullName: 'Юра',
			location: { city: 'Львів', country: 'Україна' },
			img: 'https://image.flaticon.com/icons/png/512/5484/5484536.png',
		},
		{
			id: '5',
			followed: true,
			status: 'В мене великі цицьки',
			fullName: 'Мирося',
			location: { city: 'Київ', country: 'Україна' },
			img: 'https://image.flaticon.com/icons/png/512/5484/5484243.png',
		},
		{
			id: '6',
			followed: false,
			status: 'я люблю життя',
			fullName: 'Галя',
			location: { city: 'Харків', country: 'Україна' },
			img: 'https://image.flaticon.com/icons/png/512/5484/5484536.png',
		},
	],)
	}
	
	return (
		<div className={classes.block}>
			<h1 style={{ fontSize: '25px', textAlign: 'center' }}>Users</h1>
			{props.users.map(u => (
				<div className={classes.container}>
					<div style={styleText}>
						<img
							style={{ width: '40px', margin: '0 auto' }}
							src={u.img}
							alt='#'
						/>
						<div>
							{u.followed ? (
								<button
									className={classes.buttonSab}
									onClick={() => {
										props.unFollow(u.id);
									}}
								>
									{u.followed ? 'Follow' : 'Un follow'}
								</button>
							) : (
								<button
									className={classes.buttonSab}
									onClick={() => {
										props.follow(u.id);
									}}
								>
									{u.followed ? 'Follow' : 'Un follow'}
								</button>
							)}
						</div>
					</div>
					<div className={classes.info}>
						<div style={styleText}>
							<h2 style={{ fontSize: '20px' }}>{u.fullName}</h2>
							<h3>{u.status}</h3>
						</div>
						<div style={{ ...styleText, justifyContent: 'flex-end' }}>
							<h3>{u.location.city}</h3>
							<h3 style={{ marginTop: '5px' }}>{u.location.country}</h3>
						</div>
					</div>
				</div>
			))}
			<button
				style={{
					padding: '10px 25px',
					backgroundColor: '#212529',
					color: '#48bfe3',
					borderRadius: '5px',
					position: 'absolute',
					bottom: '5%',
					left: '50%',
					transform: 'translate(-50%, 0)',
				}}
			>
				Show more
			</button>
		</div>
	);
};

export default Users;
