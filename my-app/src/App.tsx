import React from 'react';
import { ChessType } from './type/ChessType';
import { Board } from './component/board/board'
import Game from './component/game/game';

export class App extends React.Component {

  // list: ChessType[] = [ChessType.red, ChessType.black, ChessType.none,
  // ChessType.red, ChessType.black, ChessType.none,
  // ChessType.red, ChessType.black, ChessType.none]

  render() {
    return (
      <div>
        <Game />
      </div>
    )
  }
}


export default App;
