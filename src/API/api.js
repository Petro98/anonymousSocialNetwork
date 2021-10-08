import axios from 'axios';

let instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': '09e54dba-6fc7-4016-a498-a6850f2078e7',
	},
});

export const usersAPI = {
	getUsers(pageSize, currentPage) {
		return instance
			.get(`users?count=${pageSize}&page=${currentPage}`)
			.then(response => response.data);
	},
	getUsers2(pageSize, currentPage) {
		return instance
			.get(`users?count=${pageSize}&page=${currentPage}`)
			.then(response => response.data);
	},
	unFollow(u) {
		return instance.delete(`follow/${u.id}`).then(response => response.data);
	},
	follow(u) {
		return instance.post(`follow/${u.id}`).then(response => response.data);
	},
};

export const authMy = {
	me() {
		return instance.get(`auth/me`);
	},
	login(email, password, rememberMe = false) {
		return instance.post(`auth/login`, { email, password, rememberMe });
	},
	logout() {
		return instance.delete(`auth/login`);
	},
};

export const profileAPI = {
	getUserProfile(userId) {
		return instance.get(`profile/${userId}`);
	},
	getStatus(userId) {
		return instance.get(`profile/status/${userId}`);
	},
	updateStatus(status) {
		return instance.put(`profile/status`, { status });
	},
};
