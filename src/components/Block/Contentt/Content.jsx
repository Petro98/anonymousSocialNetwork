// import React from 'react';
import classes from './Content.module.css';
import MyPostsContainer from './MyPosys/MyPostsContainer';
import ProfaileInfo from './PrefaileInfo/ProfaileInfo';

const Content = (props) => {

	return (
		<div className={classes.content_text}>
			<ProfaileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
			<MyPostsContainer/>
		</div>
	);
};

export default Content;
