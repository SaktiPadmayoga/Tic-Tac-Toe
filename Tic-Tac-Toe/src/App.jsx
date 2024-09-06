import { useState } from 'react';

// set state for each squre
function Square() {
  const [value, setValue] = useState('');


  // change the original value
  function handleClick() {
    setValue('X')
  }

  // run function handle when onclik the square
  return (
  <button onClick={handleClick} className='square'>{value}</button>
  
)}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    <div className='board'>
      <Square value={squares[0]}/>
      <Square value={squares[1]}/>
      <Square value={squares[2]}/>
      <Square value={squares[3]}/>
      <Square value={squares[4]}/>
      <Square value={squares[5]}/>
      <Square value={squares[6]}/>
      <Square value={squares[7]}/>
      <Square value={squares[8]}/>
    </div>
  )
}


