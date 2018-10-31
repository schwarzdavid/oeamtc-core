import axios from 'axios';
import store from '../../store';

const api =  axios.create({
	baseURL: 'https://' + location.hostname + ':8080/api'
});

api.interceptors.request.use(config => {
	const id = store.state.user.username;
	if(id){
		config.headers.Authorization = id;
	}
	return config;
});

export {api}
