import {ActionTree} from "vuex";
import {IRootState, IDump} from "./types";

function dump({commit}, dump: IDump){
    commit('user/setUser', dump.user);

    commit('missions/clearMissions');
    dump.missions.forEach(mission => {
        commit('missions/addMission', mission);
    });

    commit('missions/assignMission', dump.assignedMission);
    commit('user/setState', dump.user.state);
}

const actions: ActionTree<IRootState, IRootState> = {
    dump
};

export {actions};
