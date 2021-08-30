import React from 'react';
import c from './MyPosts.module.css';
import Posts from './Post/Posts';

const MyPosts = props => {
	let newPostElement = React.createRef();
	let addPosts = () => {
		props.dispatch({ type :'ADD-POST'});
	};
	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.dispatch({ type :'UPDATE-NEW-POST-TEXT',newText : text});
	};
	return (
		<div className={c.container}>
			<div className={c.addPost}>
			<div className={c.text}>New Post</div>

				<textarea
					onChange={onPostChange}
					ref={newPostElement}
					value={props.profilePage.newPostText}
				></textarea>

				<button onClick={addPosts}>Add Post</button>
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
