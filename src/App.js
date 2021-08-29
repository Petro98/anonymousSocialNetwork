import React from 'react';
import Header from './components/Header/Header';
import Block from './components/Block/Block';
import './App.css';


function App(props) {
	return (
			<div className='app-wrapper'>
				<Header className='header' />
				<Block className='block' state={props.state} addPost={props.addPost} updateNewPostText={props.updateNewPostText} updateNewMessage={props.updateNewMessage}/>
			</div>
	);
}

export default App;
