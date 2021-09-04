// import React from 'react';
import c from './MyPosts.module.css';
import Posts from './Post/Posts';

let key = 9;
const MyPosts = props => {
	let onAddPosts = () => {
		props.addPosts(key++)
	};
	let onPostChange = (e) => {
		props.updateNewPostText(e.target.value)
	};
	return (
		<div className={c.container}>
			<div className={c.addPost}>
				<div className={c.text}>New Post</div>

				<textarea
					onChange={onPostChange}
					value={props.profilePage.newPostText}
				></textarea>

				<button onClick={onAddPosts}>Add Post</button>
			</div>
			<div className={c.block}>
				{props.profilePage.posts.map(elem => (
					<Posts
						messege={elem.messege}
						id={elem.id}
						likesCount={elem.likesCount}
						img={elem.img}
					/>
				))}
			</div>
		</div>
	);
};

export default MyPosts;
