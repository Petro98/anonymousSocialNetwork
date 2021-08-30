// import React from 'react';
import classes from './Content.module.css';
import MyPosts from './MyPosys/MyPosts';
import ProfaileInfo from './PrefaileInfo/ProfaileInfo';

const Content = (props) => {
	return (
		<div className={classes.content_text}>
			<ProfaileInfo/>
			<MyPosts profilePage={props.profilePage} dispatch={props.dispatch}/>
		</div>
	);
};

export default Content;
