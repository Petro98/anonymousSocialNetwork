import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import {
	getProfileAPI,
	getStatus,
	updateStatus,
} from '../../Redax/reducer/profile-reducer';
import Content from './Content';

class ProfileContainer extends React.Component {
	componentDidMount() {
		const userId = this.props.match.params.userId || 19742;
		this.props.getProfileAPI(userId);
		this.props.getStatus(userId);
	}
	render() {
		return (
			<Content
				{...this.props}
				profile={this.props.profile}
				status={this.props.status}
				updateStatus={this.props.updateStatus}
			/>
		);
	}
}

let mapStateToProps = state => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
});

export default compose(
	connect(mapStateToProps, { getProfileAPI, getStatus, updateStatus }),
	withRouter
	// withAuthRedirect
)(ProfileContainer);
