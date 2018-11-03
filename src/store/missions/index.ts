import {Module} from "vuex";
import {IRootState} from "../types";
import {IMission} from "./types";
import {state} from "./state";
import {actions} from "./actions";
import {mutations} from "./mutations";
import {getters} from "./getters";

const vuexModule: Module<IMission[], IRootState> = {
    state,
    actions,
    mutations,
    getters,
    namespaced: true
};

export {vuexModule as module};