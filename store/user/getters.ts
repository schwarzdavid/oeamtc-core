import {GetterTree} from "vuex";
import {IUserState} from "./types";
import {IRootState} from "../types";

const getters: GetterTree<IUserState, IRootState> = {
	isAuthenticated(state: IUserState): boolean {
		return !!state.username;
	}
};

export {getters};
