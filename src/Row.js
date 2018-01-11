import React from 'react';
import './App.css';
import Cell from './Cell';

function Row (props){
  let letters = Object.keys(props.grid);
  return(
    <tbody>
    {letters.map((letter) =>
      <tr>
        <td>{letter}</td>
        {props.grid[letter].map((cell, index) =>
          <Cell
            cell={cell}
            index={index}
            letter={letter}
            grid={props.grid}
            player={props.player}
            handlePlay={props.handlePlay} />
        )}

      </tr>
    )}
    </tbody>
  )
}

export default Row;
