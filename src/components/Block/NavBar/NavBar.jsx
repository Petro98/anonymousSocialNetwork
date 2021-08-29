// import React from 'react';
import { NavLink } from 'react-router-dom';
import Friends from './Frends/Friends';
import classes from './NavBar.module.css';

const NavBar = () => {
	return (
		<div className={classes.navBar}>
			<div className={classes.item}>
				<NavLink activeClassName={classes.active} to='/content'>
					Profile
				</NavLink>
			</div>
			<div className={classes.item}>
				<NavLink activeClassName={classes.active} to='/dialogs'>
					Messages
				</NavLink>
			</div>
			<div className={classes.item}>News</div>
			<div className={classes.item}>Music</div>
			<Friends/>
		</div>
	);
};

export default NavBar;
