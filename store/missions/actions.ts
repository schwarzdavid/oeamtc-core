import {ActionTree} from "vuex";
import {IMissionPreview, IMissionState} from "./types";
import {IRootState} from "../types";
import {api} from "../../plugins/rest/lib";
import {UserState} from "../user/types";

async function reload({commit}) {
    const missions = await api.get('/missions').then(response => response.data) as IMissionPreview[];

    commit('clearMissions');

    missions.forEach(mission => {
        commit('addMission', mission);
    });

    return true;
}

async function assignMission({commit}) {
    const assignedMission = await api.post('/missions/assign').then(response => response.data);

    commit('assignMission', assignedMission);

    return true;
}

function arrived({commit}) {
    api.post('/missions/arrived').then(response => response.data);

    commit('user/setState', UserState.AT_WORK, {root: true});
}

const actions: ActionTree<IMissionState, IRootState> = {
    reload,
    assignMission,
    arrived
};

export {actions}