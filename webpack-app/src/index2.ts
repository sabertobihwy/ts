import { Game } from "./core/Game"
import $ from 'jquery'

const g = new Game()

$('#start').on('click', function () {
    g.start()
})

$('#left').on('click', function () {
    g.controlLeft()
})

$('#down').on('click', function () {
    g.controlDown()
})

$('#right').on('click', function () {
    g.controlRight()
})

$('#rotate').on('click', function () {
    g.controlRotate()
})