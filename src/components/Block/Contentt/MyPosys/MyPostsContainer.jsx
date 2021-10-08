// import React from 'react';
import { connect } from 'react-redux';
import {
	addPost,
} from '../../../Redax/reducer/profile-reducer';
import MyPosts from './MyPosts';

let mapStateToProps = state => {
	return {
		profilePage: { ...state }.profilePage,
	};
};
let mapDispatchToProps = dispatch => {
	return {
		addPosts: (textPost, id) => {
			dispatch(addPost(textPost, id));
		},
	};
};

const SuperDialogsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(MyPosts);

export default SuperDialogsContainer;
