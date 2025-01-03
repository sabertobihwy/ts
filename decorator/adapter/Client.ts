import { Adapter } from "./Adapter"
import { Service } from "./Service"

export interface IClient {
    service(xml: string): void
}

class ClientTest implements IClient {
    private adapter: IClient

    constructor(adapter: IClient) {
        this.adapter = adapter
    }

    service(xml: string): void {
        console.log(`===This is client, invoke service, input is xml: ${xml} ===`)
        this.adapter.service(xml)
        console.log(`===invoke service end====`)
    }
}

const adapter = new Adapter(new Service())
const cli = new ClientTest(adapter)
cli.service('xml_input')