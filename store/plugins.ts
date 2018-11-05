import {socket} from "../plugins/socket/lib";
import router from '../router';
import {config} from "../plugins/config/lib";
import {UserState} from "./user/types";

const routes = config.get('routes');

function isRoute(matchRoute) {
    return router.currentRoute.matched.find(route => route.name === matchRoute);
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

        if (mutation.type === 'user/setState') {
            let routes = config.get('routes');

            switch (state.user.state) {
                case UserState.ARRIVING:
                    if (!isRoute(routes.arriving)) {
                        router.replace({name: routes.arriving});
                    }
                    break;

                case UserState.AT_WORK:
                    if (!isRoute(routes.atWork)) {
                        router.replace({name: routes.atWork});
                    }
                    break;

                case UserState.MOVING_ON:
                    if (!isRoute(routes.movingOn)) {
                        router.replace({name: routes.movingOn});
                    }
                    break;

                default:
                    if (!isRoute(routes.waiting)) {
                        router.replace({name: routes.waiting});
                    }
                    break;
            }
        }
    });
}

export {socketPlugin as socket}