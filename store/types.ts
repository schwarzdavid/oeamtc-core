import {IUser} from "./user/types";

interface IRootState {
	version: string,
	user?: IUser
}

export {IRootState}
