import React from 'react';
import './App.css';

function Cell (props){
  let colorO = 'red';
  if(props.cell === 'O'){
    return  <td className={colorO} onClick={() => props.handlePlay(props.letter, props.index, props.cell, props.player)}>{props.cell}</td>
  } else {
    return  <td onClick={() => props.handlePlay(props.letter, props.index, props.cell, props.player)}>{props.cell}</td>
  }

}

export default Cell;
