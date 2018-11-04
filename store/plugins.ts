import {socket} from "../plugins/socket/lib";
import router from '../router';
import {config} from "../plugins/config/lib";
import {UserState} from "./user/types";

function isRoute(matchRoute) {
    return router.currentRoute.matched.find(route => route.path === matchRoute);
}

function socketPlugin(store) {
    socket.on('register:success', payload => {
        store.commit('user/setSocketId', payload);
    });

    socket.on('mission:added', payload => {
        store.commit('missions/addMission', payload);
    });

    socket.on('mission:assigned', payload => {
        store.commit('missions/assignMission', payload);
    });

    socket.on('user:state', state => {
        store.commit('user/setState', state);
    });

    store.subscribe((mutation, state) => {
        if (mutation.type === 'user/setState') {
            const missionRoute = config.get('missionRoute');
            if (state.user.state === UserState.READY || state.user.state === UserState.MISSION_RECEIVED) {
                if (isRoute(missionRoute)) {
                    router.push('/');
                }
            } else {
                if (!isRoute(missionRoute)) {
                    router.push(missionRoute);
                }
            }
        }
    });
}

export {socketPlugin as socket}