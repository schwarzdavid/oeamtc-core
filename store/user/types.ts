enum UserState {
	READY = 1,
	MISSION_RECEIVED,
	ARRIVING,
	AT_WORK,
	MOVING_ON
}

interface IServiceCenter {
	id: number,
	name: string
}

interface IUser {
	username: string,
	servicecenter: IServiceCenter,
	state: UserState,
	radionumber: number
}

interface IUserRequest {
	username: string,
	servicecenter: IServiceCenter,
    radionumber: number
	time: string,
	reason?: string
}

interface IUserState extends IUser {
	socketId: string
}

export {IUser, IUserRequest, UserState, IUserState}
