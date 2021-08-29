import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Messege from './Messege/Messege';

const Dialogs = props => {
	let NewMessageEl = React.createRef();
	let addMessage = () => {
		let text = NewMessageEl.current.value;
		alert(text)
	};
   let onMessage = () =>{
      let text = NewMessageEl.current.value;
		props.updateNewMessage(text)
	}
	return (
		<div className={s.block}>
			<div className={s.content_dialogs}>
				<div className={[s.dialogs_item, s.item].join(' ')}>
					{props.state.dialogs.map(d_ => (
						<DialogItem name={d_.name} id={d_.id} img={d_.img} />
					))}
				</div>
				<div className={[s.messeges, s.item].join(' ')}>
					<div>
						{props.state.messege.map(m => (
							<Messege text={m.text} id={m.id} />
						))}
					</div>
					<div className={s.addMesseger}>
						<textarea onChange={onMessage} ref={NewMessageEl} value={props.state.messageText}></textarea>
						<button onClick={addMessage}>Add Post</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
