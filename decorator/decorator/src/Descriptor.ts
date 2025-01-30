export function classDescriptor(comment: string) {
    return function (constructor: new (...args: any) => object) {
        constructor.prototype.$classDescription = comment
    }
}

export function propDescriptor(comment: string) {
    return function (target: any, propName: string) {
        if (!target.$propDescriptors) {
            target.$propDescriptors = []
        }
        target.$propDescriptors.push({
            propName,
            comment
        })

    }

}

export function printAll(obj: any) {
    console.log(obj.$classDescription || Object.getPrototypeOf(obj).constructor.name)
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const e = obj.$propDescriptors.find((e: any) => e.propName === key)
            if (e) {
                console.log(`prop: ${e.propName}, comment: ${e.comment}`)
            } else {
                console.log(`prop: ${key}`)
            }
        }
    }


}