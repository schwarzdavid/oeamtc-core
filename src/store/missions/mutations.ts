import {MutationTree} from "vuex";
import {IMission} from "./types";

function addMission(state: IMission[], mission: IMission){
    state.push(mission);
}

function clearMissions(state: IMission[]) {
    state.length = 0;
}

const mutations: MutationTree<IMission[]> = {
    addMission,
    clearMissions
};

export {mutations}