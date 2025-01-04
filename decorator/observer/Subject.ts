import { EmailObserver, IObserver, LogObserver } from "./IObserver";

export class Subject {
    private observers: IObserver[] = []

    private _state = 0

    set state(state: number) {
        this._state = state
        this.notifySubscribers(state + '')
    }

    get state() {
        return this._state
    }

    constructor(observers: IObserver[]) {
        this.observers = observers
    }

    addSubscribers(observer: IObserver) {
        this.observers.push(observer)
    }

    removeSubscribers(observer: IObserver) {
        const index = this.observers.indexOf(observer)
        if (index !== -1) {
            this.observers.splice(index, 1)
        }
    }

    notifySubscribers(message: string) {
        for (const element of this.observers) {
            element.update(message)
        }
    }

}

const log = new LogObserver()
const email = new EmailObserver()
const sub = new Subject([log, email])
sub.state = 1
sub.state = 2