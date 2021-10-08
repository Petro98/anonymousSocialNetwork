import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { maxLengthCreator, required } from '../../../../utils/validators';
import { Textarea } from '../../../common/FormsControls/FormsControls';
import c from './MyPosts.module.css';
import Posts from './Post/Posts';

const MyPostForm = props => {
	// let maxLength10 = maxLengthCreator(10);
	return (
		<div className={c.addPost}>
			<div className={c.text}>New Post</div>
			<form
				onSubmit={props.handleSubmit}
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
				}}
			>
				<Field
					validate={[required, maxLengthCreator]}
					component={Textarea}
					placeholder={'text'}
					name='post'
					style={{ width: '100%' }}
				/>
				<button>Add Post</button>
			</form>
		</div>
	);
};
const PostReduxForm = reduxForm({ form: 'Posts' })(MyPostForm);

let key = 5;
const MyPosts = props => {
	let onSubmit = textPost => {
		props.addPosts(textPost.post, key++);
	};
	return (
		<div className={c.container}>
			<PostReduxForm onSubmit={onSubmit} />
			<div className={c.block}>
				{props.profilePage.posts.map(elem => (
					<Posts
						key={elem.id}
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
