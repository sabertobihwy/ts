import { SquareGroup } from "./core/SquareGroup";
import { Direction, Point, Shape } from "./core/type";
import { panelLogicSize } from "./core/viewer/viewerConfig";

function isPoint(targetCenterPointOrDirection: any): targetCenterPointOrDirection is Point {
    if (typeof targetCenterPointOrDirection['x'] === 'undefined') {
        return false
    }
    return true
}


export class SquareRule {

    static move(squareGroup: SquareGroup, centerpointOrDirection: Point, callback?: () => void): boolean
    static move(squareGroup: SquareGroup, centerpointOrDirection: Direction, callback?: () => void): boolean
    static move(squareGroup: SquareGroup, centerpointOrDirection: Point | Direction, callback?: () => void): boolean
    static move(squareGroup: SquareGroup, centerpointOrDirection: Point | Direction, callback?: () => void): boolean {
        if (isPoint(centerpointOrDirection)) {
            return squareGroup.setCenterpoint(centerpointOrDirection, callback)
        } else {
            const centerpoint = squareGroup.centerpoint
            switch (centerpointOrDirection) {
                case Direction.DOWN:
                    return SquareRule.move(squareGroup, {
                        x: centerpoint.x,
                        y: centerpoint.y + 1
                    }, callback)

                case Direction.LEFT:
                    return SquareRule.move(squareGroup, {
                        x: centerpoint.x - 1,
                        y: centerpoint.y
                    }, callback)

                case Direction.RIGHT:
                    return SquareRule.move(squareGroup, {
                        x: centerpoint.x + 1,
                        y: centerpoint.y
                    }, callback)

                default:
                    throw new Error("Invalid Direction value");
            }
        }
    }

    static moveDirectly(squareGroup: SquareGroup, dir: Direction, callback?: () => void): void {
        while (SquareRule.move(squareGroup, dir, callback)) {

        }
    }
    static canIMove(targetCenterPoint: Point, shape: Shape): boolean {
        const result = shape.some(s => {
            const x = s.x + targetCenterPoint.x
            const y = s.y + targetCenterPoint.y
            console.log(`x=${x},y=${y},panelWidth=${panelLogicSize.width},panelHeight=${panelLogicSize.height}`)
            if (x <= -1 || x >= panelLogicSize.width || y <= 0 || y >= panelLogicSize.height) {
                console.log("trigger return false")
                return true
            }
            return false
        })
        return !result
    }



}