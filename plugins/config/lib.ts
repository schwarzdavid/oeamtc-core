let initialConfig = {};

function get(key: string): any {
    return key.split('.').reduce((obj,index) => obj[index], initialConfig);
}

function inject(newConfig): object {
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