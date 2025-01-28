import { Square } from "./core/Square";
import { SquareGroup } from "./core/SquareGroup";
import { Direction, Point, Shape } from "./core/type";
import { panelLogicSize, SizeType } from "./core/viewer/viewerConfig";

function isPoint(targetCenterPointOrDirection: any): targetCenterPointOrDirection is Point {
    if (typeof targetCenterPointOrDirection['x'] === 'undefined') {
        return false
    }
    return true
}


export class SquareRule {

    static move(squareGroup: SquareGroup, centerpointOrDirection: Point, exist_group: Square[], callback?: () => void): boolean
    static move(squareGroup: SquareGroup, centerpointOrDirection: Direction, exist_group: Square[], callback?: () => void): boolean
    static move(squareGroup: SquareGroup, centerpointOrDirection: Point | Direction, exist_group: Square[], callback?: () => void): boolean
    static move(squareGroup: SquareGroup, centerpointOrDirection: Point | Direction, exist_group: Square[], callback?: () => void): boolean {
        if (isPoint(centerpointOrDirection)) {
            return squareGroup.setCenterpoint(centerpointOrDirection, exist_group, panelLogicSize, callback)
        } else {
            const centerpoint = squareGroup.centerpoint
            switch (centerpointOrDirection) {
                case Direction.DOWN:
                    return SquareRule.move(squareGroup, {
                        x: centerpoint.x,
                        y: centerpoint.y + 1
                    }, exist_group, callback)

                case Direction.LEFT:
                    return SquareRule.move(squareGroup, {
                        x: centerpoint.x - 1,
                        y: centerpoint.y
                    }, exist_group, callback)

                case Direction.RIGHT:
                    return SquareRule.move(squareGroup, {
                        x: centerpoint.x + 1,
                        y: centerpoint.y
                    }, exist_group, callback)

                case Direction.ROTATE:
                    squareGroup.rotate()  // change this._shape 
                    return SquareRule.move(squareGroup, squareGroup.centerpoint, exist_group, callback)

                default:
                    throw new Error("Invalid Direction value");
            }
        }
    }

    static moveDirectly(squareGroup: SquareGroup, dir: Direction, exist_group: Square[], callback?: () => void): void {
        while (SquareRule.move(squareGroup, dir, exist_group, callback)) {

        }
    }
    static canIMove(targetCenterPoint: Point, shape: Shape, sizeType: SizeType, exist_group: Square[]): boolean {
        const result = shape.some(s => {
            const x = s.x + targetCenterPoint.x
            const y = s.y + targetCenterPoint.y
            // console.log(`x=${x},y=${y},panelWidth=${panelLogicSize.width},panelHeight=${panelLogicSize.height}`)
            if (x <= -1 || x >= sizeType.width || y < 0 || y >= sizeType.height) {
                //console.log(`x=${x},y=${y}`)
                console.log("trigger return false")
                return true
            }
            return false
        })
        const result2 = shape.some(s =>
            exist_group.some(e => (s.x + targetCenterPoint.x === e.point.x && s.y + targetCenterPoint.y === e.point.y)))

        return !(result || result2)
    }

    static checkLineAndDelete(exist_group: Square[]): number {
        const squareY: number[] = exist_group.map(e => e.point.y)
        const minY = Math.min(...squareY)
        const maxY = Math.max(...squareY)
        let num = 0
        for (let y = minY; y <= maxY; y++) {
            const squareLine: Square[] = exist_group.filter(e => e.point.y === y)
            if (squareLine.length === panelLogicSize.width) {
                num++
                // delete the line 
                squareLine.forEach(squ => {
                    squ.viewer!.remove()
                    const idx = exist_group.indexOf(squ)
                    exist_group.splice(idx, 1)
                })
                // y + 1 
                const squareUp = exist_group.filter(e => e.point.y < y)
                squareUp.forEach(squ => {
                    squ.point = {
                        x: squ.point.x,
                        y: squ.point.y + 1
                    }
                })
            }
        }
        return num
    }


}