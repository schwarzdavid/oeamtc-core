import {ActionTree} from "vuex";
import {IUserRequest, IUserState} from "./types";
import {IDump, IRootState} from "../types";
import {api} from "../../plugins/rest/lib";
import {socket} from "../../plugins/socket/lib";

async function login({dispatch}, credentials: IUserRequest) {
    const dump = await api.post('/auth/login', credentials).then(res => res.data) as IDump;

    dispatch('dump', dump, {root: true});
}

const actions: ActionTree<IUserState, IRootState> = {
    login
};

export {actions};
