import {IConfig} from "./type";
import {UserState} from "../../store/user/types";

let initialConfig: IConfig = {
    useDefaultMissionRoutes: true,
    routes: {
        waiting: 'dashboard',
        arriving: 'arriving',
        atWork: 'at-work',
        movingOn: 'moving-on'
    }
};

function get(key: string): any {
    return key.split('.').reduce((obj, index) => obj[index], initialConfig);
}

function inject(newConfig: {[key in keyof IConfig]?: any}): object {
    initialConfig = {...initialConfig, ...newConfig};
    return initialConfig;
}

const config = {
    get,
    inject
};

export {
    config
}