import {config} from "./lib";

const Config = {
    install(Vue){
        Vue.prototype.$config = config.get;
    }
};

export {Config}