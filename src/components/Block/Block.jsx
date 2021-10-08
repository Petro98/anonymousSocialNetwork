import React from 'react';
import NavBar from './NavBar/NavBar';
import s from './Block.module.css';
import { Route } from 'react-router-dom';
import DialogsContainer from './Dialogs/DialogsContainer';
import UsersContainer from './Users/UsersContainer';
import ProfileContainer from './Contentt/ProfileContainer';
import LoginContainer from '../LoginContainer/LoginContainer';

const Block = _ => {
	return (
		<>
			<div className={s.block} >
				<NavBar />
				<div className={s.content_wraper}>
					<Route
						exact
						className={s.dialogs}
						path='/dialogs'
						render={() => <DialogsContainer />}
					/>
					<Route
						exact
						className={s.Content}
						path='/profile/:userId?'
						render={() => <ProfileContainer/>}
					/>
					<Route
						exact
						className={s.Content}
						path='/users'
						render={() => <UsersContainer />}
					/>
					<Route
						exact
						className={s.Content}
						path='/login'
						render={() => <LoginContainer />}
					/>
				</div>
			</div>
		</>
	);
};

export default Block;
