export enum ChessType {
    red,
    black,
    none

}

export enum GameStatus {
    redWin = ChessType.red,
    blackWin = ChessType.black,
    equal,
    gaming
}