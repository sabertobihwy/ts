import { Square } from "../Square";
import { IViewer } from "../type";
import $ from 'jquery'
import { singleSquare } from './viewerConfig'

export class SquareViewer implements IViewer {

    private _dom?: JQuery<HTMLElement>
    private _isRemoved = false
    private _containerSize = 300

    constructor(private _square: Square, private _container: JQuery<HTMLElement>) {
    }

    show() {
        if (this._isRemoved) {
            return
        }
        if (!this._dom) {
            this._dom = $("<div>").css({
                position: 'absolute',
                width: singleSquare.width,
                height: singleSquare.height,
                left: this._square.point.x * singleSquare.width,
                top: this._square.point.y * singleSquare.height,
                border: singleSquare.border,
                boxSizing: "border-box"
            }).appendTo(this._container)
        }
        this._dom.css({
            left: this._square.point.x * singleSquare.width,
            top: this._square.point.y * singleSquare.height,
            backgroundColor: this._square.color
        })
        if (this._square.point.y * singleSquare.height >= this._containerSize) {
            this.remove()
        }
    }

    remove() {
        if (this._dom && !this._isRemoved) {
            this._dom.remove()
            this._isRemoved = true
        }
    }
}