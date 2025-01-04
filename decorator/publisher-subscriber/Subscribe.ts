import { ISubscribe } from "./Interface";
import { IProxy } from "./Interface";

export class Subscriber implements ISubscribe {
    private proxy: IProxy
    private id: number

    constructor(proxy: IProxy, id: number) {
        this.proxy = proxy
        this.id = id
    }

    subscribe = (topic: string) => {
        console.log(`===subscriber, topic:${topic},this: ${this}`)
        this.proxy.subscribe(topic, this)
    }
    unsubscribe = (topic: string) => {
        this.proxy.unsubscribe(topic, this)
    }
    receive = (topic: string, message: string) => {
        console.log(`this is  ${this.id} subscriber, I got ${message} from topic：${topic}`)
    }
}