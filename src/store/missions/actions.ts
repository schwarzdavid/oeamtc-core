import {ActionTree} from "vuex";
import {IMission} from "./types";
import {IRootState} from "../types";
import {api} from "../../plugins/rest";

async function reload({commit}){
    const missions = await api.get('/missions').then(response => response.data) as IMission[];

    commit('clearMissions');

    missions.forEach(mission => {
       commit('addMission', mission);
    });

    return true;
}

const actions: ActionTree<IMission[], IRootState> = {
    reload
};

export {actions}