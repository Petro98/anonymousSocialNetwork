import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
	_state: {
	// 	profilePage: {
	// 		posts: [
	// 			{
	// 				messege: 'привіт я хочу їсти',
	// 				id: '1',
	// 				likesCount: '20',
	// 				img: 'https://image.flaticon.com/icons/png/512/5489/5489130.png',
	// 			},
	// 			{
	// 				messege: 'привіт давай дружити',
	// 				id: '2',
	// 				likesCount: '2',
	// 				img: 'https://image.flaticon.com/icons/png/512/5484/5484242.png',
	// 			},
	// 			{
	// 				messege: 'давай',
	// 				id: '3',
	// 				likesCount: '14',
	// 				img: 'https://image.flaticon.com/icons/png/512/5484/5484243.png',
	// 			},
	// 			{
	// 				messege:
	// 					'Anonymous is a decentralized international activist/hacktivist collective/movement widely known for its various cyber attacks against several governments, government institutions and government agencies, corporations, and the Church of Scientology.',
	// 				id: '4',
	// 				likesCount: '100',
	// 				img: 'https://image.flaticon.com/icons/png/512/5484/5484536.png',
	// 			},
	// 		],
	// 		newPostText: 'it-kamasutra',
	// 	},
	// 	messagesPage: {
	// 		dialogs: [
	// 			{
	// 				name: 'Петро',
	// 				id: '1',
	// 				img: 'https://image.flaticon.com/icons/png/512/5484/5484536.png',
	// 			},
	// 			{
	// 				name: 'Володя',
	// 				id: '2',
	// 				img: 'https://image.flaticon.com/icons/png/512/5489/5489130.png',
	// 			},
	// 			{
	// 				name: 'Юра',
	// 				id: '3',
	// 				img: 'https://image.flaticon.com/icons/png/512/5484/5484242.png',
	// 			},
	// 			{
	// 				name: 'Саня',
	// 				id: '4',
	// 				img: 'https://image.flaticon.com/icons/png/512/5484/5484243.png',
	// 			},
	// 			{
	// 				name: 'Марта',
	// 				id: '5',
	// 				img: 'https://image.flaticon.com/icons/png/512/5484/5484352.png',
	// 			},
	// 			{
	// 				name: 'Настя',
	// 				id: '6',
	// 				img: 'https://image.flaticon.com/icons/png/512/5484/5484480.png',
	// 			},
	// 		],

	// 		messege: [
	// 			{ text: 'Привіт як ваші справи', id: '1' },
	// 			{ text: 'Все дуже погано', id: '2' },
	// 			{ text: 'Круто', id: '3' },
	// 			{ text: 'Як ваші успіхи , чому ви не використали свіч', id: '4' },
	// 		],
	// 		messageText: 'Hello',
	// 	},
	// 	users: [
	// 		{
	// 			id: '1',
	// 			followed: false,
	// 			status: 'привіт в мене сьогодні чудовий день',
	// 			fullName: 'Іван',
	// 			location: { city: 'Івано-Франківськ', country: 'Україна' },
	// 			img: 'https://image.flaticon.com/icons/png/512/5489/5489130.png',
	// 		},
	// 		{
	// 			id: '2',
	// 			followed: false,
	// 			status: 'спорт сила ,алкоголь могила!!!',
	// 			fullName: 'Микола',
	// 			location: { city: 'Закарпання', country: 'Україна' },
	// 			img: 'https://image.flaticon.com/icons/png/512/5484/5484242.png',
	// 		},
	// 		{
	// 			id: '3',
	// 			followed: true,
	// 			status: 'живи!!! , а працюй у вільний час',
	// 			fullName: 'Йосип',
	// 			location: { city: 'Київ', country: 'Україна' },
	// 			img: 'https://image.flaticon.com/icons/png/512/5484/5484243.png',
	// 		},
	// 		{
	// 			id: '4',
	// 			followed: false,
	// 			status: 'наш день це як політ сліпого горобця!',
	// 			fullName: 'Юра',
	// 			location: { city: 'Львів', country: 'Україна' },
	// 			img: 'https://image.flaticon.com/icons/png/512/5484/5484536.png',
	// 		},
	// 		{
	// 			id: '5',
	// 			followed: true,
	// 			status: 'В мене великі цицьки',
	// 			fullName: 'Мирося',
	// 			location: { city: 'Київ', country: 'Україна' },
	// 			img: 'https://image.flaticon.com/icons/png/512/5484/5484243.png',
	// 		},
	// 		{
	// 			id: '6',
	// 			followed: false,
	// 			status: 'я люблю життя',
	// 			fullName: 'Галя',
	// 			location: { city: 'Харків', country: 'Україна' },
	// 			img: 'https://image.flaticon.com/icons/png/512/5484/5484536.png',
	// 		},
	// 	],
	// 	sidebar: {},
	// },
	// getState() {
	// 	return this._state;
	// },
	// // _callSubscribe() {
	// // 	alert('fefe');
	// // },
	// subscribe(observer) {
	// 	this._callSubscribe = observer;
	// },

	// dispatch(action) {
	// 	this._state.profilePage = profileReducer(this._state.profilePage, action);
	// 	this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
	// 	// this._state.users = usersReducer(this._state.users, action);

	// 	this._state.sidebar = sidebarReducer(this._state.sidebar, action);
	// 	this._callSubscribe(this._state);
	},
};

export default store;
