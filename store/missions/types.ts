interface IMissionPreview {
    id: number,
    at: string,
    place: string,
    car: string
}

interface IMission extends IMissionPreview {

}

interface IMissionState {
    missions: IMissionPreview[],
    assignedMission: IMission
}

export {IMissionState, IMissionPreview, IMission}