const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

export const sendMessage = newMessage => ({ type: SEND_MESSAGE, newMessage });

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			return {
				...state,
				messege: [...state.messege, { id: 6, text: action.newMessage }],
			};
		default:
			return state;
	}
};

export default dialogsReducer;
