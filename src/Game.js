import React, { useState } from 'react'
import * as S from './style'

const numRows = 40;
const numCols = 40;

const Game = () => {

  const [grid, setGrid] = useState(() => {
    const rows =[];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0));
    }
    return rows;
  });

  console.log(grid);

  return (
    <S.Main>
      <h1> Grid </h1>
    </S.Main>
  
  )
}

export default Game;
 