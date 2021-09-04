import React from 'react';
import NavBar from './NavBar/NavBar';
import s from './Block.module.css';
import Content from './Contentt/Content';
import { Route } from 'react-router-dom';
import DialogsContainer from './Dialogs/DialogsContainer';
import UsersContainer from './Users/UsersContainer';

const Block = _ => {
	return (
		<>
			<div className={s.block}>
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
						path='/content'
						render={() => <Content />}
					/>
					<Route
						exact
						className={s.Content}
						path='/users'
						render={() => <UsersContainer />}
					/>
				</div>
			</div>
		</>
	);
};

export default Block;
