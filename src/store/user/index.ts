import {Module} from "vuex";
import {IRootState} from "../types";
import {IUser} from "./types";
import {state} from "./state";
import {actions} from "./actions";
import {getters} from "./getters";
import {mutations} from "./mutations";

const vuexModule: Module<IUser, IRootState> = {
	state,
	actions,
	mutations,
	getters,
	namespaced: true
};

export {vuexModule as module};
