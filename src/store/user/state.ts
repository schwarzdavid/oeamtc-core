import {IUser, UserState} from "./types";

const state: IUser = {
	username: null,
	servicecenter: {
		id: null,
		name: null
	},
	radionumber: null,
	state: UserState.READY
};

export {state}
