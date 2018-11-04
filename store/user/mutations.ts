import {MutationTree} from "vuex";
import {IUser, IUserState, UserState} from "./types";

function setUser(state: IUserState, user: IUser) {
    state.username = user.username;
    state.servicecenter = user.servicecenter;
    state.radionumber = user.radionumber;

    localStorage.setItem('user', JSON.stringify({
        username: state.username,
        servicecenter: state.servicecenter,
        radionumber: state.radionumber
    }));
}

function setState(state: IUserState, userState: UserState) {
    state.state = userState;
}

function setSocketId(state: IUserState, id: string) {
    state.socketId = id;
}

const mutations: MutationTree<IUser> = {
    setUser,
    setState,
    setSocketId
};

export {mutations}
