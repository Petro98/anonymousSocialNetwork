const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';

export const followAC = userId => ({ type: FOLLOW, userId });
export const unFollowAC = userId => ({ type: UN_FOLLOW, userId });

export const setUsersAC = users => ({ type: SET_USERS, users });

let initialState = {
	users: [
		{
			id: '1',
			followed: false,
			status: 'привіт в мене сьогодні чудовий день',
			fullName: 'Іван',
			location: { city: 'Івано-Франківськ', country: 'Україна' },
			img: 'https://image.flaticon.com/icons/png/512/5489/5489130.png',
		},
		{
			id: '2',
			followed: false,
			status: 'спорт сила ,алкоголь могила!!!',
			fullName: 'Микола',
			location: { city: 'Закарпання', country: 'Україна' },
			img: 'https://image.flaticon.com/icons/png/512/5484/5484242.png',
		},
		{
			id: '3',
			followed: true,
			status: 'живи!!! , а працюй у вільний час',
			fullName: 'Йосип',
			location: { city: 'Київ', country: 'Україна' },
			img: 'https://image.flaticon.com/icons/png/512/5484/5484243.png',
		},
		{
			id: '4',
			followed: false,
			status: 'наш день це як політ сліпого горобця!',
			fullName: 'Юра',
			location: { city: 'Львів', country: 'Україна' },
			img: 'https://image.flaticon.com/icons/png/512/5484/5484536.png',
		},
		{
			id: '5',
			followed: true,
			status: 'В мене великі цицьки',
			fullName: 'Мирося',
			location: { city: 'Київ', country: 'Україна' },
			img: 'https://image.flaticon.com/icons/png/512/5484/5484243.png',
		},
		{
			id: '6',
			followed: false,
			status: 'я люблю життя',
			fullName: 'Галя',
			location: { city: 'Харків', country: 'Україна' },
			img: 'https://image.flaticon.com/icons/png/512/5484/5484536.png',
		},
	],
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						
						return { ...u, followed: true };
					}
					return u;
				}),
			};
		case UN_FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: false };
					}
					return u;
				}),
			};
		case SET_USERS:
			return { ...state, users: [...state.users, ...action.users] };
		default:
			return state;
	}
};

export default usersReducer;
