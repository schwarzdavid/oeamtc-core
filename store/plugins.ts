import {socket} from "../plugins/socket/lib";
import router from '../router';
import {config} from "../plugins/config/lib";
import {UserState} from "./user/types";
import Utils from "../lib/Utils";

const routes = config.get('routes');

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

    store.subscribe((mutation) => {
        if (mutation.type === 'user/setState') {
            if (!Utils.checkStatePrecondition(router.currentRoute, store.state.user.state)) {
                return router.push({name: 'home'});
            }
        }
    });
}

export {socketPlugin as socket}