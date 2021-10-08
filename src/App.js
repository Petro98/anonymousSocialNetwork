import React, { useContext } from 'react';
import './App.css';

import AppRouter from './firebase/AppRouter';
import { Context } from '.';
import { useAuthState } from 'react-firebase-hooks/auth';
import LoaderOne from './firebase/louder/Loader';
import NavContainer from './firebase/NavBar/NavContainer';

function App(props) {
	const { auth } = useContext(Context);
	const [user, loading, error] = useAuthState(auth);
	if (loading) {
		return (
			<>
				<LoaderOne />;
			</>
		);
	}
	return (
		<div className='app-wrapper' style={{ height: window.innerHeight - 50 }}>
			<NavContainer/>
			<AppRouter store={props} />
		</div>
	);
}

export default App;
