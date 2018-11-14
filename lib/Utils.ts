import {Route, RouteConfig, RouteRecord} from "vue-router";
import EventEmitter from './EventEmitter';
import {UserState} from "../store/user/types";

interface IEvents {
    'mission-routes': RouteConfig[],
    'trigger-call': string
}

const events = new EventEmitter<IEvents>();

class Utils {
    static checkStatePrecondition(route: Route, targetState: UserState){
        return route.matched.every((route: RouteRecord) => {
            let states = route.meta.requireState;

            if (!states) {
                return true;
            }

            if (!Array.isArray(states)) {
                states = [states];
            }

            return states.findIndex(state => state === targetState) >= 0;
        });
    }

    static get on(){
        return events.on;
    }

    static get off(){
        return events.off;
    }

    static get emit(){
        return events.emit;
    }
}

export default Utils;
export {events};