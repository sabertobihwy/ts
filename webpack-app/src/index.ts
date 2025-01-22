import { Square } from "./core/Square";
import { SquareViewer } from "./core/viewer/SquareViewer";
import $ from 'jquery'


const square = new Square({ x: 3, y: 4 }, 'red')

const container = $('#container')
const viewer = new SquareViewer(square, container)
square.viewer = viewer

square.point = { x: 3, y: 4 }

setInterval(() => {
    square.point = {
        x: square.point.x,
        y: square.point.y + 1
    }
}, 1000)