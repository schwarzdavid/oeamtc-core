import {IUser, IUserState} from "./user/types";
import {IMission, IMissionPreview, IMissionState} from "./missions/types";

interface IRootState {
	version: string,
	user?: IUserState,
	missions?: IMissionState
}

interface IDump {
	user: IUser,
	missions: IMissionPreview[],
	assignedMission: IMission
}

export {IRootState, IDump}
