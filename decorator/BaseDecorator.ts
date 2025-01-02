import { Notifier } from "./INotify"

export class BaseDecorator {
    private wrapped: Notifier
    constructor(wrapped: Notifier) {
        this.wrapped = wrapped
    }
    send(message: string) {
        this.wrapped.send(message)
    }

}

export class SMSDecorator extends BaseDecorator {
    private SMSId: string
    constructor(wrapped: Notifier, SMSId: string) {
        super(wrapped)
        this.SMSId = SMSId
    }
    send(message: string) {
        super.send(message)
        console.log(`SMSID: ${this.SMSId}, message is ${message}`)
    }

}