import React from 'react';
import './App.css';
import Row from './Row';

function Board (props){
  return(
    <table>
      <thead>
        <tr>
          <th>/</th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
        </tr>
      </thead>
        <Row
          grid={props.grid}
          player={props.player}
          handlePlay={props.handlePlay} />
    </table>
  )
}


export default Board;
