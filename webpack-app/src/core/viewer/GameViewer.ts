import { SquareGroup } from "../SquareGroup";
import { IGameViewer } from "../type";
import $ from 'jquery'
import { SquareViewer } from "./SquareViewer";

export class GameViewer implements IGameViewer {

    private _containerDom = $('#container')
    private _nextDom = $('#nextContainer')

    // constructor(private _next_group: SquareGroup) {

    // }

    // public set next_group(g: SquareGroup) {
    //     this._next_group = g
    // }

    showNext(g: SquareGroup): void {
        g.group.forEach((squ) => {
            const viewer = new SquareViewer(squ, this._nextDom)
            squ.viewer = viewer // show()
        })
    }

    switch(g: SquareGroup): void {
        //debugger
        g.group.forEach((squ) => {
            //debugger
            squ.viewer!.remove()
            squ.viewer = new SquareViewer(squ, this._containerDom)
        })
    }

}