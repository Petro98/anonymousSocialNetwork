// import React from 'react';
import c from './Posts.module.css';

const Posts = props => {
	return (
		<div className={c.block}>
			<div className={c.content}>
				<div>
					<img src={props.img} />
				</div>
				<div className={c.item}>{props.messege}</div>
			</div>
			<div className={c.like}>
				<div className={c.img}>
					<img
						src='https://image.flaticon.com/icons/png/512/889/889221.png'
						width='27px'
					/>
					<p>{props.likesCount}</p>
				</div>
			</div>
		</div>
	);
};

export default Posts;
