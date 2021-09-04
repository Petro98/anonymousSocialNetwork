import React from 'react';
import { connect } from 'react-redux';

import { updateNewMessage, sendMessage } from '../../Redax/reducer/dialogs-reducer';
import Dialogs from './Dialogs';


let mapStateToProps = state => {
	return {
		messagesPage: state.messagesPage,
	};
};
let mapDispatchToProps = dispatch => {
	return {
		sendMessage: _ => {
			dispatch(sendMessage());
		},
		updateNewMessage: e => {
			dispatch(updateNewMessage(e));
		},
	};
};

const SuperDialogsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Dialogs);

export default SuperDialogsContainer;
