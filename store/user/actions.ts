import {ActionTree} from "vuex";
import {IUser, IUserRequest, UserState} from "./types";
import {IRootState} from "../types";
import {api} from "../../plugins/rest";

async function login({commit}, credentials: IUserRequest){
	const response = await api.post('/auth/login', credentials).then(res => res.data);

	commit('setUser', {
        username: response.username,
        servicecenter: response.servicecenter,
        state: response.state,
        radionumber: response.radionumber
	});
}

const actions: ActionTree<IUser, IRootState> = {
	login
};

export {actions};
