import {Plugin} from "vuex";
import {socket} from "../plugins/socket/socket";

function socketPlugin(store) {
    socket.on('mission:added', payload => {
        console.log(payload);
        store.commit('missions/add', payload);
    });
}

export {socketPlugin as socket}