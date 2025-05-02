import {useState} from 'react'
import {configureStore} from "@reduxjs/toolkit";

const counterAddAction = () => {
    return {
        type: 'counter/add'
    }
}

const counterReducer = (cnt, action) => {
    if ( cnt === null || cnt === undefined ) {
        return {count: 13}
    }

    if (action.type === 'counter/add') {
        return {...cnt, count: cnt.count + 1}
    }
    return cnt;
};

const store = configureStore({
    reducer: counterReducer,
});

console.log('store state at beginning:', store.getState());
store.dispatch(counterAddAction());
console.log('store state after dispatch:', store.getState());

const selectCounterCount = (counterState) => counterState.count;

function Counter() {


    // State: a counter value
    const [counter, setCounter] = useState(0)

    // Action: code that causes an update to the state when something happens
    const increment = () => {
        // setCounter(x => x + 1)
        setCounter(counter + 2)
    }

    // View: the UI definition
    return (
        <>
            <div>
                Value: {counter}
                <button onClick={increment}>Increment</button>
            </div>
            <div>
                Redux value: {selectCounterCount(store.getState())}
                <button onClick={(event) => {
                    event.preventDefault();
                    console.log('onClick called, store state is ', store.getState());
                    store.dispatch(counterAddAction());
                }}>Increment redux
                </button>
            </div>
        </>
    )
}

export default Counter;
