const eventNames = ['API_UNAUTH', 'API_FORBIDDEN'] as const
type EventName = (typeof eventNames)[number]

class EventEmitter {
    // private eventMap :{[key:eventName]: Set<Function>}[] = eventNames.map((key)=>{ key: new Set()})
    private eventMap: Record<EventName, Set<Function>> = {
        'API_UNAUTH': new Set(),
        'API_FORBIDDEN': new Set()
    }

    on(name: EventName, func: Function) {
        this.eventMap[name].add(func)
    }

    emit(name: EventName, ...args: any[]) {
        this.eventMap[name].forEach(fn => fn(...args))
    }
}

export default new EventEmitter()
