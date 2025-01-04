import { IProxy, ISubscribe } from "./Interface";

export class Proxy implements IProxy {
    public map: Map<string, ISubscribe[]> = new Map()

    subscribe = (topic: string, subscriber: ISubscribe) => {
        console.log(`===Proxy, topic:${topic},subscriber: ${subscriber}`)

        const subs: ISubscribe[] = this.map.get(topic) || []
        if (subs.indexOf(subscriber) === -1) {
            subs.push(subscriber)
        }
        this.map.set(topic, subs) // because of []
        console.log(`===Proxy, subs:${subs}`)
    }
    unsubscribe = (topic: string, subscriber: ISubscribe) => {
        const subs: ISubscribe[] = this.map.get(topic) || []
        const index = subs.indexOf(subscriber)
        if (index !== -1) {
            subs.splice(index, 1)
        }
        this.map.set(topic, subs)
    }
    publish = (topic: string, message: string) => {
        const subs: ISubscribe[] = this.map.get(topic) || []
        for (const sub of subs) {
            sub.receive(topic, message)
        }
    }

}