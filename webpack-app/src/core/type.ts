import { Square } from "./Square"

export interface Point {
    readonly x: number,
    readonly y: number
}

export interface IViewer {
    show(): void
    remove(): void
}

export type Shape = Point[]

export enum ShapeType {
    LShape,
    ZShape,
    ZMirrorShape,
    IShape
}

export interface IShapePoint {
    [key: number]: Shape

}

export const shapePoint: IShapePoint = {
    [ShapeType.LShape]: [{ x: 0, y: 0 }, { x: 0, y: -1 }, { x: 0, y: 1 }, { x: 1, y: 1 }],
    [ShapeType.ZShape]: [{ x: -1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }],
    [ShapeType.ZMirrorShape]: [{ x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: -1, y: 1 }],
    [ShapeType.IShape]: [{ x: 0, y: 0 }, { x: 0, y: -1 }, { x: 0, y: -2 }, { x: 0, y: 1 }]
}

export const colorList: string[] = [
    'red', 'yellow', 'green', 'white'
]

export enum Direction {
    DOWN,
    LEFT,
    RIGHT
}