import React from 'react'
import { ChessType } from '../../type/ChessType'
import './chess.css'

interface Iprops {
    chess: ChessType,
    onClick?: () => void

}

export default function chess(props: Iprops) {
    let chess;
    if (props.chess === ChessType.red) {
        chess = <div className='redChess chess'></div>
    } else if (props.chess === ChessType.black) {
        chess = <div className='blackChess chess'></div>
    }
    return (
        <div className="grid" onClick={() => {
            if (props.chess === ChessType.none && props.onClick) {
                props.onClick()
            }
        }}>
            {chess}
        </div>
    )
}
