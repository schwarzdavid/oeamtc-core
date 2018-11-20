import {MutationTree} from "vuex";
import {IMissionState, IMissionPreview, IMission} from "./types";

function addMission(state: IMissionState, mission: IMissionPreview){
    state.missions.push(mission);
}

function clearMissions(state: IMissionState) {
    state.missions = [];
}

function assignMission(state: IMissionState, assignment: IMission){
    state.assignedMission = assignment;
}

function shiftMission(state: IMissionState){
    state.missions.shift();
}

function setMissionResult(state: IMissionState){
    state.assignedMission.finishAdded = true;
}

const mutations: MutationTree<IMissionState> = {
    addMission,
    clearMissions,
    assignMission,
    shiftMission,
    setMissionResult
};

export {mutations}