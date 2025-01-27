import { Square } from "./core/Square";
import { SquareGroup } from "./core/SquareGroup";
import { getRandomSquareGroup } from "./core/util";
import { SquareViewer } from "./core/viewer/SquareViewer";
import $ from 'jquery'
import { SquareRule } from "./SquareRule";
import { Direction } from "./core/type";


// const square = new Square({ x: 3, y: 4 }, 'red')

const container = $('#container')
// const viewer = new SquareViewer(square, container)
// square.viewer = viewer

//square.point = { x: 3, y: 4 }

// setInterval(() => {
//     square.point = {
//         x: square.point.x,
//         y: square.point.y + 1
//     }
// }, 1000)

const group: SquareGroup = getRandomSquareGroup({ x: 3, y: 4 })

let longPressTimer: any;

// $('#down')
//     .on('click', function () {
//         SquareRule.move(group, Direction.DOWN, () => { clearInterval(timer) })
//     })
//     .on('mousedown', function () {
//         longPressTimer = setTimeout(() => {
//             console.log('Long press triggered');
//             // 在这里处理长按事件逻辑
//             SquareRule.moveDirectly(group, Direction.DOWN, () => { clearInterval(timer) })
//         }, 1000); // 长按持续时间（毫秒），这里设置为1秒
//     })
//     .on('mouseup mouseleave', function () {
//         clearTimeout(longPressTimer); // 用户释放或移开时清除计时器
//     });


// $('#left').on('click', function () {
//     SquareRule.move(group, Direction.LEFT, () => { clearInterval(timer) })
// }).on('mousedown', function () {
//     longPressTimer = setTimeout(() => {
//         console.log('Long press triggered');
//         // 在这里处理长按事件逻辑
//         SquareRule.moveDirectly(group, Direction.LEFT, () => { clearInterval(timer) })
//     }, 1000); // 长按持续时间（毫秒），这里设置为1秒
// })
//     .on('mouseup mouseleave', function () {
//         clearTimeout(longPressTimer); // 用户释放或移开时清除计时器
//     });


// $('#right').on('click', function () {
//     SquareRule.move(group, Direction.RIGHT, () => { clearInterval(timer) })
// }).on('mousedown', function () {
//     longPressTimer = setTimeout(() => {
//         console.log('Long press triggered');
//         // 在这里处理长按事件逻辑
//         SquareRule.moveDirectly(group, Direction.RIGHT, () => { clearInterval(timer) })
//     }, 1000); // 长按持续时间（毫秒），这里设置为1秒
// })
//     .on('mouseup mouseleave', function () {
//         clearTimeout(longPressTimer); // 用户释放或移开时清除计时器
//     });

// $('#rotate').on('click', function () {
//     SquareRule.move(group, Direction.ROTATE, () => { clearInterval(timer) })
// })


// const timer = setInterval(() => {
//     SquareRule.move(group, Direction.DOWN, () => { clearInterval(timer) })
// }, 1000)