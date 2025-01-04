// import { User } from "./User";
// import { UserCollectionIterator } from "./UserCollection";

// const u1 = new User('a')
// const u2 = new User('b')
// const u3 = new User('c')

// const ci = new UserCollectionIterator([u1, u2, u3])
// const itr = ci.createIterator()
// while (itr.hasNext()) {
//     console.log(itr.next()?.name)
// }

const obj = {
    name: 'a',
    age: 32,
    [Symbol.iterator](){
        const keys = Object.keys(this)
        let index = 0
        return {
            next: () => {
                if(index <= keys.length-1){
                    return {
                        value: this[keys[index++]],
                        done: false
                    }
                }else{
                    return {
                        value: undefined,
                        done: true
                    }
                }
            }
        }
    }
}

for (const element of obj) {
    console.log(element)
}