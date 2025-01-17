/**
 * dict: <K,V>
 * KEY: unique, uniform type
 * VALUE: ANY , uniform type
 * 
 * set(K,V) // can update 
 * del(key)
 * for-each entries
 * size()
 * hasKey(key)
 */
type Callback<K, V> = (key: K, value: V) => void

class Dictionary<K, V> {
    constructor(private _keys: K[] = [], private _values: V[] = []) { }
    set(key: K, value: V) {
        const idx = this._keys.indexOf(key)
        if (idx === -1) {
            this._keys.push(key)
            this._values.push(value)
        } else {
            this._keys.splice(idx, 1, key)
            this._values.splice(idx, 1, value)
        }
    }
    del(key: K) {
        const idx = this._keys.indexOf(key)
        if (idx !== -1) {
            this._keys.splice(idx, 1)
            this._values.splice(idx, 1)
        }
    }
    [Symbol.iterator]() {
        let idx = 0
        return {
            next: () => {
                if (idx <= this._keys.length - 1) {
                    return {
                        done: false,
                        value: {
                            key: this._keys[idx],
                            value: this._values[idx++]
                        }
                    }
                } else {
                    return {
                        done: true,
                        value: undefined
                    }
                }
            }

        }
    }
    get size() {
        return this._keys.length
    }
    hasKey(key: K) {
        return this._keys.indexOf(key) !== -1
    }
    forEach(cb: Callback<K, V>) {
        this._keys.forEach((key, i) => {
            cb(key, this._values[i])
        })
    }

}

const dict = new Dictionary()
dict.set(1, 'a')
dict.set(2, 'b')
dict.set(3, 'c')
// console.log(dict)
// for (const en of dict) {
//     console.log(en)
// }
// dict.del(2)
// for (const en of dict) {
//     console.log(en)
// }
dict.forEach((key, value) => {
    console.log(key, value)
})