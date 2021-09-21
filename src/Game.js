import React, { useState, useCallback, useRef } from 'react'
import * as S from './style'
import produce from 'immer'

const numRows = 20;
const numCols = 40;

const operations = [
  [0, -1],
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1],
  [1, -1],
  [-1, 0],
  [-1, 1]  
];

const generateEmptyGrid = () => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => 0))
  }
  return rows;
}

const Game = () => {
  
  const [grid, setGrid] = useState(() => {
    return generateEmptyGrid();
  });

  console.log(grid);

  const [running, setRunning] = useState(false);

  const runningRef = useRef(running);
  runningRef.current = running;

  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
  
    setGrid(grid => {
      return produce(grid, gridCopy => {
        for (let i = 0; i < numRows; i++) {
          for (let j = 0; j < numCols; j++){
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newJ = j + y;
              if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols) {
                neighbors += grid[newI][newJ];
              }
            });

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][j] = 0;
            } else if (grid[i][j] === 0 && neighbors === 3) {
              gridCopy[i][j] = 1;
            }          
          }
        }
      });
    });

    setTimeout(runSimulation, 200);
  }, []);


  return (
    <S.Main>
      <div>
      <S.Button 
        onClick={() => {
          setRunning(!running); 
          if (!running) {runningRef.current = true; 
          runSimulation();
          }
        }}
      >
          {running ? "Parar" : "Iniciar"}
      </S.Button>
      <S.Button 
        onClick={() => {
          const rows = [];
          for (let i = 0 ; i < numRows; i++) {
            rows.push(
              Array.from(Array(numCols), () => (Math.random() > 0.6 ? 1 : 0))
            );
          }
          setGrid(rows);
        }}
      >
        Random
      </S.Button>
      <S.Button 
        onClick={() => {
          setGrid(generateEmptyGrid());
        }}
      >
        Limpar
      </S.Button>
      </div>
      
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${numCols}, 28px)`,
          margin: '30px 50px 60px 110px',
          
        }}>
        {grid.map((rows, i) => 
          rows.map((col, j) => (
            <div
              key={`${i}-${j}`}
              onClick={() => {
                const newGrid = produce(grid, gridCopy => {
                  gridCopy[i][j] = grid[i][j] ? 0 : 1;
                });
                setGrid(newGrid);
              }}
              style={{
                width: 25,
                height: 25,
                backgroundColor: grid[i][j] ? '#ff006e' : '#fff',
                border: 'solid 0.5px #666',
              }}
            />
          ))
        )}
      </div>
    </S.Main>
  
  )
}

export default Game
 