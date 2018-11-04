import Vue from 'vue';
import Vuex, {ModuleTree} from "vuex";
import {IRootState} from "./types";
import {module as userModule} from './user';
import {module as missionModule} from './missions';
import {socket} from "./plugins";
import {actions} from "./actions";

Vue.use(Vuex);

const VERSION = '1.0.0';
const state: IRootState = {
	version: VERSION
};
const modules: ModuleTree<IRootState> = {
	user: userModule,
	missions: missionModule
};

export default new Vuex.Store<IRootState>({
	state,
	actions,
	modules,
	plugins: [socket]
});
