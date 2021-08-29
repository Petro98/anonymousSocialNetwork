// import React from 'react';
import s from './Messege.module.css';

const Messege = props => {
	return( 
		<div className={s.block}>
			<div className={s.messege}>
			{props.text}
			</div>
		</div>
	)
};

export default Messege;
