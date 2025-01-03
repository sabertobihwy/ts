import { IClient } from "./Client";
import { Service } from "./Service";

export class Adapter implements IClient {
    private adapee: Service

    constructor(adapee: Service) {
        this.adapee = adapee
    }

    service(xml: string): void {
        const jsonInpu = this.convertToJson(xml)
        this.adapee.service(jsonInpu)
    }

    convertToJson(xml: string) {
        return `${xml} => JSON `
    }

}