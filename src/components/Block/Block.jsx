// import React from 'react';
import NavBar from './NavBar/NavBar';
import s from './Block.module.css';
import Content from './Contentt/Content';
import Dialogs from './Dialogs/Dialogs';
import { Route } from 'react-router-dom';

const Block = props => {
	return (
		<>
			<div className={s.block}>
				<NavBar />
				<div className={s.content_wraper}>
					<Route
						exact
						className={s.dialogs}
						path='/dialogs'
						render={() => <Dialogs state={props.state.messagesPage} dispatch={props.dispatch} />}
					/>
					<Route
						exact
						className={s.Content}
						path='/content'
						render={() => (
							<Content
								profilePage={props.state.profilePage}
								dispatch={props.dispatch}
							/>
						)}
					/>
				</div>
			</div>
		</>
	);
};

export default Block;
