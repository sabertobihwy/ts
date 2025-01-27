export const singleSquare = {
    width: 15,
    height: 15,
    border: "0.5px solid black"
}

export const panelLogicSize: SizeType = {
    width: 300 / singleSquare.width,
    height: 300 / singleSquare.height,
}

export interface SizeType {
    width: number,
    height: number
}

export const nextContainerSize: SizeType = {
    width: 150 / singleSquare.width,
    height: 150 / singleSquare.height,
}
