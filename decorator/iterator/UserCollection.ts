import { CollectionIterator, Iterator } from "./Interface";
import { User } from "./User";
import { UserIterator } from "./UserIterator";

export class UserCollectionIterator implements CollectionIterator<User> {
    private collection: User[]
    constructor(users: User[]) {
        this.collection = users
    }

    createIterator(): Iterator<User> {
        return new UserIterator(this.collection)
    }
}