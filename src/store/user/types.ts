enum UserState {
	READY,
	MISSION_RECEIVED
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

export {IUser, IUserRequest, UserState}
