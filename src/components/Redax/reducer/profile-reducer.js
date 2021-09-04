const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
export const updateNewPostText = text => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text,
});
export const addPost = id => ({ type: ADD_POST, id: id });

let initialState = {
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
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				posts: [{messege: state.newPostText, id: action.id,likesCount: '20', img: 'https://image.flaticon.com/icons/png/512/5484/5484480.png'} ,...state.posts,],
				newPostText: '',
			};
		case UPDATE_NEW_POST_TEXT:
			return { ...state, newPostText: action.newText };
		default:
			return state;
	}
};

export default profileReducer;
