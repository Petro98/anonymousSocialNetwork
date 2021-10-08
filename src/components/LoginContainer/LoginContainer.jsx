import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validators';
import { Input } from '../common/FormsControls/FormsControls';

function LoginForm(props) {
	return (
		<form onSubmit={props.handleSubmit}>
			<h1
				style={{
					fontSize: '50px',
					fontWeight: '900',
				}}
			>
				Login
			</h1>
			<div>
				<Field
					component={Input}
					placeholder={'Login'}
					name='login'
					validate={[required]}
				/>
			</div>
			<div>
				<Field
					component={Input}
					placeholder={'Password'}
					name='password'
					validate={[required]}
				/>
			</div>
			<div>
				<Field component={'input'} type='checkbox' name='checkbox' />
			</div>
			<div>
				<button type='submit'>Login</button>
			</div>
		</form>
	);
}
const LoginReduxForm = reduxForm({ form: 'Login' })(LoginForm);

const LoginContainer = () => {
	const onSubmit = formData => {
		console.log(formData);
	};
	return (
		<div style={{ marginTop: '20px', fontSize: '19px' }}>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	);
};

export default LoginContainer;
