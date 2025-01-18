import React, { Component } from 'react'
import { Board } from '../board/board'
import { ChessType, GameStatus } from '../../type/ChessType'

interface IState {
    chesses: ChessType[],
    nextChess: ChessType.red | ChessType.black,
    gameStatus: GameStatus,
    ocuppiedNum: number
}

export default class Game extends Component<{}, IState> {

    state: IState = {
        chesses: [],
        nextChess: ChessType.black,
        gameStatus: GameStatus.gaming,
        ocuppiedNum: 0
    }

    init() {
        let chesses: ChessType[] = []
        for (let i = 0; i <= 8; i++) {
            chesses.push(ChessType.none)
        }
        this.setState({ chesses })
    }

    componentDidMount(): void {
        this.init()
    }

    handleClick(index: number) {
        const chesses = [...this.state.chesses]
        chesses[index] = this.state.nextChess
        const num = this.state.ocuppiedNum + 1
        this.setState(preStat => ({
            chesses,
            nextChess: preStat.nextChess === ChessType.black ? ChessType.red : ChessType.black,
            ocuppiedNum: preStat.ocuppiedNum + 1
        }))
        // 判定游戏结果
        this.getResult(chesses, index, num)

    }

    getResult(chesses: ChessType[], index: number, num: number) {
        const c = index % 3
        const r = (index - c) / 3
        const horMin = r * 3
        const verMin = c
        // equal or gaming 
        //debugger

        let gameStatus = GameStatus.gaming
        if (chesses[horMin] === chesses[horMin + 1] && chesses[horMin + 1] === chesses[horMin + 2]) {
            //debugger
            gameStatus = chesses[horMin] === ChessType.red ? GameStatus.redWin : GameStatus.blackWin
        } else if (chesses[verMin] === chesses[verMin + 3] && chesses[verMin + 3] === chesses[verMin + 6]) {
            // debugger
            gameStatus = chesses[verMin] === ChessType.red ? GameStatus.redWin : GameStatus.blackWin
        } else if (c === r && chesses[0] === chesses[4] && chesses[4] === chesses[8]) {
            //  debugger
            gameStatus = chesses[0] === ChessType.red ? GameStatus.redWin : GameStatus.blackWin
        } else if (c + r === 2 && chesses[2] === chesses[4] && chesses[4] === chesses[6]) {
            // debugger
            gameStatus = chesses[index] === ChessType.red ? GameStatus.redWin : GameStatus.blackWin
        } else if (num === 9) {
            gameStatus = GameStatus.equal
        }

        this.setState({
            gameStatus
        })
    }


    render() {
        let result
        if (this.state.gameStatus === GameStatus.equal) {
            result = 'equal'
        } else if (this.state.gameStatus === GameStatus.redWin) {
            result = 'red win'
        } else if (this.state.gameStatus === GameStatus.blackWin) {
            result = 'black win'
        }

        return (
            <div>
                {this.state.gameStatus !== GameStatus.gaming && (
                    <h1>Game over
                        , result is {result}
                    </h1>

                )}

                <Board chesses={this.state.chesses} onClick={this.handleClick.bind(this)}
                    isGameOver={this.state.gameStatus === GameStatus.gaming ? false : true} />
            </div>
        )
    }
}
