import { User } from "./User";
import { UserCollectionIterator } from "./UserCollection";

const u1 = new User('a')
const u2 = new User('b')
const u3 = new User('c')

const ci = new UserCollectionIterator([u1, u2, u3])
const itr = ci.createIterator()
while (itr.hasNext()) {
    console.log(itr.next()?.name)
}