export interface IObserver {
    update(message: string): void
}

export class LogObserver implements IObserver {
    update(message: string): void {
        console.log("log update" + message)
    }
}

export class EmailObserver implements IObserver {
    update(message: string): void {
        console.log("email update" + message)
    }
}