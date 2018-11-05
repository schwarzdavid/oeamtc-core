interface IConfig {
    useDefaultMissionRoutes: boolean,
    routes: {
        waiting: string,
        arriving: string,
        atWork: string,
        movingOn: string
    }
}

export {IConfig}