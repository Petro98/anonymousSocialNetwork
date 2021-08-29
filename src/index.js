import React from 'react';
import './index.css';
import store from './components/Redax/state'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import {addPost,updateNewPostText ,updateNewMessage ,subscribe} from './components/Redax/state';




let renderEntireTree = (state) => {
	ReactDOM.render(
	<BrowserRouter>
		<App state={state} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} updateNewMessage={store.updateNewMessage.bind(store)}/>
	</BrowserRouter>, document.getElementById('root')
)
}
renderEntireTree(store.getState())

store.subscribe(renderEntireTree)
