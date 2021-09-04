// import React from 'react';
import { connect } from 'react-redux';
import { updateNewPostText, addPost } from '../../../Redax/reducer/profile-reducer';
import MyPosts from './MyPosts';

let mapStateToProps = state => {
	return {
		profilePage: {...state}.profilePage,
	};
};
let mapDispatchToProps = dispatch => {
	return {
		addPosts: _ => {
			dispatch(addPost());
		},
		updateNewPostText: e => {
			dispatch(updateNewPostText(e));
		},
	};
};

const SuperDialogsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(MyPosts);

export default SuperDialogsContainer;
