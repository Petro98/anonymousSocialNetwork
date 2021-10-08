import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { publicRoutes } from './routes';
import { LOGIN_ROUTE } from './utils/consts';
import Block from '../components/Block/Block';
import {useAuthState} from 'react-firebase-hooks/auth'
import { Context } from '..';

const AppRouter = props => {
	const { auth } = useContext(Context);
	const [user] = useAuthState(auth)
	return user ? (
		<Switch>
			<Block className='block' store={props} />
		</Switch>
	) : (
		<Switch>
			{publicRoutes.map(({ path, Component }) => (
				<Route path={path} component={Component} exact={true} />
			))}
			<Redirect to={LOGIN_ROUTE} />
		</Switch>
	);
};

export default AppRouter;
