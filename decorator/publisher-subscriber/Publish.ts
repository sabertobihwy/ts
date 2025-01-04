import { IProxy, IPublish } from "./Interface";

export class Publish implements IPublish {
    private proxy: IProxy

    constructor(proxy: IProxy) {
        this.proxy = proxy
    }

    publish = (topic: string, message: string) => {
        this.proxy.publish(topic, message)
    }

}