import React from 'react';
import { ChessType } from './type/ChessType';
import { Board } from './component/board/board'

export class App extends React.Component {

  list: ChessType[] = [ChessType.red, ChessType.black, ChessType.none,
  ChessType.red, ChessType.black, ChessType.none,
  ChessType.red, ChessType.black, ChessType.none]

  render() {
    return (
      <div>
        <Board chesses={this.list} onClick={(i) => { console.log(i) }} />
      </div>
    )
  }
}


export default App;
