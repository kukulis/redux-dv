import {useState} from 'react'
import {useDispatch} from 'react-redux';


const counterAddAction = () => {
    return {
        type: 'counter/add'
    }
}


function Counter({store}) {


    // State: a counter value
    const [counter, setCounter] = useState(0)

    // Action: code that causes an update to the state when something happens
    const increment = () => {
        // setCounter(x => x + 1)
        setCounter(counter + 2)
    }

    const dispatch = useDispatch();


    // View: the UI definition
    return (
        <>
            <div>
                Value: {counter}
                <button onClick={increment}>Increment</button>
            </div>
            <div>
                Redux value: {store.getState().count}
                <button onClick={(event) => {
                    event.preventDefault();
                    console.log('onClick called, store state is ', store.getState());
                    dispatch(counterAddAction());
                }}>Increment redux
                </button>
            </div>
        </>
    )
}

export default Counter;
