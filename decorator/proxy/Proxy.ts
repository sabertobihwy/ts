import { IService, RealService } from "./IService";

class Proxy implements IService {
    private realService: RealService

    constructor(realService: RealService) {
        this.realService = realService
    }
    check() {
        console.log('do some validation')
    }

    operation(): void {
        this.check()
        this.realService.operation()
    }
}

const p = new Proxy(new RealService())
p.operation()