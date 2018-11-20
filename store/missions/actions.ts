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
    commit('shiftMission');

    return true;
}

async function arrived({commit}) {
    await api.post('/missions/arrived').then(response => response.data);

    commit('user/setState', UserState.AT_WORK, {root: true});
}

async function movingOn({commit}) {
    await api.post('/missions/moving-on').then(response => response.data);

    commit('user/setState', UserState.MOVING_ON, {root: true});
}

async function finish({commit}) {
    const data = await api.post('/missions/finish').then(response => response.data);

    commit('user/setState', data.userState, {root: true});
    commit('assignMission', null);
}

const actions: ActionTree<IMissionState, IRootState> = {
    reload,
    assignMission,
    arrived,
    movingOn,
    finish
};

export {actions}