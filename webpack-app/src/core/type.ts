export interface Point {
    readonly x: number,
    readonly y: number
}

export interface IViewer {
    show(): void
    remove(): void
}