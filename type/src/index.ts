type Condition = (n: number) => boolean

function sum(n: number[], cb: Condition): number {
    let s = 0
    n.forEach((item) => {
        if (cb(item)) {
            s += item
        }
    })
    return s
}

const r = sum([1, 2, 3], (n: number) => {
    if (n < 3) {
        return true
    }
    return false
})
console.log(r)