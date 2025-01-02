export interface INotify {
    send(message: string): void
}

// email
export class Notifier implements INotify {
    private email: string[] = []

    constructor(email: string[]) {
        this.email = email
    }

    send(message: string): void {
        console.log(`${message}send to email  list:` + this.email)
    }

}