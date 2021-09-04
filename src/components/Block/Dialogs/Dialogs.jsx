import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Messege from './Messege/Messege';

let id = 5;
const Dialogs = props => {
	let addMessage = () => {
		props.sendMessage(id++)
	};
	let onMessage = (e) => {
		props.updateNewMessage(e.target.value)
	};
	return (
		<div className={s.block}>
			<div className={s.content_dialogs}>
				<div className={[s.dialogs_item, s.item].join(' ')}>
					{props.messagesPage.dialogs.map(d_ => (
						<DialogItem name={d_.name} id={d_.id} img={d_.img} />
					))}
				</div>
				<div className={[s.messeges, s.item].join(' ')}>
					<div>
						{props.messagesPage.messege.map(m => (
							<Messege text={m.text} id={m.id} />
						))}
					</div>
					<div className={s.addMesseger}>
						<textarea
							onChange={onMessage}
							value={props.messagesPage.messageText}
						></textarea>
						<button onClick={addMessage}>Add Post</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
