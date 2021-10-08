import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

import {
	sendMessage,
} from '../../Redax/reducer/dialogs-reducer';
import Dialogs from './Dialogs';

let mapStateToProps = state => {
	return {
		messagesPage: state.messagesPage,
	};
};
let mapDispatchToProps = dispatch => {
	return {
		sendMessage: newMessage => {
			dispatch(sendMessage(newMessage));
		},
	};
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs);
