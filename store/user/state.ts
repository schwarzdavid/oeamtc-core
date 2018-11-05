import {IUserState, UserState} from "./types";

let savedUser = {} as any;
let savedServiceCenter = {} as any;

try {
    savedUser = JSON.parse(localStorage.getItem('user'));
    savedServiceCenter = savedUser.servicecenter;
} catch (e){
	console.log('Cannot get saved ser');
}

const state: IUserState = {
	username: savedUser.username || null,
	servicecenter: {
		id: savedServiceCenter.id || null,
		name: savedServiceCenter.name || null
	},
	radionumber: savedUser.radionumber,
	state: UserState.READY,
	socketId: null
};

export {state}
