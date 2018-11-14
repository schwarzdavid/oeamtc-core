import {cloneDeep} from 'lodash';

type EventHandler<Payload> = (event?: Event<Payload>) => any;

type EventStore<Events> = {
    [key in keyof Events]?: IStoredHandler<Events[key]>[]
}

interface IStoredHandler<Payload> {
    callback: EventHandler<Payload>,
    context: object,
    weight: number
}

class Event<Payload> {
    public data: any;
    public readonly originalData: Payload;
    public readonly type: string;

    private _canceled = false;
    private _defaultPrevented;

    get canceled(){
        return this._canceled;
    }

    get defaultPrevented(){
        return this._defaultPrevented;
    }

    constructor(payload: Payload, type: string){
        this.data = payload;
        this.originalData = cloneDeep(payload);
        this.type = type;
    }

    public preventDefault(){
        this._defaultPrevented = true;
    }

    public cancel(){
        this._canceled = true;
    }
}

class EventEmitter<Events> {
    private _callbacks: EventStore<Events> = {};

    public on<Key extends keyof Events>(key: Key, callback: EventHandler<Events[Key]>, context: object = undefined, weight: number = 1000) {
        if(!this._has(key)){
            this._callbacks[key] = [];
        }

        if(this._callbackExists(key, callback, context)){
            console.warn(`This callback for event ${key} has been set already`);
        }

        this._callbacks[key].push({
            callback,
            context,
            weight
        });
    }

    public off<Key extends keyof Events>(key: Key, callback: EventHandler<Events[Key]>) {
        if(!this._has(key)){
            console.warn(`Event ${key} does not exist`);
            return;
        }

        const cbIndex = this._callbacks[key].findIndex(el => el.callback === callback);

        if(cbIndex >= 0){
            this._callbacks[key].splice(cbIndex, 1);
        }
    }

    public emit<Key extends keyof Events>(key: Key, payload: Events[Key]): Events[Key] {
        if(!this._has(key)){
            return payload;
        }

        const sortedCb = this._callbacks[key].sort((a,b) => a.weight - b.weight);
        const event = new Event(payload, key.toString());

        for(const i in sortedCb){
            if(i === Number.POSITIVE_INFINITY && event.defaultPrevented){
                continue;
            }

            const returnedValue = sortedCb[i].callback.call(sortedCb[i].context, event);

            if(typeof returnedValue !== 'undefined'){
                event.data = returnedValue;
            }

            if(event.canceled){
                break;
            }
        }

        return event.data;
    }

    private _has(key: keyof Events): boolean {
        return this._callbacks.hasOwnProperty(key);
    }

    private _callbackExists<Key extends keyof Events>(key: Key, callback: EventHandler<Events[Key]>, context: object): boolean {
        if(!this._has(key)){
            return false;
        }

        return this._callbacks[key].findIndex(el => el.callback === callback && el.context === context) >= 0;
    }
}

export default EventEmitter;