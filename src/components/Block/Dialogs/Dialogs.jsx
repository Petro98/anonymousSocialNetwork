import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Messege from './Messege/Messege';

let id = 5;

function AddMessageForm(props) {
	return (
		<form onSubmit={props.handleSubmit}>
			<div className={s.addMesseger}>
				<Field
					validate={[required, maxLengthCreator]}
					component={Textarea}
					name={'newMessage'}
					placeholder={'New Message'}
				></Field>
				<button>Add Post</button>
			</div>
		</form>
	);
}
const MessageReduxForm = reduxForm({ form: 'Message' })(AddMessageForm);

const Dialogs = props => {
	let addNewMessage = value => {
		props.sendMessage(value.newMessage);
	};
	return (
		<div className={s.block}>
			<div className={s.content_dialogs}>
				<div className={[s.dialogs_item, s.item].join(' ')}>
					{props.messagesPage.dialogs.map((d_, key) => (
						<DialogItem name={d_.name} id={d_.id} img={d_.img} key={key} />
					))}
				</div>
				<div className={[s.messeges, s.item].join(' ')}>
					<div>
						{props.messagesPage.messege.map((m, key) => (
							<Messege text={m.text} id={m.id} key={key} />
						))}
					</div>
					<MessageReduxForm onSubmit={addNewMessage}></MessageReduxForm>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
