import {socket} from "../plugins/socket/lib";
import router from '../router';
import {config} from "../plugins/config/lib";
import {UserState} from "./user/types";

const routes = config.get('routes');

function isRoute(matchRoute) {
    return router.currentRoute.matched.find(route => route.path === matchRoute);
}

function socketPlugin(store) {
    socket.on('register:success', payload => {
        store.commit('user/setSocketId', payload.connId);
        store.dispatch('dump', payload.dump);
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

        /*if (mutation.type === 'user/setState') {
            switch (state.user.state) {
                case UserState.READY:
                case UserState.MISSION_RECEIVED:
                    if (isRoute(missionRoute)) {
                        router.replace('/');
                    }
                    break;

                default:
                    console.log(missionRoute);
                    if (!isRoute(missionRoute)) {
                        router.replace(missionRoute);
                    }
                    break;
            }
        } else if (mutation.type === 'user/setUser') {
            /*if (socket.isOpen()) {
                this.$emitSocket('register', {
                    username: state.user.username
                });
            }*
        }*/
    });
}

export {socketPlugin as socket}