export function SMSDecoratorFunc(SMSID: string): ClassDecorator {
    return function (constructor: Function) {
        // overwrite send 
        const send = constructor.prototype.send
        constructor.prototype.send = function (message: string) {
            send.apply(this, arguments)
            console.log(`smsid: ${SMSID}` + message)
        }
    }
}

export function QQDecoratorFunc(QQ: string): ClassDecorator {
    return function (constructor: Function) {
        // overwrite send 
        const send = constructor.prototype.send
        constructor.prototype.send = function (message: string) {
            send.apply(this, arguments)
            console.log(`QQ: ${QQ}` + message)
        }
    }
}