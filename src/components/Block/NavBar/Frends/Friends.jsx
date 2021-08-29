// import React from 'react';
import classes from './Friends.module.css';

const Friends = () => {
	return (
		<div className={classes.block}>
			<div className={classes.text}>Friends</div>
			<div className={classes.photos}>
				<div className={classes.photo}>
					<div className={classes.name}>Петро</div>
					<img src='https://image.flaticon.com/icons/png/512/889/889221.png'/>
				</div>
				<div className={classes.photo}>
					<div className={classes.name}>Володя</div>
					<img src='https://image.flaticon.com/icons/png/512/5489/5489130.png'/>
				</div>
				<div className={classes.photo}>
					<div className={classes.name}>Олександер</div>
					<img src='https://image.flaticon.com/icons/png/512/5484/5484242.png'/>
				</div>
				<div className={classes.photo}>
					<div className={classes.name}>Віталій</div>
					<img src='https://image.flaticon.com/icons/png/512/5484/5484536.png'/>
				</div>
				<div className={classes.photo}>
					<div className={classes.name}>Юра</div>
				</div>
			</div>
		</div>
	);
};

export default Friends;
