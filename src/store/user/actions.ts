import {ActionTree} from "vuex";
import {IUser, IUserRequest, UserState} from "./types";
import {IRootState} from "../types";
import {api} from "../../plugins/rest";

async function login({commit}, credentials: IUserRequest){
	const response = await api.post('/auth/login', credentials).then(res => res.data);

	commit('setUser', {
        username: response._username,
        servicecenter: response._servicecenter,
        state: response._state,
        radionumber: response._radionumber
	});
}

const actions: ActionTree<IUser, IRootState> = {
	login
};

export {actions};
