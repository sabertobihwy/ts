import { Iterator } from "./Interface";
import { User } from "./User";

export class UserIterator implements Iterator<User> {
    private collection: User[]
    private currentIndex: number = 0
    constructor(users: User[]) {
        this.collection = users
    }

    next(): User | undefined {
        return this.collection[this.currentIndex++]
    };
    hasNext(): boolean {
        return this.currentIndex < this.collection.length - 1
    };
}