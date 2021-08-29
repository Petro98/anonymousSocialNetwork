// import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';

const DialogItem = props => {
	let path = `/dialogs/${props.id}`;
	return (
		<div className={s.block}>
			<div className={s.img}>
				<img src={props.img} width='44px' alt='' />
			</div>
			<div className={s.dialog_item}>
				<NavLink to={path}>{props.name}</NavLink>
			</div>
		</div>
	);
};

export default DialogItem;
