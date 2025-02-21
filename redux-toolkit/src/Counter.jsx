import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, increament } from './redux/counterSlice';

const Counter = () => {
    const count = useSelector((state)=>state.reducer.count);
    const dispatch = useDispatch();

    function incre(){
        dispatch(increament(1))
      }
      function decre(){
        dispatch(decreament(1))
      }

  return (
    <div>
        <button onClick={decre}>decreament</button>
        <h3>{count}</h3>
        <button onClick={incre} >increament</button>
    </div>
  )
}

export default Counter