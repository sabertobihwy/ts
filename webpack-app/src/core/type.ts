import { Square } from "./Square"
import { SquareGroup } from "./SquareGroup"

export interface Point {
    readonly x: number,
    readonly y: number
}

export interface IViewer {
    show(): void
    remove(): void
}

export type Shape = Point[]

export const colorList: string[] = [
    'red', 'yellow', 'green', 'grey'
]

export enum Direction {
    DOWN,
    LEFT,
    RIGHT,
    ROTATE
}

export enum GameStatus {
    INIT,
    PLAYING,
    PAUSED,
    END
}

export interface IGameViewer {
    showNext(g: SquareGroup): void,
    switch(g: SquareGroup): void
}

export class LShape extends SquareGroup {
    constructor(_color: string, _centerpoint: Point) {
        super(_color, _centerpoint, [{ x: 0, y: 0 }, { x: 0, y: -1 }, { x: 0, y: 1 }, { x: 1, y: 1 }])
    }
    public rotate(): void {
        super.rotate()
        this._clockWise = !this._clockWise
    }
}

export class ZShape extends SquareGroup {
    constructor(_color: string, _centerpoint: Point) {
        super(_color, _centerpoint, [{ x: -1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }])
    }
    public rotate(): void {
        super.rotate()
        this._clockWise = !this._clockWise
    }
}

export class ZMirrorShape extends SquareGroup {
    constructor(_color: string, _centerpoint: Point) {
        super(_color, _centerpoint, [{ x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: -1, y: 1 }])
    }
    public rotate(): void {
        super.rotate()
        this._clockWise = !this._clockWise
    }
}

export class IShape extends SquareGroup {
    constructor(_color: string, _centerpoint: Point) {
        super(_color, _centerpoint, [{ x: 0, y: 0 }, { x: 0, y: -1 }, { x: 0, y: -2 }, { x: 0, y: 1 }])
    }
    public rotate(): void {
        super.rotate()
        this._clockWise = !this._clockWise
    }
}

export class TShape extends SquareGroup {
    constructor(_color: string, _centerpoint: Point) {
        super(_color, _centerpoint, [{ x: 0, y: 0 }, { x: 0, y: -1 }, { x: -1, y: 0 }, { x: 1, y: 0 }])
    }
    public rotate(): void {
        super.rotate()
    }
}

export class SquareShape extends SquareGroup {
    constructor(_color: string, _centerpoint: Point) {
        super(_color, _centerpoint, [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }])
    }
    public rotate(): void {
        return
    }
}

export type SquareGroupConstructor = new (color: string, centerpoint: Point) => SquareGroup;

export const ShapeList: SquareGroupConstructor[] = [
    LShape,
    ZShape,
    ZMirrorShape,
    IShape,
    TShape,
    SquareShape
]
