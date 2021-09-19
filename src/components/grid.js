import React, { useState } from 'react'

const numRows = 40;
const numCols = 40;

const Grid = () => {
    const [grid, setGrid] = useState(() => {
        const rows =[];
        for (let i = 0; i < numRows; i++) {
          rows.push(Array.from(Array(numCols), () => 0));
        }
        return rows;
      });
    
      console.log(grid);

      return (
        <h1>Grid</h1>
      )
}

export default Grid
