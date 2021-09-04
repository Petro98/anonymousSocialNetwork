import React from 'react';
import Header from './components/Header/Header';
import Block from './components/Block/Block';
import './App.css';


function App(props) {
	
	return (
			<div className='app-wrapper'>
				<Header className='header' />
				<Block className='block' store={props}/>
			</div>
	);
}

export default App;
