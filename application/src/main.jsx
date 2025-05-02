import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Counter from './Counter.jsx'
import {Provider} from 'react-redux';
import {configureStore} from "@reduxjs/toolkit";
const counterAddAction = () => {
    return {
        type: 'counter/add'
    }
}

const counterReducer = (cnt, action) => {
    if (cnt === null || cnt === undefined) {
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

// const selectCounterCount = (counterState) => counterState.count;


createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/*<App/>*/}
        <Provider store={store}>
            <Counter store={store}/>
        </Provider>
    </StrictMode>,
)
