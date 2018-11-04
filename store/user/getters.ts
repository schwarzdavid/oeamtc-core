import {GetterTree} from "vuex";
import {IUser} from "./types";
import {IRootState} from "../types";

const getters: GetterTree<IUser, IRootState> = {
	isAuthenticated(state: IUser): boolean {
		return !!state.username;
	}
};

export {getters};
