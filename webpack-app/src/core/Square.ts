import { IViewer, Point } from "./type";

export class Square {
    private _viewer?: IViewer
    constructor(private _pointer: Point, private _color: string) {
    }
    public set viewer(viewer: IViewer) {
        this._viewer = viewer
    }
    public get point() {
        return this._pointer
    }
    public set point(p: Point) {
        this._pointer = p
        if (this._viewer) {
            this._viewer.show()
        }
    }
    public get color() {
        return this._color
    }
    public set color(color: string) {
        this._color = color
    }
}

const s = new Square({ x: 1, y: 2 }, "red")
s.point = { x: 2, y: 3 }

