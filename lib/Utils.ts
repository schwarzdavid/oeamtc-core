import {Route, RouteRecord} from "vue-router";
import store from "../store";

class Utils {
    static checkStatePrecondition(route: Route){
        return route.matched.every((route: RouteRecord) => {
            let states = route.meta.requireState;

            if (!states) {
                return true;
            }

            if (!Array.isArray(states)) {
                states = [states];
            }

            return states.findIndex(state => state === store.state.user.state) >= 0;
        });
    }
}

export default Utils;