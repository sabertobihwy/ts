import { Notifier } from "./INotify";
import { SMSDecoratorFunc, QQDecoratorFunc } from "./DecoratorFun";

@QQDecoratorFunc("QQ")
@SMSDecoratorFunc("ccc")
class SMSNotifier extends Notifier {
    constructor(email: string[]) {
        super(email)
    }
}


const ss = new SMSNotifier(['111@123', '222@333'])
ss.send("message")

