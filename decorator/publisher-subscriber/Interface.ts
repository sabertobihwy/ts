export interface IPublish {
    publish: (topic: string, message: string) => void
}

export interface ISubscribe {
    subscribe: (topic: string) => void
    unsubscribe: (topic: string) => void
    receive: (topic: string, message: string) => void
}

export interface IProxy {
    subscribe: (topic: string, subscriber: ISubscribe) => void
    unsubscribe: (topic: string, subscriber: ISubscribe) => void
    publish: (topic: string, message: string) => void
}