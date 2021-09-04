// import React from 'react';
import classes from './Header.module.css';
const Header = () => {
	return (
		<div className={classes.header}>
			<div className={classes.block}>
				<p>Anonymously</p>
				<img
					className={classes.logoImg}
					style={{ width: '60px' , height:'60px'}}
					src='https://image.flaticon.com/icons/png/512/187/187892.png'
					alt='img'
				/>
			</div>
		</div>
	);
};

export default Header;
