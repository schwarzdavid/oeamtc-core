import {MutationTree} from "vuex";
import {IUser} from "./types";

function setUser(state: IUser, user: IUser){
	state.username = user.username;
	state.servicecenter = user.servicecenter;
	state.state = user.state;
	state.radionumber = user.radionumber;
}

const mutations: MutationTree<IUser> = {
	setUser
};

export {mutations}
