
let store = {
	_state: {
		profilePage: {
			posts: [
				{
					messege: 'привіт я хочу їсти',
					id: '1',
					likesCount: '20',
					img: 'https://image.flaticon.com/icons/png/512/5489/5489130.png',
				},
				{
					messege: 'привіт давай дружити',
					id: '2',
					likesCount: '2',
					img: 'https://image.flaticon.com/icons/png/512/5484/5484242.png',
				},
				{
					messege: 'давай',
					id: '3',
					likesCount: '14',
					img: 'https://image.flaticon.com/icons/png/512/5484/5484243.png',
				},
				{
					messege:
						'Anonymous is a decentralized international activist/hacktivist collective/movement widely known for its various cyber attacks against several governments, government institutions and government agencies, corporations, and the Church of Scientology.',
					id: '4',
					likesCount: '100',
					img: 'https://image.flaticon.com/icons/png/512/5484/5484536.png',
				},
			],
			newPostText: 'it-kamasutra',
		},
		messagesPage: {
			dialogs: [
				{
					name: 'Петро',
					id: '1',
					img: 'https://image.flaticon.com/icons/png/512/5484/5484536.png',
				},
				{
					name: 'Володя',
					id: '2',
					img: 'https://image.flaticon.com/icons/png/512/5489/5489130.png',
				},
				{
					name: 'Юра',
					id: '3',
					img: 'https://image.flaticon.com/icons/png/512/5484/5484242.png',
				},
				{
					name: 'Саня',
					id: '4',
					img: 'https://image.flaticon.com/icons/png/512/5484/5484243.png',
				},
				{
					name: 'Марта',
					id: '5',
					img: 'https://image.flaticon.com/icons/png/512/5484/5484352.png',
				},
				{
					name: 'Настя',
					id: '6',
					img: 'https://image.flaticon.com/icons/png/512/5484/5484480.png',
				},
			],

			messege: [
				{ text: 'Привіт як ваші справи', id: '1' },
				{ text: 'Все дуже погано', id: '2' },
				{ text: 'Круто', id: '3' },
				{ text: 'Як ваші успіхи , чому ви не використали свіч', id: '4' },
			],
			messageText: 'Hello',
		},
	},
	getState() {
		return this._state;
	},
	_callSubscribe() {
		alert('fefe');
	},
	addPost() {
		let newPost = {
			messege: this._state.profilePage.newPostText,
			id: '5',
			likesCount: '20',
			img: 'https://image.flaticon.com/icons/png/512/5484/5484480.png',
		};
		this._state.profilePage.posts.push(newPost);
		this._callSubscribe(this._state);
	},
	updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText;
		this._callSubscribe(this._state);
	},
	updateNewMessage(newMessage) {
		this._state.messagesPage.messageText = newMessage;
		this._callSubscribe(this._state);
	},
	subscribe(observer) {
		this._callSubscribe = observer;
	},
};

export default store;
