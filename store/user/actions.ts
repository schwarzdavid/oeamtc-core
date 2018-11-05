import {ActionTree} from "vuex";
import {IUser, IUserRequest, IUserState} from "./types";
import {IRootState} from "../types";
import {api} from "../../plugins/rest/lib";
import {socket} from "../../plugins/socket/lib";

async function login({commit, state}: {commit: any, state: IUserState}, credentials: IUserRequest) {
    const user = await api.post('/auth/login', credentials).then(res => res.data) as IUser;

    commit('setUser', user);

    if(socket.isOpen()){
        socket.emit('register', {
            username: state.username
        });
    }
}

const actions: ActionTree<IUserState, IRootState> = {
    login
};

export {actions};
