import { SquareRule } from "../SquareRule";
import { Square } from "./Square";
import { Point, Shape } from "./type";

export class SquareGroup {
    private _group: readonly Square[]

    constructor(private _color: string, private _centerpoint: Point, private _shape: Shape) {
        const group: Square[] = []
        this._shape.forEach(s => {
            const squ = new Square(
                {
                    x: this._centerpoint.x + s.x,
                    y: this._centerpoint.y + s.y,
                },
                this._color
            )
            group.push(squ)
        })
        this._group = group
    }
    public get group() {
        return this._group
    }
    public get centerpoint() {
        return this._centerpoint
    }
    public setCenterpoint(val: Point, callback?: () => void): boolean {
        if (!SquareRule.canIMove(val, this._shape)) {
            callback?.()
            return false
        }
        this._centerpoint = val
        this.calculateGroup()
        return true
    }

    // 根据_centerpoint & shape 修改 group
    private calculateGroup() {
        this._group.forEach((_, i) => {
            this._group[i].point = { // trigger show()
                x: this._centerpoint.x + this._shape[i].x,
                y: this._centerpoint.y + this._shape[i].y,
            }
        })

    }


    protected _clockWise: boolean = true
    public rotate() {
        if (this._clockWise) {
            this._shape = this._shape.map(s => {
                return {
                    x: -s.y,
                    y: s.x
                }
            })
        } else {
            this._shape = this._shape.map(s => {
                return {
                    x: s.y,
                    y: -s.x
                }
            })
        }
        //debugger
        this.calculateGroup()
    }
}