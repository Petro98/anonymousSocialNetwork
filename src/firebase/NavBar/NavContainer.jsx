import React from 'react';
import { connect } from 'react-redux';
import {
	Login,
	setAuthUserData,
} from '../../components/Redax/reducer/auth-reducer';
import Nav from './Nav';

class NavContainer extends React.Component {
	componentDidMount() {
		this.props.Login();
	}
	render() {
		return <Nav {...this.props} />;
	}
}

const mapStateToProps = state => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserData, Login })(
	NavContainer
);
