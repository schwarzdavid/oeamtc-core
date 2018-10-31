import {ActionTree} from "vuex";
import {IUser, IUserRequest} from "./types";
import {IRootState} from "../types";
import {api} from "../../plugins/rest";

async function login({commit}, credentials: IUserRequest){
	const response = await api.post('/driver/login', credentials).then(res => res.data) as IUser;

	commit('setUser', response);
}

const actions: ActionTree<IUser, IRootState> = {
	login
};

export {actions};
