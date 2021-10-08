import { AppBar, Grid, Toolbar, Button } from '@material-ui/core';
import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import { Context } from '../..';
import { LOGIN_ROUTE } from '../utils/consts';
const Nav = props => {
	const { auth } = useContext(Context);
	const [user] = useAuthState(auth);
	return (
		<AppBar
			position='sticky'
			color='transparent'
			style={{
				width: '100%',
				height: '5vh',
				zIndex: '110',
				backgroundColor: '#212529',
			}}
		>
			<Toolbar variant={'dense'}>
				<Grid container justifyContent={'flex-end'}>
					{props.isAuth ? (
						<Button style={{ color: 'white' }}>{props.login}</Button>
					) : (
						<Button>
							<NavLink to={'/login'} style={{ color: 'white' }}>
								Login
							</NavLink>
						</Button>
					)}

					{user ? (
						<Button
							color='secondary'
							onClick={() => auth.signOut()}
							variant={'outlined'}
						>
							Вихід
						</Button>
					) : (
						<NavLink to={LOGIN_ROUTE}>
							<Button color='inherit' variant={'outlined'}>
								Вхід
							</Button>
						</NavLink>
					)}
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

export default Nav;
