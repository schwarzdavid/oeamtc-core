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
    name: string,
    type: string,
    tel: number,
    address: IAddress
}

interface IMission extends IMissionPreview {
    customer: ICustomer,
    defect: string,
    type: string
}

interface IMissionState {
    missions: IMissionPreview[],
    assignedMission: IMission
}

export {IMissionState, IMissionPreview, IMission}