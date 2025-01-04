export class User {
    private _name: string
    constructor(name: string) {
        this._name = name
    }
    set name(val: string) {
        this._name = val
    }
    get name() {
        return this._name
    }

}