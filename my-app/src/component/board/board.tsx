import React from 'react'
import { ChessType } from '../../type/ChessType'
import Chess from '../chess/chess'
import './board.css'

interface IProps {
    chesses: ChessType[],
    isGameOver?: boolean,
    onClick?: (i: number) => void
}

export const Board: React.FC<IProps> = function board({ chesses, isGameOver = false, onClick }) {
    const list = chesses.map((type, i) => (<Chess
        key={i}
        chess={type}
        onClick={() => {
            if (
                !isGameOver &&
                onClick) {
                onClick(i)
            }
        }} />))
    return (
        <div className='board'>
            {list}
        </div>
    )
}
