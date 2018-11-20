interface IAddress {
    street: string,
    code: string | number,
    city: string
}

interface IMissionPreview {
    id: number,
    address: IAddress,
    car: string
}

interface ICustomer {
    firstName: string,
    lastName: string,
    id: number | string,
    type: string,
    tel: number,
    address: IAddress,
    gender: string,
    birthday: string
}

interface IMission extends IMissionPreview {
    customer: ICustomer,
    defect: string,
    type: string,
    callTime: string,
    expectedTime: string,
    towAddress?: IAddress,
    finishAdded?: boolean
}

interface IMissionState {
    missions: IMissionPreview[],
    assignedMission: IMission
}

export {IMissionState, IMissionPreview, IMission}