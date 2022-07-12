import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { counterDecrement, counterIncrement, counterReset } from '../services/actions/counterAction';

const Counter = () => {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Counter App</h2>
            <h4>count - {count}</h4>
            <button onClick={() => dispatch(counterIncrement())}>Increment</button>
            <button onClick={() => dispatch(counterReset())}>Reset</button>
            <button onClick={() => dispatch(counterDecrement())}>Decrement</button>
        </div>
    );
};

export default Counter;