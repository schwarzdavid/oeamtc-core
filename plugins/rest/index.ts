import {api} from "./lib";

const Api = {
    install(Vue){
        Vue.prototype.$api = api;
    }
};

export {Api}