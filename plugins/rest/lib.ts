import axios from 'axios';
import store from '../../store';

const api =  axios.create({
	baseURL: 'https://192.168.43.240:8080'
});

api.interceptors.request.use(config => {
	const id = store.state.user.username;
	if(id){
		config.headers['Authorization'] = id;
	}
	const socketId = store.state.user.socketId;
	if(socketId){
		config.headers['If-Match'] = socketId;
	}
	return config;
});

export {api}
