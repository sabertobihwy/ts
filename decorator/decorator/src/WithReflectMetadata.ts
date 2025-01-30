import 'reflect-metadata'


export function descriptor(comment: string) {
    return Reflect.metadata(keySymb, comment)
}


export function printAll(obj: any) {
    if (Reflect.hasMetadata(keySymb, obj.constructor)) {
        console.log(`class: ${Reflect.getMetadata(keySymb, obj.constructor)}`)
    } else {
        console.log(`class: ${obj.constructor}`)
    }
    // contain non-enumerable 
    for (const key of Object.getOwnPropertyNames(obj)) {
        if (Reflect.hasMetadata(keySymb, obj, key)) {
            console.log(`propKey: ${key}, descriptor: ${Reflect.getMetadata(keySymb, obj, key)}`)
        } else {
            console.log(`propKey: ${key}`)
        }

    }
}

const keySymb = Symbol.for('descriptor')

//@Reflect.metadata(keySymb, "user_class_comment")
@descriptor("user_class_comment")
class User {

    //@Reflect.metadata(keySymb, "pwd_comment")
    @descriptor("pwd_comment")
    pwd: string = ""

    id: string = ""
}

const u = new User()
// console.log(Reflect.getMetadata(keySymb, u.constructor))

// console.log(Reflect.getMetadata(keySymb, u, 'pwd'))

printAll(u)

