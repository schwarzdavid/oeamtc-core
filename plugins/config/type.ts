interface IConfig {
    useDefaultMissionRoutes: boolean,
    routes: {
        ready: string,
        arriving: string,
        atWork: string,
        movingOn: string
    }
}

export {IConfig}