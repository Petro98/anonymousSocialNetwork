// import React from 'react';
import classes from './Content.module.css';
import MyPostsContainer from './MyPosys/MyPostsContainer';
import ProfaileInfo from './PrefaileInfo/ProfaileInfo';

const Content = (props) => {
	return (
		<div className={classes.content_text}>
			<ProfaileInfo/>
			<MyPostsContainer/>
		</div>
	);
};

export default Content;
