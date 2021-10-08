import React, { createContext } from 'react';
import './index.css';
import store from './components/Redax/react-store';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
	apiKey: 'AIzaSyDS1iuF1R2yfZkCMGGaRO4-RN_mmXqoPEM',
	authDomain: 'anonymous-da573.firebaseapp.com',
	projectId: 'anonymous-da573',
	storageBucket: 'anonymous-da573.appspot.com',
	messagingSenderId: '757598923011',
	appId: '1:757598923011:web:6290accb79bd0825aaa136',
	measurementId: 'G-S91QGC7LPR',
});

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

let renderEntireTree = _ => {
	ReactDOM.render(
		<BrowserRouter>
			<Context.Provider
				value={{
					firebase,
					auth,
					firestore,
				}}
			>
				<Provider store={store}>
					<App />
				</Provider>
				,
			</Context.Provider>
		</BrowserRouter>,
		document.getElementById('root')
	);
};
renderEntireTree();

store.subscribe(_ => {
	renderEntireTree();
});
