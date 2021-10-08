import { Box, Container, Grid, Button } from '@material-ui/core';
import React, { useContext } from 'react';
import { Context } from '../../index';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const Login = () => {
	const { auth } = useContext(Context);

	const login = async () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		const { user } = await auth.signInWithPopup(provider);
	};
	return (
		<Container style={{ backgroundColor: '#fff', borderRadius: '30px' }}>
			<Grid
				container
				style={{ height: '94vh', borderRadius: '15px' }}
				alignItems={'center'}
				justifyContent={'center'}
			>
				<Grid
					style={{ width: '400px', background: 'lightgray' }}
					container
					alignItems={'center'}
					direction={'column'}
				>
					<Box p={7}>
						<Button onClick={login} variant={'outlined'}>
							Увійти за допомогою Google
						</Button>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Login;
