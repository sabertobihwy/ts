import { SquareGroup } from "./SquareGroup"
import { colorList, Point, ShapeList } from "./type"
import { SquareViewer } from "./viewer/SquareViewer"

export function getRandom(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min,)
}

export function getRandomSquareGroup(centerpoint: Point): SquareGroup {
    const shapeIdx = getRandom(0, ShapeList.length)
    const shapeSquareGroup = ShapeList[shapeIdx]

    const idx = getRandom(0, colorList.length)
    const color = colorList[idx]
    const group = new shapeSquareGroup(color, centerpoint)
    // group.group.forEach((squ) => {
    //     const viewer = new SquareViewer(squ, container)
    //     squ.viewer = viewer
    // })
    return group
}