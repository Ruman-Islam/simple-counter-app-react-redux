import { INCREMENT, DECREMENT, RESET } from '../constants/counterConstant';

const initialCounterState = {
    count: 0
}

const CounterReducer = (state = initialCounterState, actions) => {
    switch (actions.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case RESET:
            return {
                ...state,
                count: 0
            }
        default:
            return state;
    }
}

export default CounterReducer;