import {IUserState, UserState} from "./types";

const state: IUserState = {
	username: null,
	servicecenter: {
		id: null,
		name: null
	},
	radionumber: null,
	state: UserState.READY,
	socketId: null
};

export {state}
