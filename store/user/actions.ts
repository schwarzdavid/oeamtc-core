import {ActionTree} from "vuex";
import {IUserRequest, IUserState} from "./types";
import {IDump, IRootState} from "../types";
import {api} from "../../plugins/rest/lib";
import {socket} from "../../plugins/socket/lib";

async function login({dispatch}, credentials: IUserRequest) {
    const dump = await api.post('/auth/login', credentials).then(res => res.data) as IDump;

    dispatch('registerSocket', dump.user.username);
    dispatch('dump', dump, {root: true});
}

function registerSocket({rootState}, username: string) {
    socket.emit('register', {username});
}

const actions: ActionTree<IUserState, IRootState> = {
    login,
    registerSocket
};

export {actions};
