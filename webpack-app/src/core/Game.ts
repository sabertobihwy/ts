import { SquareRule } from "../SquareRule";
import { Square } from "./Square";
import { SquareGroup } from "./SquareGroup";
import { Direction, GameStatus, IGameViewer } from "./type";
import { getRandomSquareGroup } from "./util";
import { GameViewer } from "./viewer/GameViewer";
import { nextContainerSize, panelLogicSize } from "./viewer/viewerConfig";

export class Game {
    private status = GameStatus.INIT
    private curr_group?: SquareGroup
    private next_group: SquareGroup
    private exist_group: Square[] = []
    private _viewer: IGameViewer
    public timer?: number

    constructor() {
        // generate next_group, no curr_group
        this.next_group = this.generateNextGroup()
        this._viewer = new GameViewer()
        //debugger
        this._viewer.showNext(this.next_group) // show next 
    }

    private generateNextGroup() {
        // generate 
        const xCenter = Math.floor(nextContainerSize.width / 2) - 1
        const group: SquareGroup = getRandomSquareGroup({ x: xCenter, y: 0 })

        while (group.group.some(g => g.point.y < 0)) {
            group.group.forEach(g => {
                g.point = {
                    x: g.point.x,
                    y: g.point.y + 1
                }
            })
            group.setCenterpoint({ x: xCenter, y: group.centerpoint.y + 1 }, this.exist_group)
        }
        console.log(group)
        return group
    }


    switchGroup() {
        // curr = next; generate new next_group 
        const curr = this.next_group // need to change xcenter 
        this.next_group = this.generateNextGroup()
        // resetCenterpoint in curr 
        const xCenter = Math.floor(panelLogicSize.width / 2) - 1
        const result = curr.setCenterpoint({ x: xCenter, y: curr.centerpoint.y }, this.exist_group, panelLogicSize)
        //debugger
        console.log(result)
        this.curr_group = curr
    }

    showGroup() {
        this._viewer.switch(this.curr_group!) // 把上一个next显示在panel上
        this._viewer.showNext(this.next_group)
    }

    start() {
        this.status = GameStatus.PLAYING
        // switch group 
        this.switchGroup()
        this.showGroup()

        this.autoDrop()
    }

    controlLeft() {
        if (this.curr_group && this.status === GameStatus.PLAYING) {
            SquareRule.move(this.curr_group!, Direction.LEFT, this.exist_group, () => {
                this.gameOver()
            })
        }

    }
    controlRight() {
        if (this.curr_group && this.status === GameStatus.PLAYING) {
            SquareRule.move(this.curr_group!, Direction.RIGHT, this.exist_group, () => { this.gameOver() })
        }

    }
    controlDown() {
        if (this.curr_group && this.status === GameStatus.PLAYING) {
            SquareRule.moveDirectly(this.curr_group!, Direction.DOWN, this.exist_group, () => {
                // this.gameOver()
                // 触底
                this.hitBottom()
            })
        }

    }
    controlRotate() {
        if (this.curr_group && this.status === GameStatus.PLAYING) {
            SquareRule.move(this.curr_group!, Direction.ROTATE, this.exist_group, () => { this.gameOver() })
        }

    }

    hitBottom() {
        // 1. 保存已经存在的方块
        this.exist_group.push(...this.curr_group!.group)
        // 2. 切换方块
        this.switchGroup()
        this.showGroup()
        this.autoDrop()

    }

    gameOver() {
        clearInterval(this.timer)
        this.status = GameStatus.END
    }

    autoDrop() {
        if (!this.curr_group || this.timer || this.status !== GameStatus.PLAYING) {
            return
        }
        this.timer = setInterval(() => {
            SquareRule.move(this.curr_group!, Direction.DOWN, this.exist_group, () => {
                // this.gameOver()
                // 触底
                this.hitBottom()
            })
            console.log(this.curr_group!.centerpoint)
        }, 1000)
    }
}