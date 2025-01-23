import { SquareGroup } from "./SquareGroup"
import { colorList, Point, shapePoint } from "./type"
import { Shape } from "./type"
import { SquareViewer } from "./viewer/SquareViewer"

export function getRandom(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min,)
}

export function getRandomShape() {
    const keyLst = Object.keys(shapePoint) // string[]
    const max = keyLst.length
    const index = getRandom(0, max)
    const shape: Shape = shapePoint[keyLst[index] as unknown as number]
    return shape
}

export function getRandomSquareGroup(centerpoint: Point, container: JQuery<HTMLElement>) {
    const shape = getRandomShape()
    const idx = getRandom(0, colorList.length)
    const color = colorList[idx]
    const group = new SquareGroup(color, centerpoint,
        shape)
    group.group.forEach((squ) => {
        const viewer = new SquareViewer(squ, container)
        squ.viewer = viewer
    })
    return group
}